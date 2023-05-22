const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Post {
    id: ID!
    title: String!
    body: String!
    user: User!
    category: Category!
    comments: [Comment!]!
    image: String
    createdAt: String!
    updatedAt: String!
  }
  type Comment {
    id: ID!
    body: String!
    user: User!
    post: Post!
  }
  type Category {
    id: ID!
    name: String!
    description: String!
    posts: [Post!]!
  }
  type User {
    _id: ID!
    email: String!
    password: String!
    name:String!
    createdPosts: [Post!]
  }
  
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input PostInput {
    id: ID!
    title: String!
    body: String!
    userId: ID!
    categoryId: ID!
    commentIds: [ID!]!
    image: String
    date: String!
  }

  input UserInput {
    email: String!
    password: String!
    name:String!
  }

  input CommentInput {
    id: ID!
    body: String!
    userId: ID!
    postId: ID!
  }

  input CategoryInput {
    id: ID!
    name: String!
    description: String!
    postIds: [ID!]!
  }

type RootQuery {
    posts: [Post!]!
    categories: [Category!]!
    comments: [Comment!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createPost(postInput: PostInput): Post
    editPost(postInput: PostInput): Post
    deletePost(postInput: PostInput): Post
    createUser(userInput: UserInput): User
    createCategory(categoryInput: CategoryInput):Category
    editCategory(categoryInput: CategoryInput):Category
    deleteCategory(categoryInput: CategoryInput):Category
    createComment(commentInput: CommentInput): Comment 
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)