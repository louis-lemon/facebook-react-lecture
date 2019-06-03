# React Front-End Development with TypeScript and AndDesign

- CHEQUER 장기영 개발자님
- [강의자료](https://docs.google.com/presentation/d/1gSztygbf9YRwtmsdLDpDoPO2wk-QAOBOs6e6d45y3n0/edit?usp=sharing&fbclid=IwAR1t-Hetg8_4SKV3uuHIEKJbmeAF2i7Y_EoIB_OVj-3hS-OlJioZiDkvXzw)

## CRA로 React-ts 프로젝트 시작하기

### CRA는 왜 써야하나요?

- CRA 없으면 많은 것을 혼자 해야 한다.
    - index.html, webpack, babel, HMR(Hot Module Replacement) ...
    - 이런 것들이 매번 프로젝트를 할 때마다 달라진다.

- [Starter](https://github.com/thomasJang/react-fed)
- modal, dialog -> 주로 가상의 layer를 만들고 Dom을 생성한 다음에 body 끝에 주입하는 방식임
    - 위는 React의 사상과 맞지 않음.
    - React는 이미 정의된 jsx|tsx 에서 dom을 다루는 방식임. 즉, 새로 dom을 동적으로 만드는 방식은 알맞지 않다.

```
$ create-reat-app react-example --typescript
```

--- 

## app-rewire를 사용하여 less-loader 연결하기

- Install [craco](https://github.com/sharegate/craco)
- Install craco-less

```
$ npm install @craco/craco --save
$ npm install craco-less node-sass
$ vi package.json
$ vi craco.config.js

# craco.config.js
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin
    }]
}
```

## antd, styled-components 사용

- Install antd, styled-components

```
$ npm install antd styled-components @types/styled-components
```

- react-starter 참고

--- 

## Style and Theme in React.js

- 시간없어서 넘어감

--- 

## 효율적인 코드 작성(destructing, async, await, type)

### Destructing

```js

const [x, y] = [1, 2];
```

### Modal을 Promise로 만들기

- react-starter 참고

--- 

## Drag & Resizing

- ::after
  - content와 display가 없음. 정의해줘야함
  - 이번 프로젝트의 경우, 선이 너무 좁기 떄문에 쉽게 사용자가 드래그하려면 width가 좀더 넓어야함
  - 여기서 after를 만들어서 위의 경우를 커버함
