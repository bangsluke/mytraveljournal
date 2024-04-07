import { GraphQLResolveInfo } from 'graphql';
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
  movies: Array<Movie>;
  name?: Maybe<Scalars['String']['output']>;
};

export type City = {
  __typename?: 'City';
  capital: Scalars['Boolean']['output'];
  linkedHolidays: Array<Holiday>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type Continent = {
  __typename?: 'Continent';
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
  linkedHolidays: Array<Holiday>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  actors: Array<Actor>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Person = {
  __typename?: 'Person';
  aliases?: Maybe<Scalars['String']['output']>;
  attendedHolidays: Array<Holiday>;
  name: Scalars['String']['output'];
  nodeId?: Maybe<Scalars['String']['output']>;
};

export type Town = {
  __typename?: 'Town';
  linkedHolidays: Array<Holiday>;
  name: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Actor: ResolverTypeWrapper<Actor>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  City: ResolverTypeWrapper<City>;
  Continent: ResolverTypeWrapper<Continent>;
  Country: ResolverTypeWrapper<Country>;
  Holiday: ResolverTypeWrapper<Holiday>;
  Island: ResolverTypeWrapper<Island>;
  Movie: ResolverTypeWrapper<Movie>;
  Person: ResolverTypeWrapper<Person>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Town: ResolverTypeWrapper<Town>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Actor: Actor;
  Boolean: Scalars['Boolean']['output'];
  City: City;
  Continent: Continent;
  Country: Country;
  Holiday: Holiday;
  Island: Island;
  Movie: Movie;
  Person: Person;
  String: Scalars['String']['output'];
  Town: Town;
}>;

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = ResolversObject<{
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = ResolversObject<{
  capital?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  linkedHolidays?: Resolver<Array<ResolversTypes['Holiday']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContinentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Continent'] = ResolversParentTypes['Continent']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HolidayResolvers<ContextType = any, ParentType extends ResolversParentTypes['Holiday'] = ResolversParentTypes['Holiday']> = ResolversObject<{
  attendees?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateMonth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateYear?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  departingAirport?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  holidayTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoAlbum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sortDateValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  textHtmlContent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IslandResolvers<ContextType = any, ParentType extends ResolversParentTypes['Island'] = ResolversParentTypes['Island']> = ResolversObject<{
  linkedHolidays?: Resolver<Array<ResolversTypes['Holiday']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  actors?: Resolver<Array<ResolversTypes['Actor']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = ResolversObject<{
  aliases?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attendedHolidays?: Resolver<Array<ResolversTypes['Holiday']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TownResolvers<ContextType = any, ParentType extends ResolversParentTypes['Town'] = ResolversParentTypes['Town']> = ResolversObject<{
  linkedHolidays?: Resolver<Array<ResolversTypes['Holiday']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Actor?: ActorResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Continent?: ContinentResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Holiday?: HolidayResolvers<ContextType>;
  Island?: IslandResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Town?: TownResolvers<ContextType>;
}>;

