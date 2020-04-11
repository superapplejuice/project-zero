import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
  users: <T = Array<User | null>>(
    args: {
      where?: UserWhereInput | null
      orderBy?: UserOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  items: <T = Array<Item | null>>(
    args: {
      where?: ItemWhereInput | null
      orderBy?: ItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  user: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  item: <T = Item | null>(
    args: { where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  usersConnection: <T = UserConnection>(
    args: {
      where?: UserWhereInput | null
      orderBy?: UserOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  itemsConnection: <T = ItemConnection>(
    args: {
      where?: ItemWhereInput | null
      orderBy?: ItemOrderByInput | null
      skip?: Int | null
      after?: String | null
      before?: String | null
      first?: Int | null
      last?: Int | null
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  node: <T = Node | null>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
}

export interface Mutation {
  createUser: <T = User>(
    args: { data: UserCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  createItem: <T = Item>(
    args: { data: ItemCreateInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateUser: <T = User | null>(
    args: { data: UserUpdateInput; where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  updateItem: <T = Item | null>(
    args: { data: ItemUpdateInput; where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  deleteUser: <T = User | null>(
    args: { where: UserWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  deleteItem: <T = Item | null>(
    args: { where: ItemWhereUniqueInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>
  upsertUser: <T = User>(
    args: {
      where: UserWhereUniqueInput
      create: UserCreateInput
      update: UserUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  upsertItem: <T = Item>(
    args: {
      where: ItemWhereUniqueInput
      create: ItemCreateInput
      update: ItemUpdateInput
    },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateManyUsers: <T = BatchPayload>(
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  updateManyItems: <T = BatchPayload>(
    args: { data: ItemUpdateManyMutationInput; where?: ItemWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  deleteManyUsers: <T = BatchPayload>(
    args: { where?: UserWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
  deleteManyItems: <T = BatchPayload>(
    args: { where?: ItemWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>
}

export interface Subscription {
  user: <T = UserSubscriptionPayload | null>(
    args: { where?: UserSubscriptionWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>
  item: <T = ItemSubscriptionPayload | null>(
    args: { where?: ItemSubscriptionWhereInput | null },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<AsyncIterator<T | null>>
}

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers
}

export interface BindingConstructor<T> {
  new (options: BasePrismaOptions): T
}
/**
 * Type Defs
 */

const typeDefs = `type AggregateItem {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Item implements Node {
  id: ID!
  name: String!
  description: String!
  price: Int!
  image_1: String!
  image_2: String
  image_3: String
  image_4: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  id: ID
  name: String!
  description: String!
  price: Int!
  image_1: String!
  image_2: String
  image_3: String
  image_4: String
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  image_1_ASC
  image_1_DESC
  image_2_ASC
  image_2_DESC
  image_3_ASC
  image_3_DESC
  image_4_ASC
  image_4_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  name: String!
  description: String!
  price: Int!
  image_1: String!
  image_2: String
  image_3: String
  image_4: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  name: String
  description: String
  price: Int
  image_1: String
  image_2: String
  image_3: String
  image_4: String
}

input ItemUpdateManyMutationInput {
  name: String
  description: String
  price: Int
  image_1: String
  image_2: String
  image_3: String
  image_4: String
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  image_1: String

  """All values that are not equal to given value."""
  image_1_not: String

  """All values that are contained in given list."""
  image_1_in: [String!]

  """All values that are not contained in given list."""
  image_1_not_in: [String!]

  """All values less than the given value."""
  image_1_lt: String

  """All values less than or equal the given value."""
  image_1_lte: String

  """All values greater than the given value."""
  image_1_gt: String

  """All values greater than or equal the given value."""
  image_1_gte: String

  """All values containing the given string."""
  image_1_contains: String

  """All values not containing the given string."""
  image_1_not_contains: String

  """All values starting with the given string."""
  image_1_starts_with: String

  """All values not starting with the given string."""
  image_1_not_starts_with: String

  """All values ending with the given string."""
  image_1_ends_with: String

  """All values not ending with the given string."""
  image_1_not_ends_with: String
  image_2: String

  """All values that are not equal to given value."""
  image_2_not: String

  """All values that are contained in given list."""
  image_2_in: [String!]

  """All values that are not contained in given list."""
  image_2_not_in: [String!]

  """All values less than the given value."""
  image_2_lt: String

  """All values less than or equal the given value."""
  image_2_lte: String

  """All values greater than the given value."""
  image_2_gt: String

  """All values greater than or equal the given value."""
  image_2_gte: String

  """All values containing the given string."""
  image_2_contains: String

  """All values not containing the given string."""
  image_2_not_contains: String

  """All values starting with the given string."""
  image_2_starts_with: String

  """All values not starting with the given string."""
  image_2_not_starts_with: String

  """All values ending with the given string."""
  image_2_ends_with: String

  """All values not ending with the given string."""
  image_2_not_ends_with: String
  image_3: String

  """All values that are not equal to given value."""
  image_3_not: String

  """All values that are contained in given list."""
  image_3_in: [String!]

  """All values that are not contained in given list."""
  image_3_not_in: [String!]

  """All values less than the given value."""
  image_3_lt: String

  """All values less than or equal the given value."""
  image_3_lte: String

  """All values greater than the given value."""
  image_3_gt: String

  """All values greater than or equal the given value."""
  image_3_gte: String

  """All values containing the given string."""
  image_3_contains: String

  """All values not containing the given string."""
  image_3_not_contains: String

  """All values starting with the given string."""
  image_3_starts_with: String

  """All values not starting with the given string."""
  image_3_not_starts_with: String

  """All values ending with the given string."""
  image_3_ends_with: String

  """All values not ending with the given string."""
  image_3_not_ends_with: String
  image_4: String

  """All values that are not equal to given value."""
  image_4_not: String

  """All values that are contained in given list."""
  image_4_in: [String!]

  """All values that are not contained in given list."""
  image_4_not_in: [String!]

  """All values less than the given value."""
  image_4_lt: String

  """All values less than or equal the given value."""
  image_4_lte: String

  """All values greater than the given value."""
  image_4_gt: String

  """All values greater than or equal the given value."""
  image_4_gte: String

  """All values containing the given string."""
  image_4_contains: String

  """All values not containing the given string."""
  image_4_not_contains: String

  """All values starting with the given string."""
  image_4_starts_with: String

  """All values not starting with the given string."""
  image_4_not_starts_with: String

  """All values ending with the given string."""
  image_4_ends_with: String

  """All values not ending with the given string."""
  image_4_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createItem(data: ItemCreateInput!): Item!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  deleteUser(where: UserWhereUniqueInput!): User
  deleteItem(where: ItemWhereUniqueInput!): Item
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  user(where: UserWhereUniqueInput!): User
  item(where: ItemWhereUniqueInput!): Item
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
}

type User implements Node {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  password: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  username: String
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({
  typeDefs,
})

/**
 * Types
 */

export type ItemOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'image_1_ASC'
  | 'image_1_DESC'
  | 'image_2_ASC'
  | 'image_2_DESC'
  | 'image_3_ASC'
  | 'image_3_DESC'
  | 'image_4_ASC'
  | 'image_4_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export type UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'username_ASC'
  | 'username_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'

export interface ItemCreateInput {
  id?: ID_Input | null
  name: String
  description: String
  price: Int
  image_1: String
  image_2?: String | null
  image_3?: String | null
  image_4?: String | null
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ItemWhereInput | null
}

export interface ItemUpdateInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  image_1?: String | null
  image_2?: String | null
  image_3?: String | null
  image_4?: String | null
}

export interface ItemUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  price?: Int | null
  image_1?: String | null
  image_2?: String | null
  image_3?: String | null
  image_4?: String | null
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput | null
  OR?: ItemWhereInput[] | ItemWhereInput | null
  NOT?: ItemWhereInput[] | ItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  price?: Int | null
  price_not?: Int | null
  price_in?: Int[] | Int | null
  price_not_in?: Int[] | Int | null
  price_lt?: Int | null
  price_lte?: Int | null
  price_gt?: Int | null
  price_gte?: Int | null
  image_1?: String | null
  image_1_not?: String | null
  image_1_in?: String[] | String | null
  image_1_not_in?: String[] | String | null
  image_1_lt?: String | null
  image_1_lte?: String | null
  image_1_gt?: String | null
  image_1_gte?: String | null
  image_1_contains?: String | null
  image_1_not_contains?: String | null
  image_1_starts_with?: String | null
  image_1_not_starts_with?: String | null
  image_1_ends_with?: String | null
  image_1_not_ends_with?: String | null
  image_2?: String | null
  image_2_not?: String | null
  image_2_in?: String[] | String | null
  image_2_not_in?: String[] | String | null
  image_2_lt?: String | null
  image_2_lte?: String | null
  image_2_gt?: String | null
  image_2_gte?: String | null
  image_2_contains?: String | null
  image_2_not_contains?: String | null
  image_2_starts_with?: String | null
  image_2_not_starts_with?: String | null
  image_2_ends_with?: String | null
  image_2_not_ends_with?: String | null
  image_3?: String | null
  image_3_not?: String | null
  image_3_in?: String[] | String | null
  image_3_not_in?: String[] | String | null
  image_3_lt?: String | null
  image_3_lte?: String | null
  image_3_gt?: String | null
  image_3_gte?: String | null
  image_3_contains?: String | null
  image_3_not_contains?: String | null
  image_3_starts_with?: String | null
  image_3_not_starts_with?: String | null
  image_3_ends_with?: String | null
  image_3_not_ends_with?: String | null
  image_4?: String | null
  image_4_not?: String | null
  image_4_in?: String[] | String | null
  image_4_not_in?: String[] | String | null
  image_4_lt?: String | null
  image_4_lte?: String | null
  image_4_gt?: String | null
  image_4_gte?: String | null
  image_4_contains?: String | null
  image_4_not_contains?: String | null
  image_4_starts_with?: String | null
  image_4_not_starts_with?: String | null
  image_4_ends_with?: String | null
  image_4_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface ItemWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  username: String
  email: String
  password: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  username?: String | null
  email?: String | null
  password?: String | null
}

export interface UserUpdateManyMutationInput {
  username?: String | null
  email?: String | null
  password?: String | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  username?: String | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateItem {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Item extends Node {
  id: ID_Output
  name: String
  description: String
  price: Int
  image_1: String
  image_2?: String | null
  image_3?: String | null
  image_4?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: Array<ItemEdge | null>
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ItemPreviousValues {
  id: ID_Output
  name: String
  description: String
  price: Int
  image_1: String
  image_2?: String | null
  image_3?: String | null
  image_4?: String | null
  createdAt: DateTime
  updatedAt: DateTime
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item | null
  updatedFields?: Array<String> | null
  previousValues?: ItemPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  username: String
  email: String
  password: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  username: String
  email: String
  password: String
  createdAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string
