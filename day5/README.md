# 컴포넌트 제대로 만들기

- 이현섭 개발자님
- [강의자료](./lecture.pdf)

## 잘 만든 리액트 앱이란
- 작고 단단한 컴포넌트를 만들고
- 만들어진 컴포넌트를 유기적으로 연결

- 강의자료의 stackblitz 위주로 수업 진행됨

## Functional Component
- 컴포넌트는 “근본적으로” 함수다.
- 컴포넌트는 함수로도 작성할 수 있다.
- React 16.8 버전부터는 Hooks가 추가되어 함수형 컴포넌트만 사용해서 앱을 구성할 수 있다.
- Input을 함수형 컴포넌트로 바꾸기
- Input을 React.memo로 감싸기

```jsx
// JoinForm.js
class JoinForm extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  render() {
    const { email, password } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={({ target: { value } }) => this.setState({ email: value })}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          password={password}
          onChange={({ target: { value } }) => this.setState({ password: value })}
        />
        <button type="submit">가입하기</button>
        <button type="button" onClick={this.handleReset}>초기화</button>
      </form>
    );
  }

  handleSubmit = () => {
    console.log(this.state.email, this.state.password)
  }

  handleReset = () => {
    this.setState({
      email: '',
      password: '',
    })
  }
}

// Input.js
function Input( { type, placeholder, value, onChange }) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
}
```

### Rules of Hooks
- Hook은 항상 컴포넌트의 Top Level Scope에서 호출되어야 함
- 즉, Hook을 if문, for문, 콜백 안에서 사용하면 안됨
- render 호출시마다 항상 같은 순서로 hook을 호출해야 하기 때문
- Hook을 React 함수 (함수형 컴포넌트, Custom hook)이 아닌 다른 곳에서 호출해서는 안됨


### Custom hook

```jsx
import { useState, useCallback } from 'react'

function useInputState(defaultState) {
  const [ state, setState ] = useState(defaultState)

  const handleChangeState = useCallback(({ target: { value }}) => {
    setState(value)
  }, [])

  return [
    state,
    setState,
    handleChangeState,
  ]
}

export default useInputState


// How to use
function JoinForm() {
  const [ email, setEmail, handleChangeEmail ] = useInputState('')
  const [ password, setPassword, handleChangePassword ] = useInputState('')

  ...
}

```