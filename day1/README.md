# React 시작부터 배포까지

- CHEQUER 김동우 개발자님
- [강의자료](https://docs.google.com/presentation/d/10Qzj_qIEPTNHAN3jK0cQDUap6N8LlwyxMXyRmVmGH98/edit?fbclid=IwAR3u4ZUeShEXPv8gHbX3qm7PNyruimWu41yJsFHJ-WUZmYstZ2O5fhy_gBw#slide=id.g5a8085c0ff_0_453)

## React
- Facebook frontend UI library

## Why React
- SPA
  - 서버의 전체 페이지를 새로 로드하는 대신 동적으로 현재 페이지를 다시 작성하여 사용자와 상호작용하는 웹사이트

## React
- Virtual DOM
  - 빠른 렌더링
- Component
  - 높은 재사용성 & 빠른 개발
- JSX
  - 선언적, 직관적, 높은 생산성
  - 실제로는 xml 코드임

--- 

## React Starter

### CRA

- CRA 믾이 사용함
- 거의 기본이자 사실상 표준
- React 개발 환경만 구동해줌

```
$ npx create-react-app my-app
```

### Next.js
- React 프레임워크
- SSR을 기본으로 지원

```
$ mkdir next-app
$ cd next-app
$ npm install next react react-dom
$ npm init
$ vi package.json # script 추가
$ npm run build
$ npm run start
```

### CRA eject
- git commit을 하지 않으면 eject 거부됨
- ```config```: webpack 관련 모듈 번들러 파일 포함
- public 폴더 등 생김
- CRA 이후의 업데이트를 적용하기 어려움
- webpack 파일을 직접 관리할 수 있음

--- 

## 리액트 특성

### JSX
- 자바스크립트 언어 문법의 확장이다


### Props & State
- Props: 단방향 데이터 바인딩
  - props는 부모 컴포넌트로부터 컴포넌트에 전달된다. props는 **불변객체(변경 불가능)**. => 주소 값이 바뀌면 다시 렌더링하는 구조라서
- State: 컴포넌트의 로컬 상태
  - state는 변경이 가능하고 변경할 때는 setState메서드를 사용해 상태를 변경.

- Object.assign({}) 하는 이유가 주소 때문임
- React Array 렌더링할때 key 요구
    - 트리구조 비교하기 위해

### LifeCycle
> 참고 componentDidUnmount 사라짐

#### Mounting
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
  
#### Updating
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

#### Etc
- componentWillUnmount()
- static getDerivedStateFromError()
- componentDidCatch()
- setState()
- forceUpdate()

--- 

## [React Example](https://codepen.io/theham3d/pen/wGzodM)

---
## Typescript
- 정적 타이핑 지원
- 생산성, 안정성, 편의성
- 러닝커브가 높다.

### Add typescript to CRA

```
$ npm uninstall -g create-react-app
$ npx create-react-app my-ts-app --typescript
$ npm install typescript @types/node @types/react @types/react-dom @types/jest
```

### Add typescript to Nextjs

```
$ npm install @zeit/next-typescript
```

--- 

## 상태 관리

### Redux
- Redux는 state를 관리하기 위한 거대한 이벤트루프이다. Redux는 Store의 State를 특정 컴포넌트에 주입.
    - 액션 = 이벤트
    - 리듀서 = 이벤트에 대한 반응

### MobX
- MobX는 일관성 없는 상태를 만들 수 없도록 상태 관리를 간단하게 만듬. 애플리케이션 상태로부터 파생될 수 있는 모든 것들을 자동으로 파생되도록.
    - functional reactive programming (TFRP)
    - React의 `setState`가 필요하지 않습니다.

---

## Styling
- react style을 주입하는 방법
- react는 기본적으로 inline을 사용하는데, 이게 불편해서 아래 모듈들을 사용
  - styled-components
  - emotion: 많이 사용하고 있다.
  - jss

--- 

## 프로젝트 폴더 구성

### Components
- Pages: 라우팅 되는 페이지 단위 구분
    - ex) Home, Shop, Cart, User
- Containers: 공용으로 사용되는 컴포넌트 집합
  - ex) List, Table, Profile
- Components: 재사용 가능한 작은 컴포넌트
  - ex) Button, Input, Heading
- Stores
- Actions

### Atomic Design
- Atoms: 상태를 가지지 않는 원자
    - ex) Button, Input, Label
- Molecules: 원자의 조합인 분자
    - ex) Search Form
- Organisms: 분자의 조합인 유기체
    - ex) Menubar
- Templates
- Pages

---

## 브라우저 라우팅

- react router
- 