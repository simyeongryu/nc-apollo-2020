import React from "react";
import styled from "styled-components";
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
    </Container>
  );
};
