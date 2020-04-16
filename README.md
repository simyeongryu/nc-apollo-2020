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

