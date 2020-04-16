import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
// parameter의 값 얻기
import { useParams } from "react-router-dom";
import styled from "styled-components";

// query에 변수가 있을 때는 반드시 query의 이름을 적어야 한다.
const GET_MOVIE = gql`
  # Apollo 를 위한 부분
  query getMovie($id: Int!) {
    # graphql api로 보내는 부분
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
`;

export default () => {
  // parameter를 얻는다. (queryString 비슷한 듯)
  let { id } = useParams();
  // id를 받을 때 string으로 받기 때문에 정수로 형변환
  id = +id;
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  return (
    <Container>
      <Column>
        {/* 데이터를 불러오는 시간이 있다. 반드시 삼항 연산자를 이용해서 조건 분기를 하자 */}
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {/* 로딩 중일 때는 아래 내용이 보이지 않는다. */}
        {!loading && data.movie && (
          // 두 개를 return 하기 때문에 fragments 사용
          <>
            <Subtitle>
              {data.movie.language} | {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      {/* optional chaing. 삼항 연산자 대신 사용 가능 아래 구문은 같은 것이다. */}
      {/* <Poster bg={data && data.movie ? data.movie.medium_cover_image : ""}></Poster> */}
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
};
