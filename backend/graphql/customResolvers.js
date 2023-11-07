// Define custom resolvers
const customResolvers = {
	Query: {
		personHolidayCount: async (_, { nodeId }, { driver }) => {
			const session = driver.session();
			try {
				const result = await session.run(
					`MATCH (p:Person {nodeId: $nodeId})-[:ATTENDED]->(h:Holiday)
           RETURN p.nodeId AS nodeId, count(h) AS holidayCount`,
					{ nodeId },
				);
				const record = result.records[0];
				return {
					nodeId: record.get("nodeId"),
					holidayCount: record.get("holidayCount").toInt(),
				};
			} finally {
				session.close();
			}
		},
	},
};

export default customResolvers;
