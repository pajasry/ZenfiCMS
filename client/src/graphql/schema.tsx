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
  DateTime: any;
};

export type AttachEntity = {
  __typename?: 'AttachEntity';
  id: Scalars['String'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
};

export type ClientPageOutput = {
  __typename?: 'ClientPageOutput';
  item?: Maybe<PickObjectType>;
};

export type CreatePageInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  statusId?: InputMaybe<Scalars['String']>;
  subpagesIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CreatePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String'];
  user: UserEntity;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPage: PageOutput;
  createPassword: Scalars['Boolean'];
  createUser: UserOutput;
  deletePage: Scalars['Boolean'];
  login: LoginOutput;
  resetPassword: Scalars['Boolean'];
  setHomepage: Scalars['Boolean'];
  updatePage: PageOutput;
};


export type MutationCreatePageArgs = {
  createPageInput: CreatePageInput;
};


export type MutationCreatePasswordArgs = {
  createPasswordInput: CreatePasswordInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeletePageArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationSetHomepageArgs = {
  id: Scalars['String'];
};


export type MutationUpdatePageArgs = {
  id: Scalars['String'];
  updatePageInput: UpdatePageInput;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  author: UserEntity;
  authorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isHomepage: Scalars['Boolean'];
  name: Scalars['String'];
  parent?: Maybe<PageEntity>;
  parentId?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  status: PageStatusEntity;
  statusId: Scalars['String'];
  subpages?: Maybe<Array<PageEntity>>;
  thumbnail?: Maybe<AttachEntity>;
  thumbnailId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PageOutput = {
  __typename?: 'PageOutput';
  item?: Maybe<PageEntity>;
};

export type PageStatusEntity = {
  __typename?: 'PageStatusEntity';
  id: Scalars['String'];
  name: Scalars['String'];
  variant: Scalars['String'];
};

export type PageStatusesOutput = {
  __typename?: 'PageStatusesOutput';
  count: Scalars['Float'];
  items: Array<PageStatusEntity>;
};

export type PagesOutput = {
  __typename?: 'PagesOutput';
  count: Scalars['Float'];
  items: Array<PageEntity>;
};

export type PickObjectType = {
  __typename?: 'PickObjectType';
  description: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  status: PageStatusEntity;
};

export type Query = {
  __typename?: 'Query';
  clientPage: ClientPageOutput;
  me: UserOutput;
  page: PageOutput;
  pageStatuses: PageStatusesOutput;
  pages: PagesOutput;
  user: UserOutput;
  users: UsersOutput;
};


export type QueryClientPageArgs = {
  path: Scalars['String'];
};


export type QueryPageArgs = {
  id: Scalars['String'];
};


export type QueryPagesArgs = {
  except?: InputMaybe<Scalars['String']>;
  hasSubpages?: InputMaybe<Scalars['Boolean']>;
  isHomepage?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
};

export type UpdatePageInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  statusId?: InputMaybe<Scalars['String']>;
  subpagesIds?: InputMaybe<Array<Scalars['String']>>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  item?: Maybe<UserEntity>;
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  count: Scalars['Float'];
  items: Array<UserEntity>;
};

export type CreatePageMutationVariables = Exact<{
  createPageInput: CreatePageInput;
}>;


export type CreatePageMutation = { __typename?: 'Mutation', createPage: { __typename?: 'PageOutput', item?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null }> | null }> | null } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any }> | null, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null } };

export type CreatePasswordMutationVariables = Exact<{
  createPasswordInput: CreatePasswordInput;
}>;


export type CreatePasswordMutation = { __typename?: 'Mutation', createPassword: boolean };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserOutput', item?: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string } | null } };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', token: string, user: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string } } };

export type ResetPasswordMutationVariables = Exact<{
  resetPasswordInput: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type SetHomepageMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type SetHomepageMutation = { __typename?: 'Mutation', setHomepage: boolean };

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['String'];
  updatePageInput: UpdatePageInput;
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', updatePage: { __typename?: 'PageOutput', item?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null }> | null }> | null } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any }> | null, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null } };

export type ClientPageQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type ClientPageQuery = { __typename?: 'Query', clientPage: { __typename?: 'ClientPageOutput', item?: { __typename?: 'PickObjectType', description: string, name: string, path: string, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string } } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserOutput', item?: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string } | null } };

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'PageOutput', item?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null }> | null }> | null } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any }> | null, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null } };

export type PageStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type PageStatusesQuery = { __typename?: 'Query', pageStatuses: { __typename?: 'PageStatusesOutput', count: number, items: Array<{ __typename?: 'PageStatusEntity', id: string, name: string, variant: string }> } };

export type PagesQueryVariables = Exact<{
  except?: InputMaybe<Scalars['String']>;
  hasSubpages?: InputMaybe<Scalars['Boolean']>;
  isHomepage?: InputMaybe<Scalars['Boolean']>;
  parentId?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PagesQuery = { __typename?: 'Query', pages: { __typename?: 'PagesOutput', count: number, items: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, author: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }, parent?: { __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null }> | null }> | null } | null } | null, status: { __typename?: 'PageStatusEntity', id: string, name: string, variant: string }, subpages?: Array<{ __typename?: 'PageEntity', authorId: string, createdAt: any, description: string, id: string, isHomepage: boolean, name: string, parentId?: string | null, path: string, statusId: string, thumbnailId?: string | null, updatedAt: any }> | null, thumbnail?: { __typename?: 'AttachEntity', id: string, key: string, mimetype: string, name: string, path: string } | null }> } };

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'UserOutput', item?: { __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string } | null } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersOutput', count: number, items: Array<{ __typename?: 'UserEntity', createdAt: any, email: string, id: string, updatedAt: any, username: string }> } };
