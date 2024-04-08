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

export type Actor = {
  __typename?: 'Actor';
  name?: Maybe<Scalars['String']['output']>;
};

export type ActorAggregateSelection = {
  __typename?: 'ActorAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNullable;
};

export type ActorCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ActorEdge = {
  __typename?: 'ActorEdge';
  cursor: Scalars['String']['output'];
  node: Actor;
};

export type ActorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ActorSort objects to sort Actors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActorSort>>;
};

/** Fields to sort Actors by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActorSort object. */
export type ActorSort = {
  name?: InputMaybe<SortDirection>;
};

export type ActorUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ActorWhere = {
  AND?: InputMaybe<Array<ActorWhere>>;
  NOT?: InputMaybe<ActorWhere>;
  OR?: InputMaybe<Array<ActorWhere>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ActorsConnection = {
  __typename?: 'ActorsConnection';
  edges: Array<ActorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CitiesConnection = {
  __typename?: 'CitiesConnection';
  edges: Array<CityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type City = {
  __typename?: 'City';
  capital: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type CityAggregateSelection = {
  __typename?: 'CityAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CityCreateInput = {
  capital: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String']['output'];
  node: City;
};

export type CityOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CitySort objects to sort Cities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CitySort>>;
};

/** Fields to sort Cities by. The order in which sorts are applied is not guaranteed when specifying many fields in one CitySort object. */
export type CitySort = {
  capital?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type CityUpdateInput = {
  capital?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type CityWhere = {
  AND?: InputMaybe<Array<CityWhere>>;
  NOT?: InputMaybe<CityWhere>;
  OR?: InputMaybe<Array<CityWhere>>;
  capital?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type ContinentAggregateSelection = {
  __typename?: 'ContinentAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type ContinentCreateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type ContinentEdge = {
  __typename?: 'ContinentEdge';
  cursor: Scalars['String']['output'];
  node: Continent;
};

export type ContinentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ContinentSort objects to sort Continents by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ContinentSort>>;
};

/** Fields to sort Continents by. The order in which sorts are applied is not guaranteed when specifying many fields in one ContinentSort object. */
export type ContinentSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type ContinentUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type ContinentWhere = {
  AND?: InputMaybe<Array<ContinentWhere>>;
  NOT?: InputMaybe<ContinentWhere>;
  OR?: InputMaybe<Array<ContinentWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ContinentsConnection = {
  __typename?: 'ContinentsConnection';
  edges: Array<ContinentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CountriesConnection = {
  __typename?: 'CountriesConnection';
  edges: Array<CountryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Country = {
  __typename?: 'Country';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type CountryAggregateSelection = {
  __typename?: 'CountryAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CountryCreateInput = {
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type CountryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CountrySort objects to sort Countries by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CountrySort>>;
};

/** Fields to sort Countries by. The order in which sorts are applied is not guaranteed when specifying many fields in one CountrySort object. */
export type CountrySort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type CountryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type CountryWhere = {
  AND?: InputMaybe<Array<CountryWhere>>;
  NOT?: InputMaybe<CountryWhere>;
  OR?: InputMaybe<Array<CountryWhere>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CreateActorsMutationResponse = {
  __typename?: 'CreateActorsMutationResponse';
  actors: Array<Actor>;
  info: CreateInfo;
};

export type CreateCitiesMutationResponse = {
  __typename?: 'CreateCitiesMutationResponse';
  cities: Array<City>;
  info: CreateInfo;
};

export type CreateContinentsMutationResponse = {
  __typename?: 'CreateContinentsMutationResponse';
  continents: Array<Continent>;
  info: CreateInfo;
};

export type CreateCountriesMutationResponse = {
  __typename?: 'CreateCountriesMutationResponse';
  countries: Array<Country>;
  info: CreateInfo;
};

export type CreateHolidaysMutationResponse = {
  __typename?: 'CreateHolidaysMutationResponse';
  holidays: Array<Holiday>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateIslandsMutationResponse = {
  __typename?: 'CreateIslandsMutationResponse';
  info: CreateInfo;
  islands: Array<Island>;
};

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse';
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreatePeopleMutationResponse = {
  __typename?: 'CreatePeopleMutationResponse';
  info: CreateInfo;
  people: Array<Person>;
};

export type CreateTownsMutationResponse = {
  __typename?: 'CreateTownsMutationResponse';
  info: CreateInfo;
  towns: Array<Town>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Holiday = {
  __typename?: 'Holiday';
  attendees?: Maybe<Array<Scalars['String']['output']>>;
  coverPhoto?: Maybe<Scalars['String']['output']>;
  dateMonth: Scalars['String']['output'];
  dateYear: Scalars['String']['output'];
  departingAirport?: Maybe<Scalars['String']['output']>;
  holidayTitle: Scalars['String']['output'];
  locations?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  photoAlbum?: Maybe<Scalars['String']['output']>;
  sortDateValue: Scalars['String']['output'];
  textHtmlContent: Scalars['String']['output'];
};

export type HolidayAggregateSelection = {
  __typename?: 'HolidayAggregateSelection';
  count: Scalars['Int']['output'];
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
  textHtmlContent: StringAggregateSelectionNonNullable;
};

export type HolidayCreateInput = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPhoto?: InputMaybe<Scalars['String']['input']>;
  dateMonth: Scalars['String']['input'];
  dateYear: Scalars['String']['input'];
  departingAirport?: InputMaybe<Scalars['String']['input']>;
  holidayTitle: Scalars['String']['input'];
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
  photoAlbum?: InputMaybe<Scalars['String']['input']>;
  sortDateValue: Scalars['String']['input'];
  textHtmlContent: Scalars['String']['input'];
};

export type HolidayEdge = {
  __typename?: 'HolidayEdge';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type HolidayOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more HolidaySort objects to sort Holidays by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HolidaySort>>;
};

/** Fields to sort Holidays by. The order in which sorts are applied is not guaranteed when specifying many fields in one HolidaySort object. */
export type HolidaySort = {
  coverPhoto?: InputMaybe<SortDirection>;
  dateMonth?: InputMaybe<SortDirection>;
  dateYear?: InputMaybe<SortDirection>;
  departingAirport?: InputMaybe<SortDirection>;
  holidayTitle?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
  photoAlbum?: InputMaybe<SortDirection>;
  sortDateValue?: InputMaybe<SortDirection>;
  textHtmlContent?: InputMaybe<SortDirection>;
};

export type HolidayUpdateInput = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  attendees_POP?: InputMaybe<Scalars['Int']['input']>;
  attendees_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPhoto?: InputMaybe<Scalars['String']['input']>;
  dateMonth?: InputMaybe<Scalars['String']['input']>;
  dateYear?: InputMaybe<Scalars['String']['input']>;
  departingAirport?: InputMaybe<Scalars['String']['input']>;
  holidayTitle?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  locations_POP?: InputMaybe<Scalars['Int']['input']>;
  locations_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  photoAlbum?: InputMaybe<Scalars['String']['input']>;
  sortDateValue?: InputMaybe<Scalars['String']['input']>;
  textHtmlContent?: InputMaybe<Scalars['String']['input']>;
};

export type HolidayWhere = {
  AND?: InputMaybe<Array<HolidayWhere>>;
  NOT?: InputMaybe<HolidayWhere>;
  OR?: InputMaybe<Array<HolidayWhere>>;
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  attendees_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  coverPhoto?: InputMaybe<Scalars['String']['input']>;
  coverPhoto_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  coverPhoto_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  coverPhoto_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  coverPhoto_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  dateMonth?: InputMaybe<Scalars['String']['input']>;
  dateMonth_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dateMonth_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dateMonth_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  dateMonth_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  dateYear?: InputMaybe<Scalars['String']['input']>;
  dateYear_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  dateYear_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  dateYear_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  dateYear_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  departingAirport?: InputMaybe<Scalars['String']['input']>;
  departingAirport_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  departingAirport_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  departingAirport_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  departingAirport_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  holidayTitle?: InputMaybe<Scalars['String']['input']>;
  holidayTitle_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  holidayTitle_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  holidayTitle_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  holidayTitle_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  locations_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  photoAlbum?: InputMaybe<Scalars['String']['input']>;
  photoAlbum_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  photoAlbum_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  photoAlbum_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photoAlbum_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDateValue?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  sortDateValue_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  textHtmlContent?: InputMaybe<Scalars['String']['input']>;
  textHtmlContent_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  textHtmlContent_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  textHtmlContent_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  textHtmlContent_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type HolidaysConnection = {
  __typename?: 'HolidaysConnection';
  edges: Array<HolidayEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID']['output'];
  shortest: Scalars['ID']['output'];
};

export type Island = {
  __typename?: 'Island';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type IslandAggregateSelection = {
  __typename?: 'IslandAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type IslandCreateInput = {
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type IslandEdge = {
  __typename?: 'IslandEdge';
  cursor: Scalars['String']['output'];
  node: Island;
};

export type IslandOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more IslandSort objects to sort Islands by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IslandSort>>;
};

/** Fields to sort Islands by. The order in which sorts are applied is not guaranteed when specifying many fields in one IslandSort object. */
export type IslandSort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type IslandUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type IslandWhere = {
  AND?: InputMaybe<Array<IslandWhere>>;
  NOT?: InputMaybe<IslandWhere>;
  OR?: InputMaybe<Array<IslandWhere>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type IslandsConnection = {
  __typename?: 'IslandsConnection';
  edges: Array<IslandEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  title?: Maybe<Scalars['String']['output']>;
};

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection';
  count: Scalars['Int']['output'];
  title: StringAggregateSelectionNullable;
};

export type MovieCreateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  title?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MovieWhere = {
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  OR?: InputMaybe<Array<MovieWhere>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  edges: Array<MovieEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActors: CreateActorsMutationResponse;
  createCities: CreateCitiesMutationResponse;
  createContinents: CreateContinentsMutationResponse;
  createCountries: CreateCountriesMutationResponse;
  createHolidays: CreateHolidaysMutationResponse;
  createIslands: CreateIslandsMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  createTowns: CreateTownsMutationResponse;
  deleteActors: DeleteInfo;
  deleteCities: DeleteInfo;
  deleteContinents: DeleteInfo;
  deleteCountries: DeleteInfo;
  deleteHolidays: DeleteInfo;
  deleteIslands: DeleteInfo;
  deleteMovies: DeleteInfo;
  deletePeople: DeleteInfo;
  deleteTowns: DeleteInfo;
  updateActors: UpdateActorsMutationResponse;
  updateCities: UpdateCitiesMutationResponse;
  updateContinents: UpdateContinentsMutationResponse;
  updateCountries: UpdateCountriesMutationResponse;
  updateHolidays: UpdateHolidaysMutationResponse;
  updateIslands: UpdateIslandsMutationResponse;
  updateMovies: UpdateMoviesMutationResponse;
  updatePeople: UpdatePeopleMutationResponse;
  updateTowns: UpdateTownsMutationResponse;
};


export type MutationCreateActorsArgs = {
  input: Array<ActorCreateInput>;
};


export type MutationCreateCitiesArgs = {
  input: Array<CityCreateInput>;
};


export type MutationCreateContinentsArgs = {
  input: Array<ContinentCreateInput>;
};


export type MutationCreateCountriesArgs = {
  input: Array<CountryCreateInput>;
};


export type MutationCreateHolidaysArgs = {
  input: Array<HolidayCreateInput>;
};


export type MutationCreateIslandsArgs = {
  input: Array<IslandCreateInput>;
};


export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};


export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationCreateTownsArgs = {
  input: Array<TownCreateInput>;
};


export type MutationDeleteActorsArgs = {
  where?: InputMaybe<ActorWhere>;
};


export type MutationDeleteCitiesArgs = {
  where?: InputMaybe<CityWhere>;
};


export type MutationDeleteContinentsArgs = {
  where?: InputMaybe<ContinentWhere>;
};


export type MutationDeleteCountriesArgs = {
  where?: InputMaybe<CountryWhere>;
};


export type MutationDeleteHolidaysArgs = {
  where?: InputMaybe<HolidayWhere>;
};


export type MutationDeleteIslandsArgs = {
  where?: InputMaybe<IslandWhere>;
};


export type MutationDeleteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
};


export type MutationDeletePeopleArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeleteTownsArgs = {
  where?: InputMaybe<TownWhere>;
};


export type MutationUpdateActorsArgs = {
  update?: InputMaybe<ActorUpdateInput>;
  where?: InputMaybe<ActorWhere>;
};


export type MutationUpdateCitiesArgs = {
  update?: InputMaybe<CityUpdateInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationUpdateContinentsArgs = {
  update?: InputMaybe<ContinentUpdateInput>;
  where?: InputMaybe<ContinentWhere>;
};


export type MutationUpdateCountriesArgs = {
  update?: InputMaybe<CountryUpdateInput>;
  where?: InputMaybe<CountryWhere>;
};


export type MutationUpdateHolidaysArgs = {
  update?: InputMaybe<HolidayUpdateInput>;
  where?: InputMaybe<HolidayWhere>;
};


export type MutationUpdateIslandsArgs = {
  update?: InputMaybe<IslandUpdateInput>;
  where?: InputMaybe<IslandWhere>;
};


export type MutationUpdateMoviesArgs = {
  update?: InputMaybe<MovieUpdateInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationUpdatePeopleArgs = {
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdateTownsArgs = {
  update?: InputMaybe<TownUpdateInput>;
  where?: InputMaybe<TownWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Person = {
  __typename?: 'Person';
  aliases?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nodeId?: Maybe<Scalars['String']['output']>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  aliases: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNullable;
};

export type PersonCreateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  aliases?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  OR?: InputMaybe<Array<PersonWhere>>;
  aliases?: InputMaybe<Scalars['String']['input']>;
  aliases_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  aliases_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  aliases_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aliases_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  actors: Array<Actor>;
  actorsAggregate: ActorAggregateSelection;
  actorsConnection: ActorsConnection;
  cities: Array<City>;
  citiesAggregate: CityAggregateSelection;
  citiesConnection: CitiesConnection;
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  continentsAggregate: ContinentAggregateSelection;
  continentsConnection: ContinentsConnection;
  countries: Array<Country>;
  countriesAggregate: CountryAggregateSelection;
  countriesConnection: CountriesConnection;
  holidays: Array<Holiday>;
  holidaysAggregate: HolidayAggregateSelection;
  holidaysConnection: HolidaysConnection;
  islands: Array<Island>;
  islandsAggregate: IslandAggregateSelection;
  islandsConnection: IslandsConnection;
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleConnection: PeopleConnection;
  towns: Array<Town>;
  townsAggregate: TownAggregateSelection;
  townsConnection: TownsConnection;
};


export type QueryActorsArgs = {
  options?: InputMaybe<ActorOptions>;
  where?: InputMaybe<ActorWhere>;
};


export type QueryActorsAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
};


export type QueryActorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ActorSort>>>;
  where?: InputMaybe<ActorWhere>;
};


export type QueryCitiesArgs = {
  options?: InputMaybe<CityOptions>;
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesAggregateArgs = {
  where?: InputMaybe<CityWhere>;
};


export type QueryCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CitySort>>>;
  where?: InputMaybe<CityWhere>;
};


export type QueryContinentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  options?: InputMaybe<ContinentOptions>;
  where?: InputMaybe<ContinentWhere>;
};


export type QueryContinentsAggregateArgs = {
  where?: InputMaybe<ContinentWhere>;
};


export type QueryContinentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ContinentSort>>>;
  where?: InputMaybe<ContinentWhere>;
};


export type QueryCountriesArgs = {
  options?: InputMaybe<CountryOptions>;
  where?: InputMaybe<CountryWhere>;
};


export type QueryCountriesAggregateArgs = {
  where?: InputMaybe<CountryWhere>;
};


export type QueryCountriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CountrySort>>>;
  where?: InputMaybe<CountryWhere>;
};


export type QueryHolidaysArgs = {
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type QueryHolidaysAggregateArgs = {
  where?: InputMaybe<HolidayWhere>;
};


export type QueryHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<HolidaySort>>>;
  where?: InputMaybe<HolidayWhere>;
};


export type QueryIslandsArgs = {
  options?: InputMaybe<IslandOptions>;
  where?: InputMaybe<IslandWhere>;
};


export type QueryIslandsAggregateArgs = {
  where?: InputMaybe<IslandWhere>;
};


export type QueryIslandsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IslandSort>>>;
  where?: InputMaybe<IslandWhere>;
};


export type QueryMoviesArgs = {
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryTownsArgs = {
  options?: InputMaybe<TownOptions>;
  where?: InputMaybe<TownWhere>;
};


export type QueryTownsAggregateArgs = {
  where?: InputMaybe<TownWhere>;
};


export type QueryTownsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<TownSort>>>;
  where?: InputMaybe<TownWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String']['output'];
  shortest: Scalars['String']['output'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type Town = {
  __typename?: 'Town';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type TownAggregateSelection = {
  __typename?: 'TownAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type TownCreateInput = {
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type TownEdge = {
  __typename?: 'TownEdge';
  cursor: Scalars['String']['output'];
  node: Town;
};

export type TownOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TownSort objects to sort Towns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TownSort>>;
};

/** Fields to sort Towns by. The order in which sorts are applied is not guaranteed when specifying many fields in one TownSort object. */
export type TownSort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type TownUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type TownWhere = {
  AND?: InputMaybe<Array<TownWhere>>;
  NOT?: InputMaybe<TownWhere>;
  OR?: InputMaybe<Array<TownWhere>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  nodeId_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  nodeId_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  nodeId_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  nodeId_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type TownsConnection = {
  __typename?: 'TownsConnection';
  edges: Array<TownEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateActorsMutationResponse = {
  __typename?: 'UpdateActorsMutationResponse';
  actors: Array<Actor>;
  info: UpdateInfo;
};

export type UpdateCitiesMutationResponse = {
  __typename?: 'UpdateCitiesMutationResponse';
  cities: Array<City>;
  info: UpdateInfo;
};

export type UpdateContinentsMutationResponse = {
  __typename?: 'UpdateContinentsMutationResponse';
  continents: Array<Continent>;
  info: UpdateInfo;
};

export type UpdateCountriesMutationResponse = {
  __typename?: 'UpdateCountriesMutationResponse';
  countries: Array<Country>;
  info: UpdateInfo;
};

export type UpdateHolidaysMutationResponse = {
  __typename?: 'UpdateHolidaysMutationResponse';
  holidays: Array<Holiday>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateIslandsMutationResponse = {
  __typename?: 'UpdateIslandsMutationResponse';
  info: UpdateInfo;
  islands: Array<Island>;
};

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse';
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: 'UpdatePeopleMutationResponse';
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdateTownsMutationResponse = {
  __typename?: 'UpdateTownsMutationResponse';
  info: UpdateInfo;
  towns: Array<Town>;
};

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean }> };


export const GetLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}}]}}]}}]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;