// Define an interface for the sidebar data.
export interface SidebarLink {
	id: string;
	displayName: string;
	pagePath: string;
}

// Define the data used for the sidebar.
export const SidebarData: SidebarLink[] = [
	{ id: "1", displayName: "Holidays", pagePath: "/holidays" },
	{ id: "2", displayName: "Continents", pagePath: "/continents" },
	{ id: "3", displayName: "Countries", pagePath: "/countries" },
	{ id: "4", displayName: "People", pagePath: "/people" },
];
