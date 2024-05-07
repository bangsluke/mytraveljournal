import { useRouter } from "next/router";
import Constants from "../../constants/constants";
import ReturnTypeIcon from "../../services/IconS";
import styles from "./BaseInformation.module.css";

type NodeProps = {
	name: string;
	nodeId: string;
	__typename: string;
	locatedIn?: any;
};

type LastHolidayProps = {
	name: string;
	dateYear: string;
	dateMonth: string;
	nodeId: string;
};

type BaseInformationProps = {
	node: NodeProps;
	timesVisited: number | undefined;
	lastHoliday: LastHolidayProps;
};

export function BaseInformation(props: BaseInformationProps) {
	const { node, timesVisited, lastHoliday } = props; // Destructure the props
	console.log("node", node);

	const router = useRouter(); // Import the Next router

	// Get the route name from the type of the parent node
	let routeName = "";
	// @ts-ignore
	if (node.locatedIn) routeName = Constants.NodeToPath[node.locatedIn[0].__typename.toLowerCase()]; // Get the route name based on the mapped node type from constants

	// Get the type icon
	let typeIcon = ReturnTypeIcon(node.__typename, "large");

	return (
		<>
			<h3>
				{node.__typename} name: {node.name}
			</h3>
			<p>{node.nodeId}</p>

			{typeIcon}

			{/* If the node has a locatedIn property, display it */}
			{node.locatedIn && (
				<div>
					Located in:{" "}
					<p className={styles.link} onClick={() => router.push({ pathname: `/${routeName}/${node.locatedIn[0].nodeId}` })}>
						{node.locatedIn[0].name}
					</p>
				</div>
			)}

			<div>Number of times visited: {timesVisited}</div>

			<div>
				Last visited:{" "}
				<p className={styles.link} onClick={() => router.push({ pathname: `/holidays/${lastHoliday.nodeId}` })}>
					{lastHoliday.name} (
					{new Date(parseInt(lastHoliday.dateYear, 10), parseInt(lastHoliday.dateMonth, 10), 1).toLocaleString(undefined, { month: "short" })}{" "}
					{lastHoliday.dateYear})
				</p>
			</div>
		</>
	);
}
