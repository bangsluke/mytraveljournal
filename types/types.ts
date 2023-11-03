export interface Continent {
	name: string;
	nodeId: string;
}

export interface Country {
	name: string;
	nodeId: string;
}

export interface County {
	name: string;
	nodeId: string;
}

export interface City {
	name: string;
	nodeId: string;
}

export interface Island {
	name: string;
	nodeId: string;
}

export interface Holiday {
	// filename: string;
	// content: string;
	// pagePath: string;
	dateYear: string;
	dateMonth: string;
	name: string;
	holidayTitle: string;
	nodeId: string;
	coverPhoto: string;
	textHtmlContent: string;
	attendees: string[];
}

export type HolidayListData = Holiday[];

export interface Person {
	name: string;
	nodeId: string;
	aliases: string[];
	textBodyText: string;
}
