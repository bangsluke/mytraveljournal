import { useQuery } from "@apollo/client";
import { geoCentroid } from "d3-geo";
import { Fragment, useCallback, useMemo, useState, type ReactNode } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { GetWorldMapVisitsDocument } from "../../graphql/__generated__/graphql";
import { buildCountryNameToVisitCountFromWorldMap } from "../../services/computeCardCounts";
import { CAPITAL_LABEL_BY_COUNTRY, createVisitLookup } from "../../services/countryGeoMatch";
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
	const { loading, error, data } = useQuery(GetWorldMapVisitsDocument);
	const visitByCountry = useMemo(() => buildCountryNameToVisitCountFromWorldMap(data), [data]);
	const visitLookup = useMemo(() => createVisitLookup(visitByCountry), [visitByCountry]);
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
			<div className={`${styles.svgHost} ${loading ? styles.svgHostLoading : ""}`}>
				<div className={styles.zoomControls}>
					<button type='button' className={styles.zoomBtn} aria-label='Zoom in' onClick={zoomIn} disabled={loading}>
						+
					</button>
					<button type='button' className={styles.zoomBtn} aria-label='Zoom out' onClick={zoomOut} disabled={loading}>
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
										const { count, matchedName } = visitLookup.resolve(props);
										const displayName =
											(typeof props.name === "string" && props.name) ||
											(typeof props.NAME === "string" && props.NAME) ||
											(typeof props.ADMIN === "string" && props.ADMIN) ||
											"Unknown";
										const cols = colorsForVisitCount(count, maxVisits);

										let capitalMarker: ReactNode = null;
										if (zoom >= 3.2 && count > 0) {
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
											if (label) {
												const fs = Math.max(2.8, 9 / zoom);
												capitalMarker = (
													<Marker coordinates={[lon, lat]}>
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
											}
										}

										return (
											<Fragment key={geo.rsmKey}>
												<Geography
													geography={geo}
													onMouseEnter={(e) => {
														if (!loading && !pinned) showTooltip(e, displayName, count);
													}}
													onMouseMove={(e) => {
														if (!loading && !pinned) showTooltip(e, displayName, count);
													}}
													onMouseLeave={() => {
														if (!pinned) hideTooltip();
													}}
													onTouchStart={(e) => {
														if (loading) return;
														showTooltip(e, displayName, count);
														setPinned({
															title: displayName,
															subtitle: count > 0 ? `Visited ${count} time${count === 1 ? "" : "s"}` : "Not visited yet",
															x: e.touches[0].clientX + 12,
															y: e.touches[0].clientY + 12,
														});
													}}
													onClick={(e) => {
														if (loading) return;
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
														hover: { outline: "none", fill: cols.hover, stroke: cols.stroke, strokeWidth: 0.45, cursor: loading ? "default" : "pointer" },
														pressed: { outline: "none", fill: cols.pressed, stroke: cols.stroke, strokeWidth: 0.45 },
													}}
												/>
												{capitalMarker}
											</Fragment>
										);
									})}
								</>
							)}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
				{loading && (
					<div className={styles.loadingOverlay} role='status' aria-live='polite' aria-busy='true'>
						<span className={styles.loadingLabel}>Loading map…</span>
					</div>
				)}
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
