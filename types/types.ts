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
	name: string;
	dateYear: string;
	dateMonth: string;
	nodeId: string;
	textHtmlContent?: string;
	attendees: string[];
}

export interface HolidayDataItem {
	// filename: string;
	// content: string;
	// pagePath: string;
	dateMonth: string;
	dateYear: string;
	name: string;
	nodeId: string;
	coverPhoto: string;
	textHtmlContent?: string;
	// attendees: string[];
}

export type HolidayListData = HolidayDataItem[];

export interface Person {
	name: string;
	nodeId: string;
	aliases: string[];
	textBodyText: string;
}
