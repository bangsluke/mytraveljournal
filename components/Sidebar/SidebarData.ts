// Define a type for the sidebar data.
export type SidebarLink = {
	id: string;
	displayName: string;
	pagePath: string;
};

// Define the data used for the sidebar.
export const SidebarData: SidebarLink[] = [
	{ id: "1", displayName: "Holidays", pagePath: "/holidays" },
	{ id: "2", displayName: "Countries", pagePath: "/countries" },
	{ id: "3", displayName: "People", pagePath: "/people" },
];
