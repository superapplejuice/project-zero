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
  /**
   * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any
}

export type AggregateCart = {
  count: Scalars['Int']
}

export type AggregateItem = {
  count: Scalars['Int']
}

export type AggregateUser = {
  count: Scalars['Int']
}

export type Alert = {
  message: Scalars['String']
}

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type Cart = Node & {
  id: Scalars['ID']
  user?: Maybe<User>
  items?: Maybe<Array<Item>>
}

export type CartItemsArgs = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A connection to a list of items. */
export type CartConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<CartEdge>>
  aggregate: AggregateCart
}

export type CartCreateInput = {
  id?: Maybe<Scalars['ID']>
  user?: Maybe<UserCreateOneWithoutCartInput>
  items?: Maybe<ItemCreateManyInput>
}

export type CartCreateOneWithoutUserInput = {
  create?: Maybe<CartCreateWithoutUserInput>
  connect?: Maybe<CartWhereUniqueInput>
}

export type CartCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>
  items?: Maybe<ItemCreateManyInput>
}

/** An edge in a connection. */
export type CartEdge = {
  /** The item at the end of the edge. */
  node: Cart
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum CartOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export type CartUpdateInput = {
  user?: Maybe<UserUpdateOneWithoutCartInput>
  items?: Maybe<ItemUpdateManyInput>
}

export type CartUpdateOneRequiredWithoutUserInput = {
  create?: Maybe<CartCreateWithoutUserInput>
  connect?: Maybe<CartWhereUniqueInput>
  update?: Maybe<CartUpdateWithoutUserDataInput>
  upsert?: Maybe<CartUpsertWithoutUserInput>
}

export type CartUpdateWithoutUserDataInput = {
  items?: Maybe<ItemUpdateManyInput>
}

export type CartUpsertWithoutUserInput = {
  update: CartUpdateWithoutUserDataInput
  create: CartCreateWithoutUserInput
}

export type CartWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CartWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CartWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CartWhereInput>>
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
  user?: Maybe<UserWhereInput>
  items_every?: Maybe<ItemWhereInput>
  items_some?: Maybe<ItemWhereInput>
  items_none?: Maybe<ItemWhereInput>
}

export type CartWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type CreateItemInput = {
  description: Scalars['String']
  images: Array<Scalars['String']>
  name: Scalars['String']
  price: Scalars['Int']
}

export type FetchItemsInput = {
  first?: Maybe<Scalars['Int']>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<ItemWhereInput>
}

export type Item = Node & {
  id: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images: Array<Scalars['String']>
  user: User
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

/** A connection to a list of items. */
export type ItemConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<ItemEdge>>
  aggregate: AggregateItem
}

export type ItemCreateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>
}

export type ItemCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images?: Maybe<ItemCreateimagesInput>
  user: UserCreateOneWithoutItemsInput
}

export type ItemCreateManyInput = {
  create?: Maybe<Array<ItemCreateInput>>
  connect?: Maybe<Array<ItemWhereUniqueInput>>
}

export type ItemCreateManyWithoutUserInput = {
  create?: Maybe<Array<ItemCreateWithoutUserInput>>
  connect?: Maybe<Array<ItemWhereUniqueInput>>
}

export type ItemCreateWithoutUserInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  description: Scalars['String']
  price: Scalars['Int']
  images?: Maybe<ItemCreateimagesInput>
}

/** An edge in a connection. */
export type ItemEdge = {
  /** The item at the end of the edge. */
  node: Item
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
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
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ItemScalarWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ItemScalarWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ItemScalarWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ItemScalarWhereInput>>
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

export type ItemUpdateDataInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<ItemUpdateimagesInput>
  user?: Maybe<UserUpdateOneRequiredWithoutItemsInput>
}

export type ItemUpdateimagesInput = {
  set?: Maybe<Array<Scalars['String']>>
}

export type ItemUpdateInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<ItemUpdateimagesInput>
  user?: Maybe<UserUpdateOneRequiredWithoutItemsInput>
}

export type ItemUpdateManyDataInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<ItemUpdateimagesInput>
}

export type ItemUpdateManyInput = {
  create?: Maybe<Array<ItemCreateInput>>
  connect?: Maybe<Array<ItemWhereUniqueInput>>
  set?: Maybe<Array<ItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>
  delete?: Maybe<Array<ItemWhereUniqueInput>>
  update?: Maybe<Array<ItemUpdateWithWhereUniqueNestedInput>>
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueNestedInput>>
}

export type ItemUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<ItemUpdateimagesInput>
}

export type ItemUpdateManyWithoutUserInput = {
  create?: Maybe<Array<ItemCreateWithoutUserInput>>
  connect?: Maybe<Array<ItemWhereUniqueInput>>
  set?: Maybe<Array<ItemWhereUniqueInput>>
  disconnect?: Maybe<Array<ItemWhereUniqueInput>>
  delete?: Maybe<Array<ItemWhereUniqueInput>>
  update?: Maybe<Array<ItemUpdateWithWhereUniqueWithoutUserInput>>
  updateMany?: Maybe<Array<ItemUpdateManyWithWhereNestedInput>>
  deleteMany?: Maybe<Array<ItemScalarWhereInput>>
  upsert?: Maybe<Array<ItemUpsertWithWhereUniqueWithoutUserInput>>
}

export type ItemUpdateManyWithWhereNestedInput = {
  where: ItemScalarWhereInput
  data: ItemUpdateManyDataInput
}

export type ItemUpdateWithoutUserDataInput = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
  images?: Maybe<ItemUpdateimagesInput>
}

export type ItemUpdateWithWhereUniqueNestedInput = {
  where: ItemWhereUniqueInput
  data: ItemUpdateDataInput
}

export type ItemUpdateWithWhereUniqueWithoutUserInput = {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutUserDataInput
}

export type ItemUpsertWithWhereUniqueNestedInput = {
  where: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export type ItemUpsertWithWhereUniqueWithoutUserInput = {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutUserDataInput
  create: ItemCreateWithoutUserInput
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
  user?: Maybe<UserWhereInput>
}

export type ItemWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type LoginUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  addToCart?: Maybe<Cart>
  createCart: Cart
  createItem: Item
  createUser: User
  deleteCart?: Maybe<Cart>
  deleteItem?: Maybe<Item>
  deleteManyCarts: BatchPayload
  deleteManyItems: BatchPayload
  deleteManyUsers: BatchPayload
  deleteUser?: Maybe<User>
  loginUser: User
  logoutUser?: Maybe<Alert>
  makePayment?: Maybe<Alert>
  registerUser: User
  removeFromCart?: Maybe<Cart>
  updateCart?: Maybe<Cart>
  updateItem: Item
  updateManyItems: BatchPayload
  updateManyUsers: BatchPayload
  updateUser?: Maybe<User>
  upsertCart: Cart
  upsertItem: Item
  upsertUser: User
}

export type MutationAddToCartArgs = {
  id: Scalars['ID']
}

export type MutationCreateCartArgs = {
  data: CartCreateInput
}

export type MutationCreateItemArgs = {
  data: CreateItemInput
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput
}

export type MutationDeleteItemArgs = {
  id: Scalars['ID']
}

export type MutationDeleteManyCartsArgs = {
  where?: Maybe<CartWhereInput>
}

export type MutationDeleteManyItemsArgs = {
  where?: Maybe<ItemWhereInput>
}

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationLoginUserArgs = {
  data: LoginUserInput
}

export type MutationMakePaymentArgs = {
  data: PaymentInput
}

export type MutationRegisterUserArgs = {
  data: RegisterUserInput
}

export type MutationRemoveFromCartArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCartArgs = {
  data: CartUpdateInput
  where: CartWhereUniqueInput
}

export type MutationUpdateItemArgs = {
  data: UpdateItemInput
}

export type MutationUpdateManyItemsArgs = {
  data: ItemUpdateManyMutationInput
  where?: Maybe<ItemWhereInput>
}

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput
  where?: Maybe<UserWhereInput>
}

export type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpsertCartArgs = {
  where: CartWhereUniqueInput
  create: CartCreateInput
  update: CartUpdateInput
}

export type MutationUpsertItemArgs = {
  where: ItemWhereUniqueInput
  create: ItemCreateInput
  update: ItemUpdateInput
}

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

export type PaymentInput = {
  amount: Scalars['Int']
  paymentMethodId: Scalars['String']
}

export type Query = {
  cart?: Maybe<Cart>
  carts: Array<Maybe<Cart>>
  cartsConnection: CartConnection
  fetchCart?: Maybe<Cart>
  fetchCurrentUser?: Maybe<User>
  fetchItem: Item
  fetchItems: Array<Maybe<Item>>
  fetchUser?: Maybe<User>
  item?: Maybe<Item>
  items: Array<Maybe<Item>>
  itemsConnection: ItemConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  user?: Maybe<User>
  users: Array<Maybe<User>>
  usersConnection: UserConnection
}

export type QueryCartArgs = {
  where: CartWhereUniqueInput
}

export type QueryCartsArgs = {
  where?: Maybe<CartWhereInput>
  orderBy?: Maybe<CartOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryCartsConnectionArgs = {
  where?: Maybe<CartWhereInput>
  orderBy?: Maybe<CartOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryFetchCartArgs = {
  id: Scalars['ID']
}

export type QueryFetchItemArgs = {
  id: Scalars['ID']
}

export type QueryFetchItemsArgs = {
  data?: Maybe<FetchItemsInput>
}

export type QueryFetchUserArgs = {
  id: Scalars['ID']
}

export type QueryItemArgs = {
  where: ItemWhereUniqueInput
}

export type QueryItemsArgs = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryItemsConnectionArgs = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>
  orderBy?: Maybe<UserOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type RegisterUserInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UpdateItemInput = {
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  images: Array<Maybe<Scalars['String']>>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Int']>
}

export type User = Node & {
  id: Scalars['ID']
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  createdAt: Scalars['DateTime']
  items?: Maybe<Array<Item>>
  cart: Cart
}

export type UserItemsArgs = {
  where?: Maybe<ItemWhereInput>
  orderBy?: Maybe<ItemOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** A connection to a list of items. */
export type UserConnection = {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>
  aggregate: AggregateUser
}

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  items?: Maybe<ItemCreateManyWithoutUserInput>
  cart: CartCreateOneWithoutUserInput
}

export type UserCreateOneWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>
  connect?: Maybe<UserWhereUniqueInput>
}

export type UserCreateOneWithoutItemsInput = {
  create?: Maybe<UserCreateWithoutItemsInput>
  connect?: Maybe<UserWhereUniqueInput>
}

export type UserCreateWithoutCartInput = {
  id?: Maybe<Scalars['ID']>
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  items?: Maybe<ItemCreateManyWithoutUserInput>
}

export type UserCreateWithoutItemsInput = {
  id?: Maybe<Scalars['ID']>
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  cart: CartCreateOneWithoutUserInput
}

/** An edge in a connection. */
export type UserEdge = {
  /** The item at the end of the edge. */
  node: User
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
}

export type UserUpdateInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  items?: Maybe<ItemUpdateManyWithoutUserInput>
  cart?: Maybe<CartUpdateOneRequiredWithoutUserInput>
}

export type UserUpdateManyMutationInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
}

export type UserUpdateOneRequiredWithoutItemsInput = {
  create?: Maybe<UserCreateWithoutItemsInput>
  connect?: Maybe<UserWhereUniqueInput>
  update?: Maybe<UserUpdateWithoutItemsDataInput>
  upsert?: Maybe<UserUpsertWithoutItemsInput>
}

export type UserUpdateOneWithoutCartInput = {
  create?: Maybe<UserCreateWithoutCartInput>
  connect?: Maybe<UserWhereUniqueInput>
  disconnect?: Maybe<Scalars['Boolean']>
  delete?: Maybe<Scalars['Boolean']>
  update?: Maybe<UserUpdateWithoutCartDataInput>
  upsert?: Maybe<UserUpsertWithoutCartInput>
}

export type UserUpdateWithoutCartDataInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  items?: Maybe<ItemUpdateManyWithoutUserInput>
}

export type UserUpdateWithoutItemsDataInput = {
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  cart?: Maybe<CartUpdateOneRequiredWithoutUserInput>
}

export type UserUpsertWithoutCartInput = {
  update: UserUpdateWithoutCartDataInput
  create: UserCreateWithoutCartInput
}

export type UserUpsertWithoutItemsInput = {
  update: UserUpdateWithoutItemsDataInput
  create: UserCreateWithoutItemsInput
}

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>
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
  username?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>
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
  items_every?: Maybe<ItemWhereInput>
  items_some?: Maybe<ItemWhereInput>
  items_none?: Maybe<ItemWhereInput>
  cart?: Maybe<CartWhereInput>
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
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
  CartWhereUniqueInput: CartWhereUniqueInput
  ID: ResolverTypeWrapper<Scalars['ID']>
  Cart: ResolverTypeWrapper<Cart>
  Node: ResolversTypes['Cart'] | ResolversTypes['User'] | ResolversTypes['Item']
  User: ResolverTypeWrapper<User>
  String: ResolverTypeWrapper<Scalars['String']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  ItemWhereInput: ItemWhereInput
  Int: ResolverTypeWrapper<Scalars['Int']>
  UserWhereInput: UserWhereInput
  CartWhereInput: CartWhereInput
  ItemOrderByInput: ItemOrderByInput
  Item: ResolverTypeWrapper<Item>
  CartOrderByInput: CartOrderByInput
  CartConnection: ResolverTypeWrapper<CartConnection>
  PageInfo: ResolverTypeWrapper<PageInfo>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  CartEdge: ResolverTypeWrapper<CartEdge>
  AggregateCart: ResolverTypeWrapper<AggregateCart>
  fetchItemsInput: FetchItemsInput
  ItemWhereUniqueInput: ItemWhereUniqueInput
  ItemConnection: ResolverTypeWrapper<ItemConnection>
  ItemEdge: ResolverTypeWrapper<ItemEdge>
  AggregateItem: ResolverTypeWrapper<AggregateItem>
  UserWhereUniqueInput: UserWhereUniqueInput
  UserOrderByInput: UserOrderByInput
  UserConnection: ResolverTypeWrapper<UserConnection>
  UserEdge: ResolverTypeWrapper<UserEdge>
  AggregateUser: ResolverTypeWrapper<AggregateUser>
  Mutation: ResolverTypeWrapper<{}>
  CartCreateInput: CartCreateInput
  UserCreateOneWithoutCartInput: UserCreateOneWithoutCartInput
  UserCreateWithoutCartInput: UserCreateWithoutCartInput
  ItemCreateManyWithoutUserInput: ItemCreateManyWithoutUserInput
  ItemCreateWithoutUserInput: ItemCreateWithoutUserInput
  ItemCreateimagesInput: ItemCreateimagesInput
  ItemCreateManyInput: ItemCreateManyInput
  ItemCreateInput: ItemCreateInput
  UserCreateOneWithoutItemsInput: UserCreateOneWithoutItemsInput
  UserCreateWithoutItemsInput: UserCreateWithoutItemsInput
  CartCreateOneWithoutUserInput: CartCreateOneWithoutUserInput
  CartCreateWithoutUserInput: CartCreateWithoutUserInput
  createItemInput: CreateItemInput
  UserCreateInput: UserCreateInput
  BatchPayload: ResolverTypeWrapper<BatchPayload>
  Long: ResolverTypeWrapper<Scalars['Long']>
  loginUserInput: LoginUserInput
  Alert: ResolverTypeWrapper<Alert>
  paymentInput: PaymentInput
  registerUserInput: RegisterUserInput
  CartUpdateInput: CartUpdateInput
  UserUpdateOneWithoutCartInput: UserUpdateOneWithoutCartInput
  UserUpdateWithoutCartDataInput: UserUpdateWithoutCartDataInput
  ItemUpdateManyWithoutUserInput: ItemUpdateManyWithoutUserInput
  ItemUpdateWithWhereUniqueWithoutUserInput: ItemUpdateWithWhereUniqueWithoutUserInput
  ItemUpdateWithoutUserDataInput: ItemUpdateWithoutUserDataInput
  ItemUpdateimagesInput: ItemUpdateimagesInput
  ItemUpdateManyWithWhereNestedInput: ItemUpdateManyWithWhereNestedInput
  ItemScalarWhereInput: ItemScalarWhereInput
  ItemUpdateManyDataInput: ItemUpdateManyDataInput
  ItemUpsertWithWhereUniqueWithoutUserInput: ItemUpsertWithWhereUniqueWithoutUserInput
  UserUpsertWithoutCartInput: UserUpsertWithoutCartInput
  ItemUpdateManyInput: ItemUpdateManyInput
  ItemUpdateWithWhereUniqueNestedInput: ItemUpdateWithWhereUniqueNestedInput
  ItemUpdateDataInput: ItemUpdateDataInput
  UserUpdateOneRequiredWithoutItemsInput: UserUpdateOneRequiredWithoutItemsInput
  UserUpdateWithoutItemsDataInput: UserUpdateWithoutItemsDataInput
  CartUpdateOneRequiredWithoutUserInput: CartUpdateOneRequiredWithoutUserInput
  CartUpdateWithoutUserDataInput: CartUpdateWithoutUserDataInput
  CartUpsertWithoutUserInput: CartUpsertWithoutUserInput
  UserUpsertWithoutItemsInput: UserUpsertWithoutItemsInput
  ItemUpsertWithWhereUniqueNestedInput: ItemUpsertWithWhereUniqueNestedInput
  updateItemInput: UpdateItemInput
  ItemUpdateManyMutationInput: ItemUpdateManyMutationInput
  UserUpdateManyMutationInput: UserUpdateManyMutationInput
  UserUpdateInput: UserUpdateInput
  ItemUpdateInput: ItemUpdateInput
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  CartWhereUniqueInput: CartWhereUniqueInput
  ID: Scalars['ID']
  Cart: Cart
  Node:
    | ResolversParentTypes['Cart']
    | ResolversParentTypes['User']
    | ResolversParentTypes['Item']
  User: User
  String: Scalars['String']
  DateTime: Scalars['DateTime']
  ItemWhereInput: ItemWhereInput
  Int: Scalars['Int']
  UserWhereInput: UserWhereInput
  CartWhereInput: CartWhereInput
  ItemOrderByInput: ItemOrderByInput
  Item: Item
  CartOrderByInput: CartOrderByInput
  CartConnection: CartConnection
  PageInfo: PageInfo
  Boolean: Scalars['Boolean']
  CartEdge: CartEdge
  AggregateCart: AggregateCart
  fetchItemsInput: FetchItemsInput
  ItemWhereUniqueInput: ItemWhereUniqueInput
  ItemConnection: ItemConnection
  ItemEdge: ItemEdge
  AggregateItem: AggregateItem
  UserWhereUniqueInput: UserWhereUniqueInput
  UserOrderByInput: UserOrderByInput
  UserConnection: UserConnection
  UserEdge: UserEdge
  AggregateUser: AggregateUser
  Mutation: {}
  CartCreateInput: CartCreateInput
  UserCreateOneWithoutCartInput: UserCreateOneWithoutCartInput
  UserCreateWithoutCartInput: UserCreateWithoutCartInput
  ItemCreateManyWithoutUserInput: ItemCreateManyWithoutUserInput
  ItemCreateWithoutUserInput: ItemCreateWithoutUserInput
  ItemCreateimagesInput: ItemCreateimagesInput
  ItemCreateManyInput: ItemCreateManyInput
  ItemCreateInput: ItemCreateInput
  UserCreateOneWithoutItemsInput: UserCreateOneWithoutItemsInput
  UserCreateWithoutItemsInput: UserCreateWithoutItemsInput
  CartCreateOneWithoutUserInput: CartCreateOneWithoutUserInput
  CartCreateWithoutUserInput: CartCreateWithoutUserInput
  createItemInput: CreateItemInput
  UserCreateInput: UserCreateInput
  BatchPayload: BatchPayload
  Long: Scalars['Long']
  loginUserInput: LoginUserInput
  Alert: Alert
  paymentInput: PaymentInput
  registerUserInput: RegisterUserInput
  CartUpdateInput: CartUpdateInput
  UserUpdateOneWithoutCartInput: UserUpdateOneWithoutCartInput
  UserUpdateWithoutCartDataInput: UserUpdateWithoutCartDataInput
  ItemUpdateManyWithoutUserInput: ItemUpdateManyWithoutUserInput
  ItemUpdateWithWhereUniqueWithoutUserInput: ItemUpdateWithWhereUniqueWithoutUserInput
  ItemUpdateWithoutUserDataInput: ItemUpdateWithoutUserDataInput
  ItemUpdateimagesInput: ItemUpdateimagesInput
  ItemUpdateManyWithWhereNestedInput: ItemUpdateManyWithWhereNestedInput
  ItemScalarWhereInput: ItemScalarWhereInput
  ItemUpdateManyDataInput: ItemUpdateManyDataInput
  ItemUpsertWithWhereUniqueWithoutUserInput: ItemUpsertWithWhereUniqueWithoutUserInput
  UserUpsertWithoutCartInput: UserUpsertWithoutCartInput
  ItemUpdateManyInput: ItemUpdateManyInput
  ItemUpdateWithWhereUniqueNestedInput: ItemUpdateWithWhereUniqueNestedInput
  ItemUpdateDataInput: ItemUpdateDataInput
  UserUpdateOneRequiredWithoutItemsInput: UserUpdateOneRequiredWithoutItemsInput
  UserUpdateWithoutItemsDataInput: UserUpdateWithoutItemsDataInput
  CartUpdateOneRequiredWithoutUserInput: CartUpdateOneRequiredWithoutUserInput
  CartUpdateWithoutUserDataInput: CartUpdateWithoutUserDataInput
  CartUpsertWithoutUserInput: CartUpsertWithoutUserInput
  UserUpsertWithoutItemsInput: UserUpsertWithoutItemsInput
  ItemUpsertWithWhereUniqueNestedInput: ItemUpsertWithWhereUniqueNestedInput
  updateItemInput: UpdateItemInput
  ItemUpdateManyMutationInput: ItemUpdateManyMutationInput
  UserUpdateManyMutationInput: UserUpdateManyMutationInput
  UserUpdateInput: UserUpdateInput
  ItemUpdateInput: ItemUpdateInput
}

export type AggregateCartResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateCart'] = ResolversParentTypes['AggregateCart']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AggregateItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateItem'] = ResolversParentTypes['AggregateItem']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AggregateUserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser']
> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type AlertResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']
> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type BatchPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']
> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  items?: Resolver<
    Maybe<Array<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<CartItemsArgs, never>
  >
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartConnection'] = ResolversParentTypes['CartConnection']
> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<
    Array<Maybe<ResolversTypes['CartEdge']>>,
    ParentType,
    ContextType
  >
  aggregate?: Resolver<ResolversTypes['AggregateCart'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type CartEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['CartEdge'] = ResolversParentTypes['CartEdge']
> = {
  node?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
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
  images?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type ItemConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']
> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<
    Array<Maybe<ResolversTypes['ItemEdge']>>,
    ParentType,
    ContextType
  >
  aggregate?: Resolver<ResolversTypes['AggregateItem'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type ItemEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']
> = {
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long'
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addToCart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddToCartArgs, 'id'>
  >
  createCart?: Resolver<
    ResolversTypes['Cart'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCartArgs, 'data'>
  >
  createItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateItemArgs, 'data'>
  >
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >
  deleteCart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCartArgs, 'where'>
  >
  deleteItem?: Resolver<
    Maybe<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemArgs, 'id'>
  >
  deleteManyCarts?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyCartsArgs, never>
  >
  deleteManyItems?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyItemsArgs, never>
  >
  deleteManyUsers?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyUsersArgs, never>
  >
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'where'>
  >
  loginUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginUserArgs, 'data'>
  >
  logoutUser?: Resolver<Maybe<ResolversTypes['Alert']>, ParentType, ContextType>
  makePayment?: Resolver<
    Maybe<ResolversTypes['Alert']>,
    ParentType,
    ContextType,
    RequireFields<MutationMakePaymentArgs, 'data'>
  >
  registerUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationRegisterUserArgs, 'data'>
  >
  removeFromCart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromCartArgs, 'id'>
  >
  updateCart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCartArgs, 'data' | 'where'>
  >
  updateItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateItemArgs, 'data'>
  >
  updateManyItems?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyItemsArgs, 'data'>
  >
  updateManyUsers?: Resolver<
    ResolversTypes['BatchPayload'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyUsersArgs, 'data'>
  >
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'data' | 'where'>
  >
  upsertCart?: Resolver<
    ResolversTypes['Cart'],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertCartArgs, 'where' | 'create' | 'update'>
  >
  upsertItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertItemArgs, 'where' | 'create' | 'update'>
  >
  upsertUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertUserArgs, 'where' | 'create' | 'update'>
  >
}

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<
    'Cart' | 'User' | 'Item',
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
}

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  startCursor?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  cart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<QueryCartArgs, 'where'>
  >
  carts?: Resolver<
    Array<Maybe<ResolversTypes['Cart']>>,
    ParentType,
    ContextType,
    RequireFields<QueryCartsArgs, never>
  >
  cartsConnection?: Resolver<
    ResolversTypes['CartConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryCartsConnectionArgs, never>
  >
  fetchCart?: Resolver<
    Maybe<ResolversTypes['Cart']>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchCartArgs, 'id'>
  >
  fetchCurrentUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >
  fetchItem?: Resolver<
    ResolversTypes['Item'],
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemArgs, 'id'>
  >
  fetchItems?: Resolver<
    Array<Maybe<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchItemsArgs, never>
  >
  fetchUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryFetchUserArgs, 'id'>
  >
  item?: Resolver<
    Maybe<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<QueryItemArgs, 'where'>
  >
  items?: Resolver<
    Array<Maybe<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<QueryItemsArgs, never>
  >
  itemsConnection?: Resolver<
    ResolversTypes['ItemConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryItemsConnectionArgs, never>
  >
  node?: Resolver<
    Maybe<ResolversTypes['Node']>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, 'id'>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'where'>
  >
  users?: Resolver<
    Array<Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, never>
  >
  usersConnection?: Resolver<
    ResolversTypes['UserConnection'],
    ParentType,
    ContextType,
    RequireFields<QueryUsersConnectionArgs, never>
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
  items?: Resolver<
    Maybe<Array<ResolversTypes['Item']>>,
    ParentType,
    ContextType,
    RequireFields<UserItemsArgs, never>
  >
  cart?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type UserConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']
> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>
  edges?: Resolver<
    Array<Maybe<ResolversTypes['UserEdge']>>,
    ParentType,
    ContextType
  >
  aggregate?: Resolver<ResolversTypes['AggregateUser'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type UserEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']
> = {
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: isTypeOfResolverFn<ParentType>
}

export type Resolvers<ContextType = Context> = {
  AggregateCart?: AggregateCartResolvers<ContextType>
  AggregateItem?: AggregateItemResolvers<ContextType>
  AggregateUser?: AggregateUserResolvers<ContextType>
  Alert?: AlertResolvers<ContextType>
  BatchPayload?: BatchPayloadResolvers<ContextType>
  Cart?: CartResolvers<ContextType>
  CartConnection?: CartConnectionResolvers<ContextType>
  CartEdge?: CartEdgeResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Item?: ItemResolvers<ContextType>
  ItemConnection?: ItemConnectionResolvers<ContextType>
  ItemEdge?: ItemEdgeResolvers<ContextType>
  Long?: GraphQLScalarType
  Mutation?: MutationResolvers<ContextType>
  Node?: NodeResolvers
  PageInfo?: PageInfoResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UserConnection?: UserConnectionResolvers<ContextType>
  UserEdge?: UserEdgeResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
