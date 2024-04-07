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

export type City = {
  __typename?: 'City';
  capital: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
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

export type Island = {
  __typename?: 'Island';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  title?: Maybe<Scalars['String']['output']>;
};

export type Person = {
  __typename?: 'Person';
  aliases?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nodeId?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
};


export type QueryContinentArgs = {
  id: Scalars['ID']['input'];
};

export type Town = {
  __typename?: 'Town';
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};
