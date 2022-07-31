export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
  user: UsersEntity;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UsersEntity;
  login: LoginOutput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type PagesEntity = {
  __typename?: 'PagesEntity';
  author: UsersEntity;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  status: PublicationStatusesEntity;
  updatedAt: Scalars['String'];
};

export type PostsEntity = {
  __typename?: 'PostsEntity';
  author: UsersEntity;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  status: PublicationStatusesEntity;
  updatedAt: Scalars['String'];
};

export type PublicationStatusesEntity = {
  __typename?: 'PublicationStatusesEntity';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me: UsersEntity;
  page: PagesEntity;
  pages: Array<PagesEntity>;
  post: PostsEntity;
  posts: Array<PostsEntity>;
  publicationStatus: PublicationStatusesEntity;
  publicationStatuses: Array<PublicationStatusesEntity>;
  user: UsersEntity;
  users: Array<UsersEntity>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPublicationStatusArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UsersEntity = {
  __typename?: 'UsersEntity';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', token: string, user: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string } };

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } } };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> };

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> };

export type PublicationStatusQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PublicationStatusQuery = { __typename?: 'Query', publicationStatus: { __typename?: 'PublicationStatusesEntity', id: string, name: string } };

export type PublicationStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicationStatusesQuery = { __typename?: 'Query', publicationStatuses: Array<{ __typename?: 'PublicationStatusesEntity', id: string, name: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }> };
