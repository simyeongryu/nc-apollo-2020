import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// 그래프 큐엘 쿼리
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  // query 사용. loading 여부와 error 내용
  const { loading, error, data } = useQuery(GET_MOVIES);
  // 로딩 중이면
  if (loading) {
    return "loading...";
  }
  // 로딩이 끝나면
  if (data && data.movies) {
    return data.movies.map(m => <h1>{m.id}</h1>);
  }
  return <h1>Home</h1>;
};
