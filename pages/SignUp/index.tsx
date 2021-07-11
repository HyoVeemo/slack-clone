import React, { useCallback, useState } from 'react';
import { Form, Label, Input, LinkContainer, Button, Header, Error } from './style';
import useInput from '@hooks/useInput';

const SignUp = () => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [missMatchError, setMissMatchError] = useState(false);

  const onChangePassword = useCallback(
    e => {
      setPassword(e.target.value);
      setMissMatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
    // deps:
    // 함수 내부의 변수는 안 써도 된다
    // 함수 외부의 변수는 써야 한다.
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setMissMatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!missMatchError) {
        console.log('서버로 회원가입 요청 전송 ');
      }
      console.log(console.log(email, nickname, password, passwordCheck));
    },
    [email, nickname, password, passwordCheck, missMatchError],
  );

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password-check"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {missMatchError && <Error>비밀번호가 일치하지 않습니다. </Error>}
          {!nickname && <Error> 닉네임을 입력하세요.. </Error>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
