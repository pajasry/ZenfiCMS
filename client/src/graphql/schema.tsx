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
  page: PagesEntity;
  pages: Array<PagesEntity>;
  post: PostsEntity;
  posts: Array<PostsEntity>;
  user: UsersEntity;
  users: Array<UsersEntity>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
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
  pages: Array<PagesEntity>;
  posts: Array<PostsEntity>;
  updatedAt: Scalars['String'];
};

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } } };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { __typename?: 'Query', pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }>, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> } }> };

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> } }> };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }>, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> } }>, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string, pages: Array<{ __typename?: 'PagesEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }>, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string, author: { __typename?: 'UsersEntity', createdAt: string, email: string, firstName?: string | null, id: string, lastName?: string | null, updatedAt: string }, status: { __typename?: 'PublicationStatusesEntity', id: string, name: string } }> } }>, posts: Array<{ __typename?: 'PostsEntity', createdAt: string, description: string, id: string, name: string, updatedAt: string }> }> };
