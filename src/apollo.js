import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // API uri
  uri: "http://localhost:4000/",
  resolvers: {
    // 아래의 Movie는 graphQL schema에서 정의한 것.
    Movie: {
      isLiked: () => false
    }
  }
});

export default client;
