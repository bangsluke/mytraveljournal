export interface Country {
	name: string;
}

export interface City {
	name: string;
}

export interface Holiday {
	name: string;
	date_year: string;
	date_month: string;
	node_id: string;
	text_html_content?: string;
	attendees: string[];
}

export interface Person {
	name: string;
}
