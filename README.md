# nc-apollo101
노마드코더 apollo 101 강의 노트

# #0.2 Set Up

```
$ yarn create react-app
```

```
$ yarn add styled-components react-router-dom
```

apollo 모듈 설치
```
$ yarn add apollo-boost @apollo/react-hooks graphql
```

> 참조: https://www.apollographql.com/docs/react/get-started/

# #0.3 Router and Styles

src 폴더 내에 새로운 디렉토리 생성

```
$ mkdir src/routes
```

새로운 바이너리 생성

```
$ touch src/routes/Home.js
$ touch src/routes/Detail.js
```

## Detail.js, Home.js

"Home"과 "Detail"이라는 문자열을 리턴하는 함수를 export  (test 용)

```js
export default () => "Home";
```

```js
export default () => "Detail";
```

App.js에 router 만들기

## reset.css

> reset.css: https://meyerweb.com/eric/tools/css/reset/

public 디렉토리에 reset.css 추가하고 

public/index.html에 참조

```html
<link rel="stylesheet" href="%PUBLIC_URL%/reset.css" />
```

# #1.0 Apollo Client

그래프큐엘 API와 REST API의 가장 큰 차이점은?

REST -> URL로 이동하면 JSON 데이터를 바로 얻는다.

그래프 큐엘 -> Query문을 작성해야 한다.

client를 만든다. 

> https://www.apollographql.com/docs/react/get-started/

apollo-boost

는 그래프큐엘 요가같은 거.

src/apollo.js 만든 후 client를 만든다.

client로 React app을 감싸야한다.

apollo.js
```js
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // API uri
  uri: "http://localhost:4000/"
});

export default client;

```

index.js 로 가서

ApolloProvider로 App 컴포넌트를 감싸고 client를 넣어준다.
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
```

# #1.1 GET_MOVIES Query

홈페이지 첫 화면 위쪽에 영화의 id와 포스터를 나오게 하기 위해 query를 작성

```graphql
{
  movies {
    id
    medium_cover_image
  }
}
```


### Home.js

자바스크립트는 기본적으로 그래프 큐엘을 이해하지 못한다. 아래 구문 작성

```js
import { gql } from "apollo-boost";
```

쿼리는 component 밖에 존재하게 된다.

```js
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
```

# #1.2 GET_MOVIE Query



# #1.3 Apollo Cache and Styles

Apollo는 자동으로 cache를 저장해서 redux가 하는 일을 한다.

한 번 불러들인 걸 저장. fetch를 두 번 하지 않는다.

크롬 확장 프로그램

apollo client develoer Tools
을 깔면 크롬 개발자 도구에 apollo tab이 생긴다

이 안에서 cache 등을 확인할 수 있다.

### optional chaining

아래 두 개의 구문은 같다.
```js
data && data.movie ? data.movie.medium_cover_image : ""

data?.movie?.medium_cover_image
```

# #2.0 Local State part One

API에서 넘어온 데이터를 변경할 수 있음

