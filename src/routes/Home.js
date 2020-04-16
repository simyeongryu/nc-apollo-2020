import React from "react";
import styled from "styled-components";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Movie from "../components/Movie";

// 그래프 큐엘 쿼리
const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      # isLiked는 백엔드에 없고 클라이언트에 있기 때문에 @client
      isLiked @client
    }
  }
`;

/** styled */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 75px;
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export default () => {
  // query 사용. loading 여부와 error 내용
  const { loading, error, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>Mighty GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {/* !loading과 data.movies 가 true면 수행 */}
      {!loading && data.movies && (
        <Movies>
          {data.movies.map(m => (
            <Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.medium_cover_image} />
          ))}
        </Movies>
      )}
    </Container>
  );
};
