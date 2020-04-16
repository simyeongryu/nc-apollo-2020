import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // API uri
  uri: "http://localhost:4000/",
  resolvers: {
    // 아래의 Movie는 graphQL schema에서 정의한 것.
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          // 해당 id의 data를 수정
          id: `Movie:${id}`,
          data: {
            isLiked: !isLiked
          }
        });
      }
    }
  }
});

export default client;
