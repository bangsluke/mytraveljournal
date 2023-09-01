export interface Continent {
	name: string;
	node_id: string;
}

export interface Country {
	name: string;
	node_id: string;
}

export interface County {
	name: string;
	node_id: string;
}

export interface City {
	name: string;
	node_id: string;
}

export interface Island {
	name: string;
	node_id: string;
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
	node_id: string;
	aliases: string[];
	text_body_text: string;
}
