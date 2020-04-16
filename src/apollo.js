import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // API uri
  uri: "http://localhost:4000/"
});

export default client;
