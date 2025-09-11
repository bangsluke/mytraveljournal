/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type BaseNodeWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type City = {
  __typename?: 'City';
  capital: Scalars['Boolean']['output'];
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Country>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type CityWhereInput = {
  capital?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Client = {
  __typename?: 'Client';
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  graphLabel: Scalars['String']['output'];
  linkedCompany: Array<Company>;
  logoURL: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type ClientWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Club = {
  __typename?: 'Club';
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  graphLabel: Scalars['String']['output'];
  logoURL: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type ClubWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  graphLabel: Scalars['String']['output'];
  logoURL: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type CompanyOrClient = Client | Company;

export type CompanyWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Continent = {
  __typename?: 'Continent';
  graphLabel: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type ContinentWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Country = {
  __typename?: 'Country';
  graphLabel: Scalars['String']['output'];
  locatedIn: Array<Continent>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type CountryWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type County = {
  __typename?: 'County';
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Country>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type CountyWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Education = {
  __typename?: 'Education';
  additionalDetails: Scalars['String']['output'];
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  fullText: Scalars['String']['output'];
  graphLabel: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  qualifications: Scalars['String']['output'];
  readableText: Scalars['String']['output'];
  textHtmlContent: Scalars['String']['output'];
};

export type EducationWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Holiday = {
  __typename?: 'Holiday';
  attendees?: Maybe<Array<Scalars['String']['output']>>;
  coverPhoto?: Maybe<Scalars['String']['output']>;
  dateDay: Scalars['String']['output'];
  dateMonth: Scalars['String']['output'];
  dateYear: Scalars['String']['output'];
  departingAirport?: Maybe<Scalars['String']['output']>;
  fullText: Scalars['String']['output'];
  graphLabel: Scalars['String']['output'];
  holidayTitle: Scalars['String']['output'];
  locations?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  photoAlbum?: Maybe<Scalars['String']['output']>;
  readableText: Scalars['String']['output'];
  sortDateValue: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  travelled_to: Array<Location>;
};

export type HolidayWhereInput = {
  dateYear?: InputMaybe<Scalars['String']['input']>;
  holidayTitle?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Island = {
  __typename?: 'Island';
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Country>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type IslandWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  __typename?: 'Location';
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Location>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type LocationWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthResponse;
  pushData: Scalars['String']['output'];
  register: AuthResponse;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  password: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Person = {
  __typename?: 'Person';
  aliases?: Maybe<Scalars['String']['output']>;
  attendedHolidays: Array<Holiday>;
  graphLabel: Scalars['String']['output'];
  linkedCompany: Array<Company>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  referenceAddress?: Maybe<Scalars['String']['output']>;
  referenceEmail?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  referenceRole?: Maybe<Scalars['String']['output']>;
};

export type PersonWhereInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Project = {
  __typename?: 'Project';
  aliases?: Maybe<Scalars['String']['output']>;
  architectureAndTechnologies: Scalars['String']['output'];
  codeURL: Scalars['String']['output'];
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  developers: Array<Person>;
  fullText: Scalars['String']['output'];
  graphLabel: Scalars['String']['output'];
  imageURL: Scalars['String']['output'];
  lessonsLearned: Scalars['String']['output'];
  linkedCompany: Array<CompanyOrClient>;
  longDescription: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  projectCategory: Scalars['String']['output'];
  projectURL: Scalars['String']['output'];
  readableText: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
  technologies: Array<Skill>;
  textHtmlContent: Scalars['String']['output'];
  toolOwner?: Maybe<Person>;
  topicRelationships: Array<TopicTarget>;
  topicTags?: Maybe<Scalars['String']['output']>;
};

export type ProjectWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  cities: Array<City>;
  clients: Array<Client>;
  clubs: Array<Club>;
  companies: Array<Company>;
  continents: Array<Continent>;
  counties: Array<County>;
  countries: Array<Country>;
  educations: Array<Education>;
  holidays: Array<Holiday>;
  islands: Array<Island>;
  locations: Array<Location>;
  people: Array<Person>;
  projects: Array<Project>;
  references: Array<Reference>;
  roles: Array<Role>;
  skills: Array<Skill>;
  states: Array<State>;
  towns: Array<Town>;
};


export type QueryCitiesArgs = {
  where?: InputMaybe<CityWhereInput>;
};


export type QueryClientsArgs = {
  where?: InputMaybe<ClientWhereInput>;
};


export type QueryClubsArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryCompaniesArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryContinentsArgs = {
  where?: InputMaybe<ContinentWhereInput>;
};


export type QueryCountiesArgs = {
  where?: InputMaybe<CountyWhereInput>;
};


export type QueryCountriesArgs = {
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryEducationsArgs = {
  where?: InputMaybe<EducationWhereInput>;
};


export type QueryHolidaysArgs = {
  where?: InputMaybe<HolidayWhereInput>;
};


export type QueryIslandsArgs = {
  where?: InputMaybe<IslandWhereInput>;
};


export type QueryLocationsArgs = {
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryPeopleArgs = {
  where?: InputMaybe<PersonWhereInput>;
};


export type QueryProjectsArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryReferencesArgs = {
  where?: InputMaybe<ReferenceWhereInput>;
};


export type QueryRolesArgs = {
  where?: InputMaybe<RoleWhereInput>;
};


export type QuerySkillsArgs = {
  where?: InputMaybe<SkillWhereInput>;
};


export type QueryStatesArgs = {
  where?: InputMaybe<StateWhereInput>;
};


export type QueryTownsArgs = {
  where?: InputMaybe<TownWhereInput>;
};

export type Reference = {
  __typename?: 'Reference';
  graphLabel: Scalars['String']['output'];
  linkedCompany: Array<Company>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  referenceAddress: Scalars['String']['output'];
  referenceEmail: Scalars['String']['output'];
  referenceNumber: Scalars['String']['output'];
  referenceRole: Scalars['String']['output'];
};

export type ReferenceWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart?: Maybe<Scalars['String']['output']>;
  fullText: Scalars['String']['output'];
  graphLabel: Scalars['String']['output'];
  keyAchievement: Scalars['String']['output'];
  linkedCompany?: Maybe<Company>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  readableText: Scalars['String']['output'];
  roleDescription: Scalars['String']['output'];
  textHtmlContent: Scalars['String']['output'];
};

export type RoleWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  graphLabel: Scalars['String']['output'];
  imageURL: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  skillDescription: Scalars['String']['output'];
  skillRating: Scalars['Int']['output'];
};

export type SkillWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type State = {
  __typename?: 'State';
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Country>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type StateWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type TopicTarget = Client | Club | Company | Education | Person | Reference | Role | Skill;

export type Town = {
  __typename?: 'Town';
  graphLabel: Scalars['String']['output'];
  linkedHolidays: Array<Holiday>;
  locatedIn: Array<Country>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
};

export type TownWhereInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  role: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type GetCardCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCardCountsQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string }>, continents: Array<{ __typename?: 'Continent', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> }>, countries: Array<{ __typename?: 'Country', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, sortDateValue: string }> }> }>, cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, islands: Array<{ __typename?: 'Island', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, people: Array<{ __typename?: 'Person', name: string, nodeId: string, attendedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }> };

export type GetContinentByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContinentByIdQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> }> };

export type GetContinentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsListQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> }> };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string }> };

export type GetCountryByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountryByIdQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string, locatedIn: Array<{ __typename?: 'Continent', nodeId: string, name: string }>, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> };

export type GetCountryAndLinkedHolidaysByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountryAndLinkedHolidaysByIdQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string, locatedIn: Array<{ __typename?: 'Continent', nodeId: string, name: string }>, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> };

export type GetCountriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesListQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCityByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCityByIdQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, locatedIn: Array<{ __typename?: 'Country', nodeId: string, name: string }>, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> };

export type GetCitiesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesListQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> };

export type GetCapitalsQueryVariables = Exact<{
  capitalCheck?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCapitalsQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCapitalsListQueryVariables = Exact<{
  capitalCheck?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCapitalsListQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetLocationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsListQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }>, islands: Array<{ __typename?: 'Island', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }>, states: Array<{ __typename?: 'State', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }>, counties: Array<{ __typename?: 'County', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> };

export type GetLocationByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', name: string, nodeId: string, locatedIn: Array<{ __typename?: 'Location', nodeId: string, name: string }>, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> };

export type GetTownsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTownsQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetTownByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTownByIdQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, locatedIn: Array<{ __typename?: 'Country', nodeId: string, name: string }>, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetTownsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTownsListQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetIslandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIslandsQuery = { __typename?: 'Query', islands: Array<{ __typename?: 'Island', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetIslandsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIslandsListQuery = { __typename?: 'Query', islands: Array<{ __typename?: 'Island', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', name: string, nodeId: string, aliases?: string | null, attendedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetPersonByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPersonByIdQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', name: string, nodeId: string, aliases?: string | null, attendedHolidays: Array<{ __typename?: 'Holiday', name: string, holidayTitle: string, nodeId: string, sortDateValue: string }> }> };

export type GetPeopleListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPeopleListQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', name: string, nodeId: string, aliases?: string | null, attendedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> };

export type GetHolidaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHolidaysQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, tags?: Array<string> | null, dateMonth: string, dateYear: string, sortDateValue: string, fullText: string, readableText: string, locations?: Array<string> | null, departingAirport?: string | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, travelled_to: Array<{ __typename?: 'Location', nodeId: string }> }> };

export type GetHolidayByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetHolidayByIdQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, tags?: Array<string> | null, dateMonth: string, dateYear: string, sortDateValue: string, fullText: string, readableText: string, locations?: Array<string> | null, departingAirport?: string | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, travelled_to: Array<{ __typename?: 'Location', nodeId: string }> }> };

export type GetHolidaysListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHolidaysListQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string, tags?: Array<string> | null, dateMonth: string, dateYear: string, sortDateValue: string, holidayTitle: string, locations?: Array<string> | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, departingAirport?: string | null }> };

export type GetPossibleHyperlinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPossibleHyperlinksQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string }>, continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }>, countries: Array<{ __typename?: 'Country', name: string, nodeId: string }>, cities: Array<{ __typename?: 'City', name: string, nodeId: string }>, towns: Array<{ __typename?: 'Town', name: string, nodeId: string }>, islands: Array<{ __typename?: 'Island', name: string, nodeId: string }>, people: Array<{ __typename?: 'Person', name: string, nodeId: string }> };


export const GetCardCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCardCounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCardCountsQuery, GetCardCountsQueryVariables>;
export const GetContinentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetContinentsQuery, GetContinentsQueryVariables>;
export const GetContinentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContinentByIdQuery, GetContinentByIdQueryVariables>;
export const GetContinentsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinentsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContinentsListQuery, GetContinentsListQueryVariables>;
export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetCountryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"locatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountryByIdQuery, GetCountryByIdQueryVariables>;
export const GetCountryAndLinkedHolidaysByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountryAndLinkedHolidaysById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"locatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountryAndLinkedHolidaysByIdQuery, GetCountryAndLinkedHolidaysByIdQueryVariables>;
export const GetCountriesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountriesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountriesListQuery, GetCountriesListQueryVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetCityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"locatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const GetCitiesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCitiesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesListQuery, GetCitiesListQueryVariables>;
export const GetCapitalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapitals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"capital"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCapitalsQuery, GetCapitalsQueryVariables>;
export const GetCapitalsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapitalsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"capital"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCapitalsListQuery, GetCapitalsListQueryVariables>;
export const GetLocationsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"counties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetLocationsListQuery, GetLocationsListQueryVariables>;
export const GetLocationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"locatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const GetTownsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTowns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownsQuery, GetTownsQueryVariables>;
export const GetTownByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTownById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"locatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownByIdQuery, GetTownByIdQueryVariables>;
export const GetTownsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTownsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownsListQuery, GetTownsListQueryVariables>;
export const GetIslandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIslands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetIslandsQuery, GetIslandsQueryVariables>;
export const GetIslandsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIslandsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetIslandsListQuery, GetIslandsListQueryVariables>;
export const GetPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeople"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetPeopleQuery, GetPeopleQueryVariables>;
export const GetPersonByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonByIdQuery, GetPersonByIdQueryVariables>;
export const GetPeopleListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeopleList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetPeopleListQuery, GetPeopleListQueryVariables>;
export const GetHolidaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullText"}},{"kind":"Field","name":{"kind":"Name","value":"readableText"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"travelled_to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}}]}}]}}]} as unknown as DocumentNode<GetHolidaysQuery, GetHolidaysQueryVariables>;
export const GetHolidayByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidayById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullText"}},{"kind":"Field","name":{"kind":"Name","value":"readableText"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"travelled_to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}}]}}]}}]} as unknown as DocumentNode<GetHolidayByIdQuery, GetHolidayByIdQueryVariables>;
export const GetHolidaysListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidaysList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}}]}}]}}]} as unknown as DocumentNode<GetHolidaysListQuery, GetHolidaysListQueryVariables>;
export const GetPossibleHyperlinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPossibleHyperlinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetPossibleHyperlinksQuery, GetPossibleHyperlinksQueryVariables>;