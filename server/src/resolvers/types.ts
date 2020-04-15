import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { Context } from './context'
export type Maybe<T> = T | null
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type CreateItemInput = {
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  image_1: Scalars['String']
  image_2?: Maybe<Scalars['String']>
  image_3?: Maybe<Scalars['String']>
  image_4?: Maybe<Scalars['String']>
}

export type FetchItemsInput = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
}

export type Item = Node & {
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  image_1: Scalars['String']
  image_2?: Maybe<Scalars['String']>
  image_3?: Maybe<Scalars['String']>
  image_4?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export enum ItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  Image_1Asc = 'image_1_ASC',
  Image_1Desc = 'image_1_DESC',
  Image_2Asc = 'image_2_ASC',
  Image_2Desc = 'image_2_DESC',
  Image_3Asc = 'image_3_ASC',
  Image_3Desc = 'image_3_DESC',
  Image_4Asc = 'image_4_ASC',
  Image_4Desc = 'image_4_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ItemWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Int']>
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Int']>>
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Int']>>
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Int']>
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Int']>
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Int']>
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Int']>
  image_1?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  image_1_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  image_1_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  image_1_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  image_1_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  image_1_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  image_1_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  image_1_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  image_1_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  image_1_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  image_1_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  image_1_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  image_1_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  image_1_not_ends_with?: Maybe<Scalars['String']>
  image_2?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  image_2_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  image_2_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  image_2_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  image_2_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  image_2_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  image_2_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  image_2_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  image_2_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  image_2_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  image_2_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  image_2_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  image_2_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  image_2_not_ends_with?: Maybe<Scalars['String']>
  image_3?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  image_3_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  image_3_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  image_3_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  image_3_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  image_3_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  image_3_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  image_3_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  image_3_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  image_3_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  image_3_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  image_3_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  image_3_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  image_3_not_ends_with?: Maybe<Scalars['String']>
  image_4?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  image_4_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  image_4_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  image_4_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  image_4_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  image_4_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  image_4_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  image_4_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  image_4_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  image_4_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  image_4_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  image_4_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  image_4_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  image_4_not_ends_with?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
}

export type Mutation = {
  createItem: Item
}

export type MutationCreateItemArgs = {
  data?: Maybe<CreateItemInput>
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
}

export type Query = {
  fetchItems: Array<Maybe<Item>>
  fetchItem: Item
}

export type QueryFetchItemsArgs = {
  data?: Maybe<FetchItemsInput>
}

export type QueryFetchItemArgs = {
  id: Scalars['ID']
}

export type User = Node & {
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  createdAt: Scalars['DateTime']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type isTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  fetchItemsInput: FetchItemsInput
  ItemWhereInput: ItemWhereInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  String: ResolverTypeWrapper<Scalars['String']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  ItemOrderByInput: ItemOrderByInput
  Item: ResolverTypeWrapper<Item>
  Node: ResolversTypes['Item'] | ResolversTypes['User']
  Mutation: ResolverTypeWrapper<{}>
  createItemInput: CreateItemInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  User: ResolverTypeWrapper<User>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  fetchItemsInput: FetchItemsInput
  ItemWhereInput: ItemWhereInput
  ID: Scalars['ID']
  String: Scalars['String']
  Int: Scalars['Int']
  DateTime: Scalars['DateTime']
  ItemOrderByInput: ItemOrderByInput
  Item: Item
  Node: ResolversParentTypes['Item'] | ResolversParentTypes['User']
  Mutation: {}
  createItemInput: CreateItemInput
  Boolean: Scalars['Boolean']
  User: User
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type ItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  image_1?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  image_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  image_3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  image_4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, never>
  >
}

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<'Item' | 'User', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  fetchItems?: Resolver<
    Array<Maybe<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemsArgs, never>
  >
  fetchItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemArgs, 'id'>
  >
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type Resolvers<ContextType = Context> = {
  DateTime?: GraphQLScalarType
  Item?: ItemResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Node?: NodeResolvers
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
