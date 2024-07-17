import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql", // RailsサーバーのGraphQLエンドポイント
  // credentials: 'include' // クッキーを含める
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
