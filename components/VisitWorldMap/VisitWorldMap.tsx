import { useQuery } from "@apollo/client";
import { geoCentroid } from "d3-geo";
import { useCallback, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { GetCardCountsDocument } from "../../graphql/__generated__/graphql";
import { buildCountryNameToVisitCount } from "../../services/computeCardCounts";
import { CAPITAL_LABEL_BY_COUNTRY, resolveCountryVisitCount } from "../../services/countryGeoMatch";
import styles from "./VisitWorldMap.module.css";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MAIN_RGB = "254, 57, 92";

function colorsForVisitCount(count: number, maxVisits: number): { default: string; hover: string; pressed: string; stroke: string } {
	if (count <= 0) {
		return {
			default: "#d0d0d0",
			hover: "#b8b8b8",
			pressed: "#a8a8a8",
			stroke: "#9a9a9a",
		};
	}
	const t = maxVisits > 0 ? Math.min(1, count / maxVisits) : 1;
	const alpha = 0.22 + 0.78 * t;
	return {
		default: `rgba(${MAIN_RGB}, ${alpha})`,
		hover: `rgba(${MAIN_RGB}, ${Math.min(1, alpha + 0.12)})`,
		pressed: `rgba(${MAIN_RGB}, ${Math.min(1, alpha + 0.2)})`,
		stroke: "rgba(160, 160, 160, 0.95)",
	};
}

export default function VisitWorldMap() {
	const { loading, error, data } = useQuery(GetCardCountsDocument);
	const visitByCountry = useMemo(() => buildCountryNameToVisitCount(data), [data]);
	const maxVisits = useMemo(() => {
		const vals = Array.from(visitByCountry.values());
		return vals.length ? Math.max(...vals) : 0;
	}, [visitByCountry]);

	/** Baseline zoom 1 = full world in view (Natural Earth projection + scale tuned below). */
	const [zoom, setZoom] = useState(1);
	const [center, setCenter] = useState<[number, number]>([0, 0]);
	const [tooltip, setTooltip] = useState<{ title: string; subtitle: string; x: number; y: number } | null>(null);
	const [pinned, setPinned] = useState<{ title: string; subtitle: string; x: number; y: number } | null>(null);

	const showTooltip = useCallback((e: React.MouseEvent | React.TouchEvent, geoName: string, count: number) => {
		const clientX = "touches" in e && e.touches[0] ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
		const clientY = "touches" in e && e.touches[0] ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
		const next = {
			title: geoName,
			subtitle: count > 0 ? `Visited ${count} time${count === 1 ? "" : "s"}` : "Not visited yet",
			x: clientX + 12,
			y: clientY + 12,
		};
		setTooltip(next);
	}, []);

	const hideTooltip = useCallback(() => setTooltip(null), []);

	const onMoveEnd = useCallback((pos: { coordinates: [number, number]; zoom: number }) => {
		setCenter(pos.coordinates);
		setZoom(pos.zoom);
	}, []);

	const zoomIn = () => setZoom((z) => Math.min(8, z * 1.35));
	const zoomOut = () => setZoom((z) => Math.max(0.5, z / 1.35));

	const activeTip = pinned ?? tooltip;

	if (error) {
		return (
			<div className={styles.mapWrap}>
				<p className={styles.mapTitle}>Could not load travel map.</p>
			</div>
		);
	}

	return (
		<div
			className={styles.mapWrap}
			onMouseLeave={() => {
				hideTooltip();
				setPinned(null);
			}}
			role='presentation'>
			<div className={styles.svgHost}>
				{loading && (
					<div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
						<span style={{ color: "var(--secondary-accent, #888)", fontSize: "0.9rem" }}>Loading map…</span>
					</div>
				)}
				<div className={styles.zoomControls}>
					<button type='button' className={styles.zoomBtn} aria-label='Zoom in' onClick={zoomIn}>
						+
					</button>
					<button type='button' className={styles.zoomBtn} aria-label='Zoom out' onClick={zoomOut}>
						−
					</button>
				</div>
				<ComposableMap
					projection='geoNaturalEarth1'
					projectionConfig={{
						/* Higher scale = landmasses fill more of the view (less empty margin inside the SVG). */
						scale: 158,
						center: [0, 0],
					}}
					width={800}
					height={420}
					style={{ width: "100%", height: "auto", maxHeight: "100%", display: "block" }}>
					<ZoomableGroup
						zoom={zoom}
						center={center}
						onMoveEnd={onMoveEnd}
						minZoom={0.5}
						maxZoom={8}
						translateExtent={[
							[-800, -500],
							[1600, 900],
						]}>
						<Geographies geography={GEO_URL}>
							{({ geographies }) => (
								<>
									{geographies.map((geo) => {
										const props = geo.properties as Record<string, unknown>;
										const { count, matchedName } = resolveCountryVisitCount(props, visitByCountry);
										const displayName =
											(typeof props.name === "string" && props.name) ||
											(typeof props.NAME === "string" && props.NAME) ||
											(typeof props.ADMIN === "string" && props.ADMIN) ||
											"Unknown";
										const cols = colorsForVisitCount(count, maxVisits);
										return (
											<Geography
												key={geo.rsmKey}
												geography={geo}
												onMouseEnter={(e) => {
													if (!pinned) showTooltip(e, displayName, count);
												}}
												onMouseMove={(e) => {
													if (!pinned) showTooltip(e, displayName, count);
												}}
												onMouseLeave={() => {
													if (!pinned) hideTooltip();
												}}
												onTouchStart={(e) => {
													showTooltip(e, displayName, count);
													setPinned({
														title: displayName,
														subtitle: count > 0 ? `Visited ${count} time${count === 1 ? "" : "s"}` : "Not visited yet",
														x: e.touches[0].clientX + 12,
														y: e.touches[0].clientY + 12,
													});
												}}
												onClick={(e) => {
													e.stopPropagation();
													showTooltip(e, displayName, count);
													setPinned({
														title: displayName,
														subtitle: count > 0 ? `Visited ${count} time${count === 1 ? "" : "s"}` : "Not visited yet",
														x: (e as React.MouseEvent).clientX + 12,
														y: (e as React.MouseEvent).clientY + 12,
													});
												}}
												style={{
													default: { outline: "none", fill: cols.default, stroke: cols.stroke, strokeWidth: 0.35 },
													hover: { outline: "none", fill: cols.hover, stroke: cols.stroke, strokeWidth: 0.45, cursor: "pointer" },
													pressed: { outline: "none", fill: cols.pressed, stroke: cols.stroke, strokeWidth: 0.45 },
												}}
											/>
										);
									})}
									{zoom >= 3.2 &&
										geographies.map((geo) => {
											const props = geo.properties as Record<string, unknown>;
											const { count, matchedName } = resolveCountryVisitCount(props, visitByCountry);
											if (count <= 0) return null;
											const [lon, lat] = geoCentroid(geo);
											const dbName = matchedName ?? "";
											const geoShortName =
												(typeof props.name === "string" && props.name) ||
												(typeof props.NAME === "string" && props.NAME) ||
												"";
											const cap =
												(dbName && CAPITAL_LABEL_BY_COUNTRY[dbName]) ||
												(geoShortName && CAPITAL_LABEL_BY_COUNTRY[geoShortName]) ||
												null;
											const label = cap || geoShortName || "";
											if (!label) return null;
											const fs = Math.max(2.8, 9 / zoom);
											return (
												<Marker key={`cap-${geo.rsmKey}`} coordinates={[lon, lat]}>
													<text
														textAnchor='middle'
														y={-2}
														style={{
															fontFamily: "var(--font-family, ui-sans-serif)",
															fontSize: fs,
															fill: "var(--text, #222)",
															fontWeight: 600,
															paintOrder: "stroke",
															stroke: "#ffffff",
															strokeWidth: 0.35,
														}}>
														{label}
													</text>
												</Marker>
											);
										})}
								</>
							)}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
			</div>
			<div className={styles.legend}>
				<span className={styles.legendSwatch} style={{ background: "#d0d0d0" }} />
				<span>Not visited</span>
				<span className={styles.legendSwatch} style={{ background: `rgba(${MAIN_RGB}, 0.55)` }} />
				<span>Visited</span>
			</div>
			{activeTip && (
				<div className={styles.tooltip} style={{ left: activeTip.x, top: activeTip.y }}>
					<strong>{activeTip.title}</strong>
					<br />
					{activeTip.subtitle}
				</div>
			)}
		</div>
	);
}
