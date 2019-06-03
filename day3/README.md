# 리액트 TDD

- 김민준 개발자님
- [강의자료(PDF)](https://drive.google.com/file/d/12h3yoGMWNqZHNLXJniWeQpjsKnCMp5To/view?fbclid=IwAR34FimmJbM_kDRCxZDUeSYlF7-axoHX0GBRmJEp-mnqiohW98W7V-mVl-4)
- [강의문서](https://learn-react-test.vlpt.us/#/)

---

## 테스트의 이점

- 원활한 협업
- 자신감있게 리팩토링
- 테스트 코드 작성한다고 버그가 발생하지 않는건 아니지만, 원인 분석이 빨라짐
- 버그에 대하여 테스트 케이스를 만들면 실수를 두번 다시 반복하지 않음

## 유닛테스트, 통합테스트

- 유닛테스트: 작은 함수 단위 테스트. 하나하나 쪼개서
- 통합테스트: 여러가지 기능을 전체적인 흐름을 테스트

---

## Javascript 테스팅

- Jest, Karma, Mocha, Jasmine, Chai 등등
- 이 강의에서는 Jest 사용함
  - 페이스북 개발팀이 만듦
  - CRA에 기본 적용
  - 초기 설정 편함
- js-test 폴더 참조

### Jest 옵션

- watchAll: 모든 파일 테스트
- verbose: 테스트 작업을 자세히 보여줌

> TDD를 개발할 때, 분명 함수를 먼저 구현할 경우가 생긴다. 이럴 경우에는 일부러 틀리는 테스트코드를 작성해서 테스트하자.

---

## TDD(Test Driven Development)
- Red: 무엇을 개발할지 계획. 실패하는 테스트케이스를 작성
- Green: 계획한 일을 수행. 작성한 테스트를 통과시키기
- Refactor: 기존 코드를 개선시킬 방향이 보이면 개선하자

> **선** 테스트코드 작성
> **후** 구현

---

## Enzyme, react-testing-library

- 대표적인 React의 테스트 프레임워크

### Enzyme

- 컴포넌트 인스턴스에 접근
- state/props 확인
- 메서드 직접 호출
- 무거움, 복잡함, 기능이 엄청 많음
- 점유율 높음

##### shallow, mount

- shallow: 겉에 있는 컴포넌트만 렌더링
- mount: 모두 렌더링
- 함수형 컴포넌트에서는 클래스형 컴포넌트와 달리 인스턴스 메서드 및 상태를 조회 할 방법이 없다
- ```Hooks``` 를 사용하는 경우 꼭 ```shallow``` 가 아닌 ```mount```를 사용해야 한다.
  - 그 이유는, ```useEffect Hook``` 은 ```shallow``` 에서 작동하지 않고, 엘리먼트에 연결되어있는 함수가 이전 함수를 가르키고 있기 때문

### react-testing-library

- 렌더링 결과에 집중
- DOM 기반 테스트
- UI를 위한 테스트를 하기에 최적화됨
- 컴포넌트 인스턴스 접근 안함