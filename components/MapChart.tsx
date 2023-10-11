import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChart() {
	return (
		<ComposableMap>
			<Geographies geography={geoUrl}>
				{({ geographies }) => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)}
			</Geographies>
		</ComposableMap>
	);
}
