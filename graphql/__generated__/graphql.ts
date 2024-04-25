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
  linkedHolidays: Array<Holiday>;
  linkedHolidaysAggregate?: Maybe<CityHolidayLinkedHolidaysAggregationSelection>;
  linkedHolidaysConnection: CityLinkedHolidaysConnection;
  locatedIn: Array<Country>;
  locatedInAggregate?: Maybe<CityCountryLocatedInAggregationSelection>;
  locatedInConnection: CityLocatedInConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};


export type CityLinkedHolidaysArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type CityLinkedHolidaysAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HolidayWhere>;
};


export type CityLinkedHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CityLinkedHolidaysConnectionSort>>;
  where?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
};


export type CityLocatedInArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CountryOptions>;
  where?: InputMaybe<CountryWhere>;
};


export type CityLocatedInAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CountryWhere>;
};


export type CityLocatedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CityLocatedInConnectionSort>>;
  where?: InputMaybe<CityLocatedInConnectionWhere>;
};

export type CityAggregateSelection = {
  __typename?: 'CityAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CityConnectInput = {
  linkedHolidays?: InputMaybe<Array<CityLinkedHolidaysConnectFieldInput>>;
  locatedIn?: InputMaybe<Array<CityLocatedInConnectFieldInput>>;
};

export type CityCountryLocatedInAggregationSelection = {
  __typename?: 'CityCountryLocatedInAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CityCountryLocatedInNodeAggregateSelection>;
};

export type CityCountryLocatedInNodeAggregateSelection = {
  __typename?: 'CityCountryLocatedInNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CityCreateInput = {
  capital: Scalars['Boolean']['input'];
  linkedHolidays?: InputMaybe<CityLinkedHolidaysFieldInput>;
  locatedIn?: InputMaybe<CityLocatedInFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type CityDeleteInput = {
  linkedHolidays?: InputMaybe<Array<CityLinkedHolidaysDeleteFieldInput>>;
  locatedIn?: InputMaybe<Array<CityLocatedInDeleteFieldInput>>;
};

export type CityDisconnectInput = {
  linkedHolidays?: InputMaybe<Array<CityLinkedHolidaysDisconnectFieldInput>>;
  locatedIn?: InputMaybe<Array<CityLocatedInDisconnectFieldInput>>;
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String']['output'];
  node: City;
};

export type CityHolidayLinkedHolidaysAggregationSelection = {
  __typename?: 'CityHolidayLinkedHolidaysAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CityHolidayLinkedHolidaysNodeAggregateSelection>;
};

export type CityHolidayLinkedHolidaysNodeAggregateSelection = {
  __typename?: 'CityHolidayLinkedHolidaysNodeAggregateSelection';
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type CityLinkedHolidaysAggregateInput = {
  AND?: InputMaybe<Array<CityLinkedHolidaysAggregateInput>>;
  NOT?: InputMaybe<CityLinkedHolidaysAggregateInput>;
  OR?: InputMaybe<Array<CityLinkedHolidaysAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CityLinkedHolidaysNodeAggregationWhereInput>;
};

export type CityLinkedHolidaysConnectFieldInput = {
  connect?: InputMaybe<Array<HolidayConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<HolidayConnectWhere>;
};

export type CityLinkedHolidaysConnection = {
  __typename?: 'CityLinkedHolidaysConnection';
  edges: Array<CityLinkedHolidaysRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CityLinkedHolidaysConnectionSort = {
  node?: InputMaybe<HolidaySort>;
};

export type CityLinkedHolidaysConnectionWhere = {
  AND?: InputMaybe<Array<CityLinkedHolidaysConnectionWhere>>;
  NOT?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
  OR?: InputMaybe<Array<CityLinkedHolidaysConnectionWhere>>;
  node?: InputMaybe<HolidayWhere>;
};

export type CityLinkedHolidaysCreateFieldInput = {
  node: HolidayCreateInput;
};

export type CityLinkedHolidaysDeleteFieldInput = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
};

export type CityLinkedHolidaysDisconnectFieldInput = {
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  where?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
};

export type CityLinkedHolidaysFieldInput = {
  connect?: InputMaybe<Array<CityLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<CityLinkedHolidaysCreateFieldInput>>;
};

export type CityLinkedHolidaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CityLinkedHolidaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CityLinkedHolidaysNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CityLinkedHolidaysNodeAggregationWhereInput>>;
  coverPhoto_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CityLinkedHolidaysRelationship = {
  __typename?: 'CityLinkedHolidaysRelationship';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type CityLinkedHolidaysUpdateConnectionInput = {
  node?: InputMaybe<HolidayUpdateInput>;
};

export type CityLinkedHolidaysUpdateFieldInput = {
  connect?: InputMaybe<Array<CityLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<CityLinkedHolidaysCreateFieldInput>>;
  delete?: InputMaybe<Array<CityLinkedHolidaysDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CityLinkedHolidaysDisconnectFieldInput>>;
  update?: InputMaybe<CityLinkedHolidaysUpdateConnectionInput>;
  where?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
};

export type CityLocatedInAggregateInput = {
  AND?: InputMaybe<Array<CityLocatedInAggregateInput>>;
  NOT?: InputMaybe<CityLocatedInAggregateInput>;
  OR?: InputMaybe<Array<CityLocatedInAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CityLocatedInNodeAggregationWhereInput>;
};

export type CityLocatedInConnectFieldInput = {
  connect?: InputMaybe<Array<CountryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CountryConnectWhere>;
};

export type CityLocatedInConnection = {
  __typename?: 'CityLocatedInConnection';
  edges: Array<CityLocatedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CityLocatedInConnectionSort = {
  node?: InputMaybe<CountrySort>;
};

export type CityLocatedInConnectionWhere = {
  AND?: InputMaybe<Array<CityLocatedInConnectionWhere>>;
  NOT?: InputMaybe<CityLocatedInConnectionWhere>;
  OR?: InputMaybe<Array<CityLocatedInConnectionWhere>>;
  node?: InputMaybe<CountryWhere>;
};

export type CityLocatedInCreateFieldInput = {
  node: CountryCreateInput;
};

export type CityLocatedInDeleteFieldInput = {
  delete?: InputMaybe<CountryDeleteInput>;
  where?: InputMaybe<CityLocatedInConnectionWhere>;
};

export type CityLocatedInDisconnectFieldInput = {
  disconnect?: InputMaybe<CountryDisconnectInput>;
  where?: InputMaybe<CityLocatedInConnectionWhere>;
};

export type CityLocatedInFieldInput = {
  connect?: InputMaybe<Array<CityLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CityLocatedInCreateFieldInput>>;
};

export type CityLocatedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CityLocatedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CityLocatedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CityLocatedInNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CityLocatedInRelationship = {
  __typename?: 'CityLocatedInRelationship';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type CityLocatedInUpdateConnectionInput = {
  node?: InputMaybe<CountryUpdateInput>;
};

export type CityLocatedInUpdateFieldInput = {
  connect?: InputMaybe<Array<CityLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CityLocatedInCreateFieldInput>>;
  delete?: InputMaybe<Array<CityLocatedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CityLocatedInDisconnectFieldInput>>;
  update?: InputMaybe<CityLocatedInUpdateConnectionInput>;
  where?: InputMaybe<CityLocatedInConnectionWhere>;
};

export type CityOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CitySort objects to sort Cities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CitySort>>;
};

export type CityRelationInput = {
  linkedHolidays?: InputMaybe<Array<CityLinkedHolidaysCreateFieldInput>>;
  locatedIn?: InputMaybe<Array<CityLocatedInCreateFieldInput>>;
};

/** Fields to sort Cities by. The order in which sorts are applied is not guaranteed when specifying many fields in one CitySort object. */
export type CitySort = {
  capital?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type CityUpdateInput = {
  capital?: InputMaybe<Scalars['Boolean']['input']>;
  linkedHolidays?: InputMaybe<Array<CityLinkedHolidaysUpdateFieldInput>>;
  locatedIn?: InputMaybe<Array<CityLocatedInUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type CityWhere = {
  AND?: InputMaybe<Array<CityWhere>>;
  NOT?: InputMaybe<CityWhere>;
  OR?: InputMaybe<Array<CityWhere>>;
  capital?: InputMaybe<Scalars['Boolean']['input']>;
  linkedHolidaysAggregate?: InputMaybe<CityLinkedHolidaysAggregateInput>;
  /** Return Cities where all of the related CityLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_ALL?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
  /** Return Cities where none of the related CityLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_NONE?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
  /** Return Cities where one of the related CityLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SINGLE?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
  /** Return Cities where some of the related CityLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SOME?: InputMaybe<CityLinkedHolidaysConnectionWhere>;
  /** Return Cities where all of the related Holidays match this filter */
  linkedHolidays_ALL?: InputMaybe<HolidayWhere>;
  /** Return Cities where none of the related Holidays match this filter */
  linkedHolidays_NONE?: InputMaybe<HolidayWhere>;
  /** Return Cities where one of the related Holidays match this filter */
  linkedHolidays_SINGLE?: InputMaybe<HolidayWhere>;
  /** Return Cities where some of the related Holidays match this filter */
  linkedHolidays_SOME?: InputMaybe<HolidayWhere>;
  locatedInAggregate?: InputMaybe<CityLocatedInAggregateInput>;
  /** Return Cities where all of the related CityLocatedInConnections match this filter */
  locatedInConnection_ALL?: InputMaybe<CityLocatedInConnectionWhere>;
  /** Return Cities where none of the related CityLocatedInConnections match this filter */
  locatedInConnection_NONE?: InputMaybe<CityLocatedInConnectionWhere>;
  /** Return Cities where one of the related CityLocatedInConnections match this filter */
  locatedInConnection_SINGLE?: InputMaybe<CityLocatedInConnectionWhere>;
  /** Return Cities where some of the related CityLocatedInConnections match this filter */
  locatedInConnection_SOME?: InputMaybe<CityLocatedInConnectionWhere>;
  /** Return Cities where all of the related Countries match this filter */
  locatedIn_ALL?: InputMaybe<CountryWhere>;
  /** Return Cities where none of the related Countries match this filter */
  locatedIn_NONE?: InputMaybe<CountryWhere>;
  /** Return Cities where one of the related Countries match this filter */
  locatedIn_SINGLE?: InputMaybe<CountryWhere>;
  /** Return Cities where some of the related Countries match this filter */
  locatedIn_SOME?: InputMaybe<CountryWhere>;
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

export type ContinentConnectWhere = {
  node: ContinentWhere;
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
  locatedIn: Array<Continent>;
  locatedInAggregate?: Maybe<CountryContinentLocatedInAggregationSelection>;
  locatedInConnection: CountryLocatedInConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  placesLocatedIn: Array<Location>;
  placesLocatedInAggregate?: Maybe<CountryLocationPlacesLocatedInAggregationSelection>;
  placesLocatedInConnection: CountryPlacesLocatedInConnection;
};


export type CountryLocatedInArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ContinentOptions>;
  where?: InputMaybe<ContinentWhere>;
};


export type CountryLocatedInAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ContinentWhere>;
};


export type CountryLocatedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CountryLocatedInConnectionSort>>;
  where?: InputMaybe<CountryLocatedInConnectionWhere>;
};


export type CountryPlacesLocatedInArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type CountryPlacesLocatedInAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LocationWhere>;
};


export type CountryPlacesLocatedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CountryPlacesLocatedInConnectionSort>>;
  where?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
};

export type CountryAggregateSelection = {
  __typename?: 'CountryAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CountryConnectInput = {
  locatedIn?: InputMaybe<Array<CountryLocatedInConnectFieldInput>>;
  placesLocatedIn?: InputMaybe<Array<CountryPlacesLocatedInConnectFieldInput>>;
};

export type CountryConnectWhere = {
  node: CountryWhere;
};

export type CountryContinentLocatedInAggregationSelection = {
  __typename?: 'CountryContinentLocatedInAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CountryContinentLocatedInNodeAggregateSelection>;
};

export type CountryContinentLocatedInNodeAggregateSelection = {
  __typename?: 'CountryContinentLocatedInNodeAggregateSelection';
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CountryCreateInput = {
  locatedIn?: InputMaybe<CountryLocatedInFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
  placesLocatedIn?: InputMaybe<CountryPlacesLocatedInFieldInput>;
};

export type CountryDeleteInput = {
  locatedIn?: InputMaybe<Array<CountryLocatedInDeleteFieldInput>>;
  placesLocatedIn?: InputMaybe<Array<CountryPlacesLocatedInDeleteFieldInput>>;
};

export type CountryDisconnectInput = {
  locatedIn?: InputMaybe<Array<CountryLocatedInDisconnectFieldInput>>;
  placesLocatedIn?: InputMaybe<Array<CountryPlacesLocatedInDisconnectFieldInput>>;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type CountryLocatedInAggregateInput = {
  AND?: InputMaybe<Array<CountryLocatedInAggregateInput>>;
  NOT?: InputMaybe<CountryLocatedInAggregateInput>;
  OR?: InputMaybe<Array<CountryLocatedInAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CountryLocatedInNodeAggregationWhereInput>;
};

export type CountryLocatedInConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ContinentConnectWhere>;
};

export type CountryLocatedInConnection = {
  __typename?: 'CountryLocatedInConnection';
  edges: Array<CountryLocatedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CountryLocatedInConnectionSort = {
  node?: InputMaybe<ContinentSort>;
};

export type CountryLocatedInConnectionWhere = {
  AND?: InputMaybe<Array<CountryLocatedInConnectionWhere>>;
  NOT?: InputMaybe<CountryLocatedInConnectionWhere>;
  OR?: InputMaybe<Array<CountryLocatedInConnectionWhere>>;
  node?: InputMaybe<ContinentWhere>;
};

export type CountryLocatedInCreateFieldInput = {
  node: ContinentCreateInput;
};

export type CountryLocatedInDeleteFieldInput = {
  where?: InputMaybe<CountryLocatedInConnectionWhere>;
};

export type CountryLocatedInDisconnectFieldInput = {
  where?: InputMaybe<CountryLocatedInConnectionWhere>;
};

export type CountryLocatedInFieldInput = {
  connect?: InputMaybe<Array<CountryLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CountryLocatedInCreateFieldInput>>;
};

export type CountryLocatedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CountryLocatedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CountryLocatedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CountryLocatedInNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CountryLocatedInRelationship = {
  __typename?: 'CountryLocatedInRelationship';
  cursor: Scalars['String']['output'];
  node: Continent;
};

export type CountryLocatedInUpdateConnectionInput = {
  node?: InputMaybe<ContinentUpdateInput>;
};

export type CountryLocatedInUpdateFieldInput = {
  connect?: InputMaybe<Array<CountryLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CountryLocatedInCreateFieldInput>>;
  delete?: InputMaybe<Array<CountryLocatedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CountryLocatedInDisconnectFieldInput>>;
  update?: InputMaybe<CountryLocatedInUpdateConnectionInput>;
  where?: InputMaybe<CountryLocatedInConnectionWhere>;
};

export type CountryLocationPlacesLocatedInAggregationSelection = {
  __typename?: 'CountryLocationPlacesLocatedInAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CountryLocationPlacesLocatedInNodeAggregateSelection>;
};

export type CountryLocationPlacesLocatedInNodeAggregateSelection = {
  __typename?: 'CountryLocationPlacesLocatedInNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type CountryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CountrySort objects to sort Countries by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CountrySort>>;
};

export type CountryPlacesLocatedInAggregateInput = {
  AND?: InputMaybe<Array<CountryPlacesLocatedInAggregateInput>>;
  NOT?: InputMaybe<CountryPlacesLocatedInAggregateInput>;
  OR?: InputMaybe<Array<CountryPlacesLocatedInAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CountryPlacesLocatedInNodeAggregationWhereInput>;
};

export type CountryPlacesLocatedInConnectFieldInput = {
  connect?: InputMaybe<Array<LocationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LocationConnectWhere>;
};

export type CountryPlacesLocatedInConnection = {
  __typename?: 'CountryPlacesLocatedInConnection';
  edges: Array<CountryPlacesLocatedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CountryPlacesLocatedInConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type CountryPlacesLocatedInConnectionWhere = {
  AND?: InputMaybe<Array<CountryPlacesLocatedInConnectionWhere>>;
  NOT?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
  OR?: InputMaybe<Array<CountryPlacesLocatedInConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
};

export type CountryPlacesLocatedInCreateFieldInput = {
  node: LocationCreateInput;
};

export type CountryPlacesLocatedInDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
};

export type CountryPlacesLocatedInDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
};

export type CountryPlacesLocatedInFieldInput = {
  connect?: InputMaybe<Array<CountryPlacesLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CountryPlacesLocatedInCreateFieldInput>>;
};

export type CountryPlacesLocatedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CountryPlacesLocatedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CountryPlacesLocatedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CountryPlacesLocatedInNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CountryPlacesLocatedInRelationship = {
  __typename?: 'CountryPlacesLocatedInRelationship';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type CountryPlacesLocatedInUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type CountryPlacesLocatedInUpdateFieldInput = {
  connect?: InputMaybe<Array<CountryPlacesLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<CountryPlacesLocatedInCreateFieldInput>>;
  delete?: InputMaybe<Array<CountryPlacesLocatedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CountryPlacesLocatedInDisconnectFieldInput>>;
  update?: InputMaybe<CountryPlacesLocatedInUpdateConnectionInput>;
  where?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
};

export type CountryRelationInput = {
  locatedIn?: InputMaybe<Array<CountryLocatedInCreateFieldInput>>;
  placesLocatedIn?: InputMaybe<Array<CountryPlacesLocatedInCreateFieldInput>>;
};

/** Fields to sort Countries by. The order in which sorts are applied is not guaranteed when specifying many fields in one CountrySort object. */
export type CountrySort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type CountryUpdateInput = {
  locatedIn?: InputMaybe<Array<CountryLocatedInUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  placesLocatedIn?: InputMaybe<Array<CountryPlacesLocatedInUpdateFieldInput>>;
};

export type CountryWhere = {
  AND?: InputMaybe<Array<CountryWhere>>;
  NOT?: InputMaybe<CountryWhere>;
  OR?: InputMaybe<Array<CountryWhere>>;
  locatedInAggregate?: InputMaybe<CountryLocatedInAggregateInput>;
  /** Return Countries where all of the related CountryLocatedInConnections match this filter */
  locatedInConnection_ALL?: InputMaybe<CountryLocatedInConnectionWhere>;
  /** Return Countries where none of the related CountryLocatedInConnections match this filter */
  locatedInConnection_NONE?: InputMaybe<CountryLocatedInConnectionWhere>;
  /** Return Countries where one of the related CountryLocatedInConnections match this filter */
  locatedInConnection_SINGLE?: InputMaybe<CountryLocatedInConnectionWhere>;
  /** Return Countries where some of the related CountryLocatedInConnections match this filter */
  locatedInConnection_SOME?: InputMaybe<CountryLocatedInConnectionWhere>;
  /** Return Countries where all of the related Continents match this filter */
  locatedIn_ALL?: InputMaybe<ContinentWhere>;
  /** Return Countries where none of the related Continents match this filter */
  locatedIn_NONE?: InputMaybe<ContinentWhere>;
  /** Return Countries where one of the related Continents match this filter */
  locatedIn_SINGLE?: InputMaybe<ContinentWhere>;
  /** Return Countries where some of the related Continents match this filter */
  locatedIn_SOME?: InputMaybe<ContinentWhere>;
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
  placesLocatedInAggregate?: InputMaybe<CountryPlacesLocatedInAggregateInput>;
  /** Return Countries where all of the related CountryPlacesLocatedInConnections match this filter */
  placesLocatedInConnection_ALL?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
  /** Return Countries where none of the related CountryPlacesLocatedInConnections match this filter */
  placesLocatedInConnection_NONE?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
  /** Return Countries where one of the related CountryPlacesLocatedInConnections match this filter */
  placesLocatedInConnection_SINGLE?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
  /** Return Countries where some of the related CountryPlacesLocatedInConnections match this filter */
  placesLocatedInConnection_SOME?: InputMaybe<CountryPlacesLocatedInConnectionWhere>;
  /** Return Countries where all of the related Locations match this filter */
  placesLocatedIn_ALL?: InputMaybe<LocationWhere>;
  /** Return Countries where none of the related Locations match this filter */
  placesLocatedIn_NONE?: InputMaybe<LocationWhere>;
  /** Return Countries where one of the related Locations match this filter */
  placesLocatedIn_SINGLE?: InputMaybe<LocationWhere>;
  /** Return Countries where some of the related Locations match this filter */
  placesLocatedIn_SOME?: InputMaybe<LocationWhere>;
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

export type CreateLocationsMutationResponse = {
  __typename?: 'CreateLocationsMutationResponse';
  info: CreateInfo;
  locations: Array<Location>;
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
  fullText: Scalars['String']['output'];
  holidayTitle: Scalars['String']['output'];
  locations?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  photoAlbum?: Maybe<Scalars['String']['output']>;
  readableText: Scalars['String']['output'];
  sortDateValue: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  travelled_to: Array<Location>;
  travelled_toAggregate?: Maybe<HolidayLocationTravelled_ToAggregationSelection>;
  travelled_toConnection: HolidayTravelled_ToConnection;
};


export type HolidayTravelled_ToArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type HolidayTravelled_ToAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LocationWhere>;
};


export type HolidayTravelled_ToConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<HolidayTravelled_ToConnectionSort>>;
  where?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
};

export type HolidayAggregateSelection = {
  __typename?: 'HolidayAggregateSelection';
  count: Scalars['Int']['output'];
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type HolidayConnectInput = {
  travelled_to?: InputMaybe<Array<HolidayTravelled_ToConnectFieldInput>>;
};

export type HolidayConnectWhere = {
  node: HolidayWhere;
};

export type HolidayCreateInput = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPhoto?: InputMaybe<Scalars['String']['input']>;
  dateMonth: Scalars['String']['input'];
  dateYear: Scalars['String']['input'];
  departingAirport?: InputMaybe<Scalars['String']['input']>;
  fullText: Scalars['String']['input'];
  holidayTitle: Scalars['String']['input'];
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
  photoAlbum?: InputMaybe<Scalars['String']['input']>;
  readableText: Scalars['String']['input'];
  sortDateValue: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  travelled_to?: InputMaybe<HolidayTravelled_ToFieldInput>;
};

export type HolidayDeleteInput = {
  travelled_to?: InputMaybe<Array<HolidayTravelled_ToDeleteFieldInput>>;
};

export type HolidayDisconnectInput = {
  travelled_to?: InputMaybe<Array<HolidayTravelled_ToDisconnectFieldInput>>;
};

export type HolidayEdge = {
  __typename?: 'HolidayEdge';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type HolidayLocationTravelled_ToAggregationSelection = {
  __typename?: 'HolidayLocationTravelled_toAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<HolidayLocationTravelled_ToNodeAggregateSelection>;
};

export type HolidayLocationTravelled_ToNodeAggregateSelection = {
  __typename?: 'HolidayLocationTravelled_toNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type HolidayOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more HolidaySort objects to sort Holidays by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HolidaySort>>;
};

export type HolidayRelationInput = {
  travelled_to?: InputMaybe<Array<HolidayTravelled_ToCreateFieldInput>>;
};

/** Fields to sort Holidays by. The order in which sorts are applied is not guaranteed when specifying many fields in one HolidaySort object. */
export type HolidaySort = {
  coverPhoto?: InputMaybe<SortDirection>;
  dateMonth?: InputMaybe<SortDirection>;
  dateYear?: InputMaybe<SortDirection>;
  departingAirport?: InputMaybe<SortDirection>;
  fullText?: InputMaybe<SortDirection>;
  holidayTitle?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
  photoAlbum?: InputMaybe<SortDirection>;
  readableText?: InputMaybe<SortDirection>;
  sortDateValue?: InputMaybe<SortDirection>;
};

export type HolidayTravelled_ToAggregateInput = {
  AND?: InputMaybe<Array<HolidayTravelled_ToAggregateInput>>;
  NOT?: InputMaybe<HolidayTravelled_ToAggregateInput>;
  OR?: InputMaybe<Array<HolidayTravelled_ToAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<HolidayTravelled_ToNodeAggregationWhereInput>;
};

export type HolidayTravelled_ToConnectFieldInput = {
  connect?: InputMaybe<Array<LocationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<LocationConnectWhere>;
};

export type HolidayTravelled_ToConnection = {
  __typename?: 'HolidayTravelled_toConnection';
  edges: Array<HolidayTravelled_ToRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HolidayTravelled_ToConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type HolidayTravelled_ToConnectionWhere = {
  AND?: InputMaybe<Array<HolidayTravelled_ToConnectionWhere>>;
  NOT?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
  OR?: InputMaybe<Array<HolidayTravelled_ToConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
};

export type HolidayTravelled_ToCreateFieldInput = {
  node: LocationCreateInput;
};

export type HolidayTravelled_ToDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
};

export type HolidayTravelled_ToDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
};

export type HolidayTravelled_ToFieldInput = {
  connect?: InputMaybe<Array<HolidayTravelled_ToConnectFieldInput>>;
  create?: InputMaybe<Array<HolidayTravelled_ToCreateFieldInput>>;
};

export type HolidayTravelled_ToNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HolidayTravelled_ToNodeAggregationWhereInput>>;
  NOT?: InputMaybe<HolidayTravelled_ToNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<HolidayTravelled_ToNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type HolidayTravelled_ToRelationship = {
  __typename?: 'HolidayTravelled_toRelationship';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type HolidayTravelled_ToUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type HolidayTravelled_ToUpdateFieldInput = {
  connect?: InputMaybe<Array<HolidayTravelled_ToConnectFieldInput>>;
  create?: InputMaybe<Array<HolidayTravelled_ToCreateFieldInput>>;
  delete?: InputMaybe<Array<HolidayTravelled_ToDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HolidayTravelled_ToDisconnectFieldInput>>;
  update?: InputMaybe<HolidayTravelled_ToUpdateConnectionInput>;
  where?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
};

export type HolidayUpdateInput = {
  attendees?: InputMaybe<Array<Scalars['String']['input']>>;
  attendees_POP?: InputMaybe<Scalars['Int']['input']>;
  attendees_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  coverPhoto?: InputMaybe<Scalars['String']['input']>;
  dateMonth?: InputMaybe<Scalars['String']['input']>;
  dateYear?: InputMaybe<Scalars['String']['input']>;
  departingAirport?: InputMaybe<Scalars['String']['input']>;
  fullText?: InputMaybe<Scalars['String']['input']>;
  holidayTitle?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<Scalars['String']['input']>>;
  locations_POP?: InputMaybe<Scalars['Int']['input']>;
  locations_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
  photoAlbum?: InputMaybe<Scalars['String']['input']>;
  readableText?: InputMaybe<Scalars['String']['input']>;
  sortDateValue?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_POP?: InputMaybe<Scalars['Int']['input']>;
  tags_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
  travelled_to?: InputMaybe<Array<HolidayTravelled_ToUpdateFieldInput>>;
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
  fullText?: InputMaybe<Scalars['String']['input']>;
  fullText_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  fullText_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  fullText_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  fullText_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
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
  readableText?: InputMaybe<Scalars['String']['input']>;
  readableText_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  readableText_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  readableText_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  readableText_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDateValue?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  sortDateValue_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  sortDateValue_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_INCLUDES?: InputMaybe<Scalars['String']['input']>;
  travelled_toAggregate?: InputMaybe<HolidayTravelled_ToAggregateInput>;
  /** Return Holidays where all of the related HolidayTravelled_toConnections match this filter */
  travelled_toConnection_ALL?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
  /** Return Holidays where none of the related HolidayTravelled_toConnections match this filter */
  travelled_toConnection_NONE?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
  /** Return Holidays where one of the related HolidayTravelled_toConnections match this filter */
  travelled_toConnection_SINGLE?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
  /** Return Holidays where some of the related HolidayTravelled_toConnections match this filter */
  travelled_toConnection_SOME?: InputMaybe<HolidayTravelled_ToConnectionWhere>;
  /** Return Holidays where all of the related Locations match this filter */
  travelled_to_ALL?: InputMaybe<LocationWhere>;
  /** Return Holidays where none of the related Locations match this filter */
  travelled_to_NONE?: InputMaybe<LocationWhere>;
  /** Return Holidays where one of the related Locations match this filter */
  travelled_to_SINGLE?: InputMaybe<LocationWhere>;
  /** Return Holidays where some of the related Locations match this filter */
  travelled_to_SOME?: InputMaybe<LocationWhere>;
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
  linkedHolidays: Array<Holiday>;
  linkedHolidaysAggregate?: Maybe<IslandHolidayLinkedHolidaysAggregationSelection>;
  linkedHolidaysConnection: IslandLinkedHolidaysConnection;
  locatedIn: Array<Country>;
  locatedInAggregate?: Maybe<IslandCountryLocatedInAggregationSelection>;
  locatedInConnection: IslandLocatedInConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};


export type IslandLinkedHolidaysArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type IslandLinkedHolidaysAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HolidayWhere>;
};


export type IslandLinkedHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<IslandLinkedHolidaysConnectionSort>>;
  where?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
};


export type IslandLocatedInArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CountryOptions>;
  where?: InputMaybe<CountryWhere>;
};


export type IslandLocatedInAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CountryWhere>;
};


export type IslandLocatedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<IslandLocatedInConnectionSort>>;
  where?: InputMaybe<IslandLocatedInConnectionWhere>;
};

export type IslandAggregateSelection = {
  __typename?: 'IslandAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type IslandConnectInput = {
  linkedHolidays?: InputMaybe<Array<IslandLinkedHolidaysConnectFieldInput>>;
  locatedIn?: InputMaybe<Array<IslandLocatedInConnectFieldInput>>;
};

export type IslandCountryLocatedInAggregationSelection = {
  __typename?: 'IslandCountryLocatedInAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<IslandCountryLocatedInNodeAggregateSelection>;
};

export type IslandCountryLocatedInNodeAggregateSelection = {
  __typename?: 'IslandCountryLocatedInNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type IslandCreateInput = {
  linkedHolidays?: InputMaybe<IslandLinkedHolidaysFieldInput>;
  locatedIn?: InputMaybe<IslandLocatedInFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type IslandDeleteInput = {
  linkedHolidays?: InputMaybe<Array<IslandLinkedHolidaysDeleteFieldInput>>;
  locatedIn?: InputMaybe<Array<IslandLocatedInDeleteFieldInput>>;
};

export type IslandDisconnectInput = {
  linkedHolidays?: InputMaybe<Array<IslandLinkedHolidaysDisconnectFieldInput>>;
  locatedIn?: InputMaybe<Array<IslandLocatedInDisconnectFieldInput>>;
};

export type IslandEdge = {
  __typename?: 'IslandEdge';
  cursor: Scalars['String']['output'];
  node: Island;
};

export type IslandHolidayLinkedHolidaysAggregationSelection = {
  __typename?: 'IslandHolidayLinkedHolidaysAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<IslandHolidayLinkedHolidaysNodeAggregateSelection>;
};

export type IslandHolidayLinkedHolidaysNodeAggregateSelection = {
  __typename?: 'IslandHolidayLinkedHolidaysNodeAggregateSelection';
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type IslandLinkedHolidaysAggregateInput = {
  AND?: InputMaybe<Array<IslandLinkedHolidaysAggregateInput>>;
  NOT?: InputMaybe<IslandLinkedHolidaysAggregateInput>;
  OR?: InputMaybe<Array<IslandLinkedHolidaysAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<IslandLinkedHolidaysNodeAggregationWhereInput>;
};

export type IslandLinkedHolidaysConnectFieldInput = {
  connect?: InputMaybe<Array<HolidayConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<HolidayConnectWhere>;
};

export type IslandLinkedHolidaysConnection = {
  __typename?: 'IslandLinkedHolidaysConnection';
  edges: Array<IslandLinkedHolidaysRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IslandLinkedHolidaysConnectionSort = {
  node?: InputMaybe<HolidaySort>;
};

export type IslandLinkedHolidaysConnectionWhere = {
  AND?: InputMaybe<Array<IslandLinkedHolidaysConnectionWhere>>;
  NOT?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
  OR?: InputMaybe<Array<IslandLinkedHolidaysConnectionWhere>>;
  node?: InputMaybe<HolidayWhere>;
};

export type IslandLinkedHolidaysCreateFieldInput = {
  node: HolidayCreateInput;
};

export type IslandLinkedHolidaysDeleteFieldInput = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
};

export type IslandLinkedHolidaysDisconnectFieldInput = {
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  where?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
};

export type IslandLinkedHolidaysFieldInput = {
  connect?: InputMaybe<Array<IslandLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<IslandLinkedHolidaysCreateFieldInput>>;
};

export type IslandLinkedHolidaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IslandLinkedHolidaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<IslandLinkedHolidaysNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<IslandLinkedHolidaysNodeAggregationWhereInput>>;
  coverPhoto_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type IslandLinkedHolidaysRelationship = {
  __typename?: 'IslandLinkedHolidaysRelationship';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type IslandLinkedHolidaysUpdateConnectionInput = {
  node?: InputMaybe<HolidayUpdateInput>;
};

export type IslandLinkedHolidaysUpdateFieldInput = {
  connect?: InputMaybe<Array<IslandLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<IslandLinkedHolidaysCreateFieldInput>>;
  delete?: InputMaybe<Array<IslandLinkedHolidaysDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IslandLinkedHolidaysDisconnectFieldInput>>;
  update?: InputMaybe<IslandLinkedHolidaysUpdateConnectionInput>;
  where?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
};

export type IslandLocatedInAggregateInput = {
  AND?: InputMaybe<Array<IslandLocatedInAggregateInput>>;
  NOT?: InputMaybe<IslandLocatedInAggregateInput>;
  OR?: InputMaybe<Array<IslandLocatedInAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<IslandLocatedInNodeAggregationWhereInput>;
};

export type IslandLocatedInConnectFieldInput = {
  connect?: InputMaybe<Array<CountryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CountryConnectWhere>;
};

export type IslandLocatedInConnection = {
  __typename?: 'IslandLocatedInConnection';
  edges: Array<IslandLocatedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IslandLocatedInConnectionSort = {
  node?: InputMaybe<CountrySort>;
};

export type IslandLocatedInConnectionWhere = {
  AND?: InputMaybe<Array<IslandLocatedInConnectionWhere>>;
  NOT?: InputMaybe<IslandLocatedInConnectionWhere>;
  OR?: InputMaybe<Array<IslandLocatedInConnectionWhere>>;
  node?: InputMaybe<CountryWhere>;
};

export type IslandLocatedInCreateFieldInput = {
  node: CountryCreateInput;
};

export type IslandLocatedInDeleteFieldInput = {
  delete?: InputMaybe<CountryDeleteInput>;
  where?: InputMaybe<IslandLocatedInConnectionWhere>;
};

export type IslandLocatedInDisconnectFieldInput = {
  disconnect?: InputMaybe<CountryDisconnectInput>;
  where?: InputMaybe<IslandLocatedInConnectionWhere>;
};

export type IslandLocatedInFieldInput = {
  connect?: InputMaybe<Array<IslandLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<IslandLocatedInCreateFieldInput>>;
};

export type IslandLocatedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IslandLocatedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<IslandLocatedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<IslandLocatedInNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type IslandLocatedInRelationship = {
  __typename?: 'IslandLocatedInRelationship';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type IslandLocatedInUpdateConnectionInput = {
  node?: InputMaybe<CountryUpdateInput>;
};

export type IslandLocatedInUpdateFieldInput = {
  connect?: InputMaybe<Array<IslandLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<IslandLocatedInCreateFieldInput>>;
  delete?: InputMaybe<Array<IslandLocatedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IslandLocatedInDisconnectFieldInput>>;
  update?: InputMaybe<IslandLocatedInUpdateConnectionInput>;
  where?: InputMaybe<IslandLocatedInConnectionWhere>;
};

export type IslandOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more IslandSort objects to sort Islands by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IslandSort>>;
};

export type IslandRelationInput = {
  linkedHolidays?: InputMaybe<Array<IslandLinkedHolidaysCreateFieldInput>>;
  locatedIn?: InputMaybe<Array<IslandLocatedInCreateFieldInput>>;
};

/** Fields to sort Islands by. The order in which sorts are applied is not guaranteed when specifying many fields in one IslandSort object. */
export type IslandSort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type IslandUpdateInput = {
  linkedHolidays?: InputMaybe<Array<IslandLinkedHolidaysUpdateFieldInput>>;
  locatedIn?: InputMaybe<Array<IslandLocatedInUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type IslandWhere = {
  AND?: InputMaybe<Array<IslandWhere>>;
  NOT?: InputMaybe<IslandWhere>;
  OR?: InputMaybe<Array<IslandWhere>>;
  linkedHolidaysAggregate?: InputMaybe<IslandLinkedHolidaysAggregateInput>;
  /** Return Islands where all of the related IslandLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_ALL?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
  /** Return Islands where none of the related IslandLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_NONE?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
  /** Return Islands where one of the related IslandLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SINGLE?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
  /** Return Islands where some of the related IslandLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SOME?: InputMaybe<IslandLinkedHolidaysConnectionWhere>;
  /** Return Islands where all of the related Holidays match this filter */
  linkedHolidays_ALL?: InputMaybe<HolidayWhere>;
  /** Return Islands where none of the related Holidays match this filter */
  linkedHolidays_NONE?: InputMaybe<HolidayWhere>;
  /** Return Islands where one of the related Holidays match this filter */
  linkedHolidays_SINGLE?: InputMaybe<HolidayWhere>;
  /** Return Islands where some of the related Holidays match this filter */
  linkedHolidays_SOME?: InputMaybe<HolidayWhere>;
  locatedInAggregate?: InputMaybe<IslandLocatedInAggregateInput>;
  /** Return Islands where all of the related IslandLocatedInConnections match this filter */
  locatedInConnection_ALL?: InputMaybe<IslandLocatedInConnectionWhere>;
  /** Return Islands where none of the related IslandLocatedInConnections match this filter */
  locatedInConnection_NONE?: InputMaybe<IslandLocatedInConnectionWhere>;
  /** Return Islands where one of the related IslandLocatedInConnections match this filter */
  locatedInConnection_SINGLE?: InputMaybe<IslandLocatedInConnectionWhere>;
  /** Return Islands where some of the related IslandLocatedInConnections match this filter */
  locatedInConnection_SOME?: InputMaybe<IslandLocatedInConnectionWhere>;
  /** Return Islands where all of the related Countries match this filter */
  locatedIn_ALL?: InputMaybe<CountryWhere>;
  /** Return Islands where none of the related Countries match this filter */
  locatedIn_NONE?: InputMaybe<CountryWhere>;
  /** Return Islands where one of the related Countries match this filter */
  locatedIn_SINGLE?: InputMaybe<CountryWhere>;
  /** Return Islands where some of the related Countries match this filter */
  locatedIn_SOME?: InputMaybe<CountryWhere>;
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

export type Location = {
  __typename?: 'Location';
  linkedHolidays: Array<Holiday>;
  linkedHolidaysAggregate?: Maybe<LocationHolidayLinkedHolidaysAggregationSelection>;
  linkedHolidaysConnection: LocationLinkedHolidaysConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};


export type LocationLinkedHolidaysArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type LocationLinkedHolidaysAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HolidayWhere>;
};


export type LocationLinkedHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LocationLinkedHolidaysConnectionSort>>;
  where?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
};

export type LocationAggregateSelection = {
  __typename?: 'LocationAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type LocationConnectInput = {
  linkedHolidays?: InputMaybe<Array<LocationLinkedHolidaysConnectFieldInput>>;
};

export type LocationConnectWhere = {
  node: LocationWhere;
};

export type LocationCreateInput = {
  linkedHolidays?: InputMaybe<LocationLinkedHolidaysFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type LocationDeleteInput = {
  linkedHolidays?: InputMaybe<Array<LocationLinkedHolidaysDeleteFieldInput>>;
};

export type LocationDisconnectInput = {
  linkedHolidays?: InputMaybe<Array<LocationLinkedHolidaysDisconnectFieldInput>>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type LocationHolidayLinkedHolidaysAggregationSelection = {
  __typename?: 'LocationHolidayLinkedHolidaysAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LocationHolidayLinkedHolidaysNodeAggregateSelection>;
};

export type LocationHolidayLinkedHolidaysNodeAggregateSelection = {
  __typename?: 'LocationHolidayLinkedHolidaysNodeAggregateSelection';
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type LocationLinkedHolidaysAggregateInput = {
  AND?: InputMaybe<Array<LocationLinkedHolidaysAggregateInput>>;
  NOT?: InputMaybe<LocationLinkedHolidaysAggregateInput>;
  OR?: InputMaybe<Array<LocationLinkedHolidaysAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LocationLinkedHolidaysNodeAggregationWhereInput>;
};

export type LocationLinkedHolidaysConnectFieldInput = {
  connect?: InputMaybe<Array<HolidayConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<HolidayConnectWhere>;
};

export type LocationLinkedHolidaysConnection = {
  __typename?: 'LocationLinkedHolidaysConnection';
  edges: Array<LocationLinkedHolidaysRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationLinkedHolidaysConnectionSort = {
  node?: InputMaybe<HolidaySort>;
};

export type LocationLinkedHolidaysConnectionWhere = {
  AND?: InputMaybe<Array<LocationLinkedHolidaysConnectionWhere>>;
  NOT?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
  OR?: InputMaybe<Array<LocationLinkedHolidaysConnectionWhere>>;
  node?: InputMaybe<HolidayWhere>;
};

export type LocationLinkedHolidaysCreateFieldInput = {
  node: HolidayCreateInput;
};

export type LocationLinkedHolidaysDeleteFieldInput = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
};

export type LocationLinkedHolidaysDisconnectFieldInput = {
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  where?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
};

export type LocationLinkedHolidaysFieldInput = {
  connect?: InputMaybe<Array<LocationLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<LocationLinkedHolidaysCreateFieldInput>>;
};

export type LocationLinkedHolidaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationLinkedHolidaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationLinkedHolidaysNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationLinkedHolidaysNodeAggregationWhereInput>>;
  coverPhoto_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationLinkedHolidaysRelationship = {
  __typename?: 'LocationLinkedHolidaysRelationship';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type LocationLinkedHolidaysUpdateConnectionInput = {
  node?: InputMaybe<HolidayUpdateInput>;
};

export type LocationLinkedHolidaysUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<LocationLinkedHolidaysCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationLinkedHolidaysDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationLinkedHolidaysDisconnectFieldInput>>;
  update?: InputMaybe<LocationLinkedHolidaysUpdateConnectionInput>;
  where?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
};

export type LocationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LocationSort>>;
};

export type LocationRelationInput = {
  linkedHolidays?: InputMaybe<Array<LocationLinkedHolidaysCreateFieldInput>>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type LocationUpdateInput = {
  linkedHolidays?: InputMaybe<Array<LocationLinkedHolidaysUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<LocationWhere>>;
  NOT?: InputMaybe<LocationWhere>;
  OR?: InputMaybe<Array<LocationWhere>>;
  linkedHolidaysAggregate?: InputMaybe<LocationLinkedHolidaysAggregateInput>;
  /** Return Locations where all of the related LocationLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_ALL?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
  /** Return Locations where none of the related LocationLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_NONE?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
  /** Return Locations where one of the related LocationLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SINGLE?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
  /** Return Locations where some of the related LocationLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SOME?: InputMaybe<LocationLinkedHolidaysConnectionWhere>;
  /** Return Locations where all of the related Holidays match this filter */
  linkedHolidays_ALL?: InputMaybe<HolidayWhere>;
  /** Return Locations where none of the related Holidays match this filter */
  linkedHolidays_NONE?: InputMaybe<HolidayWhere>;
  /** Return Locations where one of the related Holidays match this filter */
  linkedHolidays_SINGLE?: InputMaybe<HolidayWhere>;
  /** Return Locations where some of the related Holidays match this filter */
  linkedHolidays_SOME?: InputMaybe<HolidayWhere>;
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

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationEdge>;
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
  createLocations: CreateLocationsMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  createTowns: CreateTownsMutationResponse;
  deleteActors: DeleteInfo;
  deleteCities: DeleteInfo;
  deleteContinents: DeleteInfo;
  deleteCountries: DeleteInfo;
  deleteHolidays: DeleteInfo;
  deleteIslands: DeleteInfo;
  deleteLocations: DeleteInfo;
  deleteMovies: DeleteInfo;
  deletePeople: DeleteInfo;
  deleteTowns: DeleteInfo;
  updateActors: UpdateActorsMutationResponse;
  updateCities: UpdateCitiesMutationResponse;
  updateContinents: UpdateContinentsMutationResponse;
  updateCountries: UpdateCountriesMutationResponse;
  updateHolidays: UpdateHolidaysMutationResponse;
  updateIslands: UpdateIslandsMutationResponse;
  updateLocations: UpdateLocationsMutationResponse;
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


export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
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
  delete?: InputMaybe<CityDeleteInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationDeleteContinentsArgs = {
  where?: InputMaybe<ContinentWhere>;
};


export type MutationDeleteCountriesArgs = {
  delete?: InputMaybe<CountryDeleteInput>;
  where?: InputMaybe<CountryWhere>;
};


export type MutationDeleteHolidaysArgs = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<HolidayWhere>;
};


export type MutationDeleteIslandsArgs = {
  delete?: InputMaybe<IslandDeleteInput>;
  where?: InputMaybe<IslandWhere>;
};


export type MutationDeleteLocationsArgs = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationDeleteMoviesArgs = {
  where?: InputMaybe<MovieWhere>;
};


export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeleteTownsArgs = {
  delete?: InputMaybe<TownDeleteInput>;
  where?: InputMaybe<TownWhere>;
};


export type MutationUpdateActorsArgs = {
  update?: InputMaybe<ActorUpdateInput>;
  where?: InputMaybe<ActorWhere>;
};


export type MutationUpdateCitiesArgs = {
  connect?: InputMaybe<CityConnectInput>;
  create?: InputMaybe<CityRelationInput>;
  delete?: InputMaybe<CityDeleteInput>;
  disconnect?: InputMaybe<CityDisconnectInput>;
  update?: InputMaybe<CityUpdateInput>;
  where?: InputMaybe<CityWhere>;
};


export type MutationUpdateContinentsArgs = {
  update?: InputMaybe<ContinentUpdateInput>;
  where?: InputMaybe<ContinentWhere>;
};


export type MutationUpdateCountriesArgs = {
  connect?: InputMaybe<CountryConnectInput>;
  create?: InputMaybe<CountryRelationInput>;
  delete?: InputMaybe<CountryDeleteInput>;
  disconnect?: InputMaybe<CountryDisconnectInput>;
  update?: InputMaybe<CountryUpdateInput>;
  where?: InputMaybe<CountryWhere>;
};


export type MutationUpdateHolidaysArgs = {
  connect?: InputMaybe<HolidayConnectInput>;
  create?: InputMaybe<HolidayRelationInput>;
  delete?: InputMaybe<HolidayDeleteInput>;
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  update?: InputMaybe<HolidayUpdateInput>;
  where?: InputMaybe<HolidayWhere>;
};


export type MutationUpdateIslandsArgs = {
  connect?: InputMaybe<IslandConnectInput>;
  create?: InputMaybe<IslandRelationInput>;
  delete?: InputMaybe<IslandDeleteInput>;
  disconnect?: InputMaybe<IslandDisconnectInput>;
  update?: InputMaybe<IslandUpdateInput>;
  where?: InputMaybe<IslandWhere>;
};


export type MutationUpdateLocationsArgs = {
  connect?: InputMaybe<LocationConnectInput>;
  create?: InputMaybe<LocationRelationInput>;
  delete?: InputMaybe<LocationDeleteInput>;
  disconnect?: InputMaybe<LocationDisconnectInput>;
  update?: InputMaybe<LocationUpdateInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationUpdateMoviesArgs = {
  update?: InputMaybe<MovieUpdateInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationUpdatePeopleArgs = {
  connect?: InputMaybe<PersonConnectInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdateTownsArgs = {
  connect?: InputMaybe<TownConnectInput>;
  create?: InputMaybe<TownRelationInput>;
  delete?: InputMaybe<TownDeleteInput>;
  disconnect?: InputMaybe<TownDisconnectInput>;
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
  attendedHolidays: Array<Holiday>;
  attendedHolidaysAggregate?: Maybe<PersonHolidayAttendedHolidaysAggregationSelection>;
  attendedHolidaysConnection: PersonAttendedHolidaysConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};


export type PersonAttendedHolidaysArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type PersonAttendedHolidaysAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HolidayWhere>;
};


export type PersonAttendedHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PersonAttendedHolidaysConnectionSort>>;
  where?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  aliases: StringAggregateSelectionNullable;
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type PersonAttendedHolidaysAggregateInput = {
  AND?: InputMaybe<Array<PersonAttendedHolidaysAggregateInput>>;
  NOT?: InputMaybe<PersonAttendedHolidaysAggregateInput>;
  OR?: InputMaybe<Array<PersonAttendedHolidaysAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PersonAttendedHolidaysNodeAggregationWhereInput>;
};

export type PersonAttendedHolidaysConnectFieldInput = {
  connect?: InputMaybe<Array<HolidayConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<HolidayConnectWhere>;
};

export type PersonAttendedHolidaysConnection = {
  __typename?: 'PersonAttendedHolidaysConnection';
  edges: Array<PersonAttendedHolidaysRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PersonAttendedHolidaysConnectionSort = {
  node?: InputMaybe<HolidaySort>;
};

export type PersonAttendedHolidaysConnectionWhere = {
  AND?: InputMaybe<Array<PersonAttendedHolidaysConnectionWhere>>;
  NOT?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
  OR?: InputMaybe<Array<PersonAttendedHolidaysConnectionWhere>>;
  node?: InputMaybe<HolidayWhere>;
};

export type PersonAttendedHolidaysCreateFieldInput = {
  node: HolidayCreateInput;
};

export type PersonAttendedHolidaysDeleteFieldInput = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
};

export type PersonAttendedHolidaysDisconnectFieldInput = {
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  where?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
};

export type PersonAttendedHolidaysFieldInput = {
  connect?: InputMaybe<Array<PersonAttendedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<PersonAttendedHolidaysCreateFieldInput>>;
};

export type PersonAttendedHolidaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonAttendedHolidaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonAttendedHolidaysNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonAttendedHolidaysNodeAggregationWhereInput>>;
  coverPhoto_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonAttendedHolidaysRelationship = {
  __typename?: 'PersonAttendedHolidaysRelationship';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type PersonAttendedHolidaysUpdateConnectionInput = {
  node?: InputMaybe<HolidayUpdateInput>;
};

export type PersonAttendedHolidaysUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonAttendedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<PersonAttendedHolidaysCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonAttendedHolidaysDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonAttendedHolidaysDisconnectFieldInput>>;
  update?: InputMaybe<PersonAttendedHolidaysUpdateConnectionInput>;
  where?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
};

export type PersonConnectInput = {
  attendedHolidays?: InputMaybe<Array<PersonAttendedHolidaysConnectFieldInput>>;
};

export type PersonCreateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  attendedHolidays?: InputMaybe<PersonAttendedHolidaysFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type PersonDeleteInput = {
  attendedHolidays?: InputMaybe<Array<PersonAttendedHolidaysDeleteFieldInput>>;
};

export type PersonDisconnectInput = {
  attendedHolidays?: InputMaybe<Array<PersonAttendedHolidaysDisconnectFieldInput>>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type PersonHolidayAttendedHolidaysAggregationSelection = {
  __typename?: 'PersonHolidayAttendedHolidaysAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PersonHolidayAttendedHolidaysNodeAggregateSelection>;
};

export type PersonHolidayAttendedHolidaysNodeAggregateSelection = {
  __typename?: 'PersonHolidayAttendedHolidaysNodeAggregateSelection';
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonRelationInput = {
  attendedHolidays?: InputMaybe<Array<PersonAttendedHolidaysCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  aliases?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type PersonUpdateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  attendedHolidays?: InputMaybe<Array<PersonAttendedHolidaysUpdateFieldInput>>;
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
  attendedHolidaysAggregate?: InputMaybe<PersonAttendedHolidaysAggregateInput>;
  /** Return People where all of the related PersonAttendedHolidaysConnections match this filter */
  attendedHolidaysConnection_ALL?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
  /** Return People where none of the related PersonAttendedHolidaysConnections match this filter */
  attendedHolidaysConnection_NONE?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
  /** Return People where one of the related PersonAttendedHolidaysConnections match this filter */
  attendedHolidaysConnection_SINGLE?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
  /** Return People where some of the related PersonAttendedHolidaysConnections match this filter */
  attendedHolidaysConnection_SOME?: InputMaybe<PersonAttendedHolidaysConnectionWhere>;
  /** Return People where all of the related Holidays match this filter */
  attendedHolidays_ALL?: InputMaybe<HolidayWhere>;
  /** Return People where none of the related Holidays match this filter */
  attendedHolidays_NONE?: InputMaybe<HolidayWhere>;
  /** Return People where one of the related Holidays match this filter */
  attendedHolidays_SINGLE?: InputMaybe<HolidayWhere>;
  /** Return People where some of the related Holidays match this filter */
  attendedHolidays_SOME?: InputMaybe<HolidayWhere>;
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
  locations: Array<Location>;
  locationsAggregate: LocationAggregateSelection;
  locationsConnection: LocationsConnection;
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


export type QueryLocationsArgs = {
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsAggregateArgs = {
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<LocationSort>>>;
  where?: InputMaybe<LocationWhere>;
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
  linkedHolidays: Array<Holiday>;
  linkedHolidaysAggregate?: Maybe<TownHolidayLinkedHolidaysAggregationSelection>;
  linkedHolidaysConnection: TownLinkedHolidaysConnection;
  locatedIn: Array<Country>;
  locatedInAggregate?: Maybe<TownCountryLocatedInAggregationSelection>;
  locatedInConnection: TownLocatedInConnection;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};


export type TownLinkedHolidaysArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<HolidayOptions>;
  where?: InputMaybe<HolidayWhere>;
};


export type TownLinkedHolidaysAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HolidayWhere>;
};


export type TownLinkedHolidaysConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TownLinkedHolidaysConnectionSort>>;
  where?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
};


export type TownLocatedInArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CountryOptions>;
  where?: InputMaybe<CountryWhere>;
};


export type TownLocatedInAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CountryWhere>;
};


export type TownLocatedInConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TownLocatedInConnectionSort>>;
  where?: InputMaybe<TownLocatedInConnectionWhere>;
};

export type TownAggregateSelection = {
  __typename?: 'TownAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type TownConnectInput = {
  linkedHolidays?: InputMaybe<Array<TownLinkedHolidaysConnectFieldInput>>;
  locatedIn?: InputMaybe<Array<TownLocatedInConnectFieldInput>>;
};

export type TownCountryLocatedInAggregationSelection = {
  __typename?: 'TownCountryLocatedInAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TownCountryLocatedInNodeAggregateSelection>;
};

export type TownCountryLocatedInNodeAggregateSelection = {
  __typename?: 'TownCountryLocatedInNodeAggregateSelection';
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
};

export type TownCreateInput = {
  linkedHolidays?: InputMaybe<TownLinkedHolidaysFieldInput>;
  locatedIn?: InputMaybe<TownLocatedInFieldInput>;
  name: Scalars['String']['input'];
  nodeId: Scalars['String']['input'];
};

export type TownDeleteInput = {
  linkedHolidays?: InputMaybe<Array<TownLinkedHolidaysDeleteFieldInput>>;
  locatedIn?: InputMaybe<Array<TownLocatedInDeleteFieldInput>>;
};

export type TownDisconnectInput = {
  linkedHolidays?: InputMaybe<Array<TownLinkedHolidaysDisconnectFieldInput>>;
  locatedIn?: InputMaybe<Array<TownLocatedInDisconnectFieldInput>>;
};

export type TownEdge = {
  __typename?: 'TownEdge';
  cursor: Scalars['String']['output'];
  node: Town;
};

export type TownHolidayLinkedHolidaysAggregationSelection = {
  __typename?: 'TownHolidayLinkedHolidaysAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<TownHolidayLinkedHolidaysNodeAggregateSelection>;
};

export type TownHolidayLinkedHolidaysNodeAggregateSelection = {
  __typename?: 'TownHolidayLinkedHolidaysNodeAggregateSelection';
  coverPhoto: StringAggregateSelectionNullable;
  dateMonth: StringAggregateSelectionNonNullable;
  dateYear: StringAggregateSelectionNonNullable;
  departingAirport: StringAggregateSelectionNullable;
  fullText: StringAggregateSelectionNonNullable;
  holidayTitle: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  nodeId: StringAggregateSelectionNonNullable;
  photoAlbum: StringAggregateSelectionNullable;
  readableText: StringAggregateSelectionNonNullable;
  sortDateValue: StringAggregateSelectionNonNullable;
};

export type TownLinkedHolidaysAggregateInput = {
  AND?: InputMaybe<Array<TownLinkedHolidaysAggregateInput>>;
  NOT?: InputMaybe<TownLinkedHolidaysAggregateInput>;
  OR?: InputMaybe<Array<TownLinkedHolidaysAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TownLinkedHolidaysNodeAggregationWhereInput>;
};

export type TownLinkedHolidaysConnectFieldInput = {
  connect?: InputMaybe<Array<HolidayConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<HolidayConnectWhere>;
};

export type TownLinkedHolidaysConnection = {
  __typename?: 'TownLinkedHolidaysConnection';
  edges: Array<TownLinkedHolidaysRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TownLinkedHolidaysConnectionSort = {
  node?: InputMaybe<HolidaySort>;
};

export type TownLinkedHolidaysConnectionWhere = {
  AND?: InputMaybe<Array<TownLinkedHolidaysConnectionWhere>>;
  NOT?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
  OR?: InputMaybe<Array<TownLinkedHolidaysConnectionWhere>>;
  node?: InputMaybe<HolidayWhere>;
};

export type TownLinkedHolidaysCreateFieldInput = {
  node: HolidayCreateInput;
};

export type TownLinkedHolidaysDeleteFieldInput = {
  delete?: InputMaybe<HolidayDeleteInput>;
  where?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
};

export type TownLinkedHolidaysDisconnectFieldInput = {
  disconnect?: InputMaybe<HolidayDisconnectInput>;
  where?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
};

export type TownLinkedHolidaysFieldInput = {
  connect?: InputMaybe<Array<TownLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<TownLinkedHolidaysCreateFieldInput>>;
};

export type TownLinkedHolidaysNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TownLinkedHolidaysNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TownLinkedHolidaysNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TownLinkedHolidaysNodeAggregationWhereInput>>;
  coverPhoto_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  coverPhoto_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  coverPhoto_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateMonth_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateMonth_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  dateYear_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  dateYear_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  dateYear_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  departingAirport_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  departingAirport_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  fullText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  fullText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  fullText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  holidayTitle_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  holidayTitle_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  photoAlbum_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  photoAlbum_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  readableText_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  readableText_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  readableText_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  sortDateValue_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  sortDateValue_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TownLinkedHolidaysRelationship = {
  __typename?: 'TownLinkedHolidaysRelationship';
  cursor: Scalars['String']['output'];
  node: Holiday;
};

export type TownLinkedHolidaysUpdateConnectionInput = {
  node?: InputMaybe<HolidayUpdateInput>;
};

export type TownLinkedHolidaysUpdateFieldInput = {
  connect?: InputMaybe<Array<TownLinkedHolidaysConnectFieldInput>>;
  create?: InputMaybe<Array<TownLinkedHolidaysCreateFieldInput>>;
  delete?: InputMaybe<Array<TownLinkedHolidaysDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TownLinkedHolidaysDisconnectFieldInput>>;
  update?: InputMaybe<TownLinkedHolidaysUpdateConnectionInput>;
  where?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
};

export type TownLocatedInAggregateInput = {
  AND?: InputMaybe<Array<TownLocatedInAggregateInput>>;
  NOT?: InputMaybe<TownLocatedInAggregateInput>;
  OR?: InputMaybe<Array<TownLocatedInAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TownLocatedInNodeAggregationWhereInput>;
};

export type TownLocatedInConnectFieldInput = {
  connect?: InputMaybe<Array<CountryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. Will default to `false` in 4.0.0. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CountryConnectWhere>;
};

export type TownLocatedInConnection = {
  __typename?: 'TownLocatedInConnection';
  edges: Array<TownLocatedInRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TownLocatedInConnectionSort = {
  node?: InputMaybe<CountrySort>;
};

export type TownLocatedInConnectionWhere = {
  AND?: InputMaybe<Array<TownLocatedInConnectionWhere>>;
  NOT?: InputMaybe<TownLocatedInConnectionWhere>;
  OR?: InputMaybe<Array<TownLocatedInConnectionWhere>>;
  node?: InputMaybe<CountryWhere>;
};

export type TownLocatedInCreateFieldInput = {
  node: CountryCreateInput;
};

export type TownLocatedInDeleteFieldInput = {
  delete?: InputMaybe<CountryDeleteInput>;
  where?: InputMaybe<TownLocatedInConnectionWhere>;
};

export type TownLocatedInDisconnectFieldInput = {
  disconnect?: InputMaybe<CountryDisconnectInput>;
  where?: InputMaybe<TownLocatedInConnectionWhere>;
};

export type TownLocatedInFieldInput = {
  connect?: InputMaybe<Array<TownLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<TownLocatedInCreateFieldInput>>;
};

export type TownLocatedInNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TownLocatedInNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TownLocatedInNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TownLocatedInNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  nodeId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  nodeId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  nodeId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type TownLocatedInRelationship = {
  __typename?: 'TownLocatedInRelationship';
  cursor: Scalars['String']['output'];
  node: Country;
};

export type TownLocatedInUpdateConnectionInput = {
  node?: InputMaybe<CountryUpdateInput>;
};

export type TownLocatedInUpdateFieldInput = {
  connect?: InputMaybe<Array<TownLocatedInConnectFieldInput>>;
  create?: InputMaybe<Array<TownLocatedInCreateFieldInput>>;
  delete?: InputMaybe<Array<TownLocatedInDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TownLocatedInDisconnectFieldInput>>;
  update?: InputMaybe<TownLocatedInUpdateConnectionInput>;
  where?: InputMaybe<TownLocatedInConnectionWhere>;
};

export type TownOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more TownSort objects to sort Towns by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TownSort>>;
};

export type TownRelationInput = {
  linkedHolidays?: InputMaybe<Array<TownLinkedHolidaysCreateFieldInput>>;
  locatedIn?: InputMaybe<Array<TownLocatedInCreateFieldInput>>;
};

/** Fields to sort Towns by. The order in which sorts are applied is not guaranteed when specifying many fields in one TownSort object. */
export type TownSort = {
  name?: InputMaybe<SortDirection>;
  nodeId?: InputMaybe<SortDirection>;
};

export type TownUpdateInput = {
  linkedHolidays?: InputMaybe<Array<TownLinkedHolidaysUpdateFieldInput>>;
  locatedIn?: InputMaybe<Array<TownLocatedInUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nodeId?: InputMaybe<Scalars['String']['input']>;
};

export type TownWhere = {
  AND?: InputMaybe<Array<TownWhere>>;
  NOT?: InputMaybe<TownWhere>;
  OR?: InputMaybe<Array<TownWhere>>;
  linkedHolidaysAggregate?: InputMaybe<TownLinkedHolidaysAggregateInput>;
  /** Return Towns where all of the related TownLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_ALL?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
  /** Return Towns where none of the related TownLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_NONE?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
  /** Return Towns where one of the related TownLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SINGLE?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
  /** Return Towns where some of the related TownLinkedHolidaysConnections match this filter */
  linkedHolidaysConnection_SOME?: InputMaybe<TownLinkedHolidaysConnectionWhere>;
  /** Return Towns where all of the related Holidays match this filter */
  linkedHolidays_ALL?: InputMaybe<HolidayWhere>;
  /** Return Towns where none of the related Holidays match this filter */
  linkedHolidays_NONE?: InputMaybe<HolidayWhere>;
  /** Return Towns where one of the related Holidays match this filter */
  linkedHolidays_SINGLE?: InputMaybe<HolidayWhere>;
  /** Return Towns where some of the related Holidays match this filter */
  linkedHolidays_SOME?: InputMaybe<HolidayWhere>;
  locatedInAggregate?: InputMaybe<TownLocatedInAggregateInput>;
  /** Return Towns where all of the related TownLocatedInConnections match this filter */
  locatedInConnection_ALL?: InputMaybe<TownLocatedInConnectionWhere>;
  /** Return Towns where none of the related TownLocatedInConnections match this filter */
  locatedInConnection_NONE?: InputMaybe<TownLocatedInConnectionWhere>;
  /** Return Towns where one of the related TownLocatedInConnections match this filter */
  locatedInConnection_SINGLE?: InputMaybe<TownLocatedInConnectionWhere>;
  /** Return Towns where some of the related TownLocatedInConnections match this filter */
  locatedInConnection_SOME?: InputMaybe<TownLocatedInConnectionWhere>;
  /** Return Towns where all of the related Countries match this filter */
  locatedIn_ALL?: InputMaybe<CountryWhere>;
  /** Return Towns where none of the related Countries match this filter */
  locatedIn_NONE?: InputMaybe<CountryWhere>;
  /** Return Towns where one of the related Countries match this filter */
  locatedIn_SINGLE?: InputMaybe<CountryWhere>;
  /** Return Towns where some of the related Countries match this filter */
  locatedIn_SOME?: InputMaybe<CountryWhere>;
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

export type UpdateLocationsMutationResponse = {
  __typename?: 'UpdateLocationsMutationResponse';
  info: UpdateInfo;
  locations: Array<Location>;
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

export type GetCardCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCardCountsQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string }>, continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }>, countries: Array<{ __typename?: 'Country', name: string, nodeId: string }>, cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, islands: Array<{ __typename?: 'Island', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }>, people: Array<{ __typename?: 'Person', name: string, nodeId: string, attendedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetContinentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }> };

export type GetContinentByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContinentByIdQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }> };

export type GetContinentsListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentsListQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }> };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string }> };

export type GetCountryByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountryByIdQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string }> };

export type GetCountryAndLinkedHolidaysByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountryAndLinkedHolidaysByIdQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, sortDateValue: string }> }> }> };

export type GetCountriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesListQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, nodeId: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, dateMonth: string, dateYear: string, sortDateValue: string }> }> }> };

export type GetCountriesTestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesTestQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', nodeId: string, name: string, placesLocatedIn: Array<{ __typename: 'Location', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, sortDateValue: string }> }> }> };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCityByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCityByIdQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCitiesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesListQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCapitalsQueryVariables = Exact<{
  capitalCheck?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCapitalsQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetCapitalsListQueryVariables = Exact<{
  capitalCheck?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetCapitalsListQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', name: string, nodeId: string, capital: boolean, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetTownsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTownsQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

export type GetTownByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTownByIdQuery = { __typename?: 'Query', towns: Array<{ __typename?: 'Town', name: string, nodeId: string, linkedHolidays: Array<{ __typename?: 'Holiday', nodeId: string }> }> };

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


export type GetPeopleListQuery = { __typename?: 'Query', people: Array<{ __typename?: 'Person', name: string, nodeId: string, aliases?: string | null, attendedHolidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, sortDateValue: string, dateYear: string, dateMonth: string }> }> };

export type GetHolidaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHolidaysQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, tags?: Array<string> | null, dateYear: string, dateMonth: string, sortDateValue: string, fullText: string, readableText: string, locations?: Array<string> | null, departingAirport?: string | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, travelled_to: Array<{ __typename?: 'Location', nodeId: string }> }> };

export type GetHolidayByIdQueryVariables = Exact<{
  nodeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetHolidayByIdQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', nodeId: string, name: string, holidayTitle: string, tags?: Array<string> | null, dateYear: string, dateMonth: string, sortDateValue: string, fullText: string, readableText: string, locations?: Array<string> | null, departingAirport?: string | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, travelled_to: Array<{ __typename?: 'Location', nodeId: string }> }> };

export type GetHolidaysListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHolidaysListQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string, tags?: Array<string> | null, dateYear: string, dateMonth: string, sortDateValue: string, holidayTitle: string, locations?: Array<string> | null, coverPhoto?: string | null, photoAlbum?: string | null, attendees?: Array<string> | null, departingAirport?: string | null }> };

export type GetPossibleHyperlinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPossibleHyperlinksQuery = { __typename?: 'Query', holidays: Array<{ __typename?: 'Holiday', name: string, nodeId: string }>, continents: Array<{ __typename?: 'Continent', name: string, nodeId: string }>, countries: Array<{ __typename?: 'Country', name: string, nodeId: string }>, cities: Array<{ __typename?: 'City', name: string, nodeId: string }>, towns: Array<{ __typename?: 'Town', name: string, nodeId: string }>, islands: Array<{ __typename?: 'Island', name: string, nodeId: string }>, people: Array<{ __typename?: 'Person', name: string, nodeId: string }> };


export const GetCardCountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCardCounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCardCountsQuery, GetCardCountsQueryVariables>;
export const GetContinentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetContinentsQuery, GetContinentsQueryVariables>;
export const GetContinentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetContinentByIdQuery, GetContinentByIdQueryVariables>;
export const GetContinentsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContinentsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetContinentsListQuery, GetContinentsListQueryVariables>;
export const GetCountriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetCountryByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountryById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetCountryByIdQuery, GetCountryByIdQueryVariables>;
export const GetCountryAndLinkedHolidaysByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountryAndLinkedHolidaysById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountryAndLinkedHolidaysByIdQuery, GetCountryAndLinkedHolidaysByIdQueryVariables>;
export const GetCountriesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountriesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountriesListQuery, GetCountriesListQueryVariables>;
export const GetCountriesTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCountriesTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"placesLocatedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCountriesTestQuery, GetCountriesTestQueryVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetCityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const GetCitiesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCitiesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCitiesListQuery, GetCitiesListQueryVariables>;
export const GetCapitalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapitals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"capital"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCapitalsQuery, GetCapitalsQueryVariables>;
export const GetCapitalsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapitalsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"capital"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capitalCheck"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"capital"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetCapitalsListQuery, GetCapitalsListQueryVariables>;
export const GetTownsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTowns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownsQuery, GetTownsQueryVariables>;
export const GetTownByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTownById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownByIdQuery, GetTownByIdQueryVariables>;
export const GetTownsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTownsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetTownsListQuery, GetTownsListQueryVariables>;
export const GetIslandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIslands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetIslandsQuery, GetIslandsQueryVariables>;
export const GetIslandsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIslandsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"linkedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetIslandsListQuery, GetIslandsListQueryVariables>;
export const GetPeopleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeople"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]}}]} as unknown as DocumentNode<GetPeopleQuery, GetPeopleQueryVariables>;
export const GetPersonByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonByIdQuery, GetPersonByIdQueryVariables>;
export const GetPeopleListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPeopleList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"aliases"}},{"kind":"Field","name":{"kind":"Name","value":"attendedHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}}]}}]}}]}}]} as unknown as DocumentNode<GetPeopleListQuery, GetPeopleListQueryVariables>;
export const GetHolidaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullText"}},{"kind":"Field","name":{"kind":"Name","value":"readableText"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"travelled_to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}}]}}]}}]} as unknown as DocumentNode<GetHolidaysQuery, GetHolidaysQueryVariables>;
export const GetHolidayByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidayById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"nodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"fullText"}},{"kind":"Field","name":{"kind":"Name","value":"readableText"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"travelled_to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}}]}}]}}]} as unknown as DocumentNode<GetHolidayByIdQuery, GetHolidayByIdQueryVariables>;
export const GetHolidaysListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHolidaysList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"dateYear"}},{"kind":"Field","name":{"kind":"Name","value":"dateMonth"}},{"kind":"Field","name":{"kind":"Name","value":"sortDateValue"}},{"kind":"Field","name":{"kind":"Name","value":"holidayTitle"}},{"kind":"Field","name":{"kind":"Name","value":"locations"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhoto"}},{"kind":"Field","name":{"kind":"Name","value":"photoAlbum"}},{"kind":"Field","name":{"kind":"Name","value":"attendees"}},{"kind":"Field","name":{"kind":"Name","value":"departingAirport"}}]}}]}}]} as unknown as DocumentNode<GetHolidaysListQuery, GetHolidaysListQueryVariables>;
export const GetPossibleHyperlinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPossibleHyperlinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"holidays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"continents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"countries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"towns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"islands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}}]}}]}}]} as unknown as DocumentNode<GetPossibleHyperlinksQuery, GetPossibleHyperlinksQueryVariables>;