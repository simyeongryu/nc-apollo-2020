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