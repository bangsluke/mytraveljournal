// Define custom resolvers
const customResolvers = {
	Query: {
		personHolidayCount: async (_, { name }, { driver }) => {
			const session = driver.session();
			try {
				const result = await session.run(
					`MATCH (p:Person {name: $name})-[:ATTENDED]->(h:Holiday)
           RETURN p.name AS personName, count(h) AS holidayCount`,
					{ name },
				);
				const record = result.records[0];
				return {
					personName: record.get("personName"),
					holidayCount: record.get("holidayCount").toInt(),
				};
			} finally {
				session.close();
			}
		},
	},
};

export default customResolvers;
