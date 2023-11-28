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
	dateYear: string;
	dateMonth: string;
	sortDateValue: string;
	name: string;
	holidayTitle: string;
	nodeId: string;
	locations: string[];
	coverPhoto: string;
	photoAlbum: string;
	textHtmlContent: string;
	attendees: string[];
	departingAirport: string;
}

export type HolidayListData = Holiday[];

export interface Person {
	name: string;
	nodeId: string;
	aliases: string[];
	attendedHolidays: Holiday[];
}
