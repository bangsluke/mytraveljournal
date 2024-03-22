import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import GraphQLQueriesS from "../../graphql/GraphQLQueriesS";
import LogS from "../../services/LogS";
import { Holiday } from "../../types/types";
import Loading from "../Loading/Loading";
import Toast from "../Toast/Toast";
import styles from "./Lists.module.css";

export default function HolidayList() {
	const router = useRouter(); // Import the Next router

	const { loading, error, data } = useQuery(GraphQLQueriesS.GET_HOLIDAYS);
	if (loading) return <Loading BackgroundStyle={"Transparent"} />;
	if (error) {
		// If error - show error message, and raise an error toast
		LogS.error("GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: ", error.message);
		return (
			<>
				<p>Error : {error.message}</p>
				<Toast message={"GraphQLQueriesS.GET_HOLIDAYS GraphQL Error: " + error.message} duration={5} />
			</>
		);
	}

	// LogS.log("holiday data: ", data);

	return (
		<div className={styles.dataList}>
			<ul>
				{[...data.holidays]
					.sort((a: Holiday, b: Holiday) => b.sortDateValue.localeCompare(a.sortDateValue))
					.map(({ name, dateYear, dateMonth, nodeId }: Holiday) => (
						<li key={nodeId} className={styles.clickableListItem} onClick={() => router.push({ pathname: `/holidays/${nodeId}` })}>
							<h4>{name}</h4>
							<h5>
								{dateYear} {dateMonth}
							</h5>
						</li>
					))}
			</ul>
		</div>
	);
}
