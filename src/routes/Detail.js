import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// query에 변수가 있을 때는 반드시 query의 이름을 적어야 한다.
const GET_MOVIE = gql`
  # Apollo 를 위한 부분
  query getMovie($id: Int!) {
    # graphql api로 보내는 부분
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  // parameter를 얻는다. (queryString 비슷한 듯)
  let { id } = useParams();
  // id를 받을 때 string으로 받기 때문에 정수로 형변환
  id = +id;
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  if (loading) {
    return "loading";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
  return "Detail";
};
