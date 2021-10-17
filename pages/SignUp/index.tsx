import React, { useCallback, useState } from 'react';
import { Form, Label, Input, LinkContainer, Button, Header, Error, Success } from './style';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const SignUp = () => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 });

  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [missMatchError, setMissMatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

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
        // 비동기 요청에서 setState 하는 경우 비동기 요청 전에 초기화
        // 요청을 연달아 보내는 경우 첫번째 요청에 남아있던 결과가 다음 요청에 표시될 수 있음
        // 로딩
        setSignUpError('');
        setSignUpSuccess(false);

        axios
          .post(
            'http://localhost:3095/api/users',
            {
              email,
              nickname,
              password,
            },
            {
              withCredentials: true,
            },
          )
          .then(response => {
            // 성공
            console.log('success:', response);
            setSignUpSuccess(true);
          })
          .catch(error => {
            // 실패
            setSignUpError(error.response?.data || error.message);
          })
          .finally(() => {
            // 성공과 실패에 관계없이 실행되는 경우
          });

        // 요청하는 주소/포트가 다르면 options 라는 요청을 한번 더 보낸다.
        // 주소가 다르면 요청이 된다.

        // cors 해결 방법
        // 1. 백엔드 개발자에게 요청
        // 2. 프론트에서 알아서 하는 방법 : 프록시 설정
      }
    },
    [email, nickname, password, passwordCheck, missMatchError],
  );

  if (data) {
    return <Redirect to="/workspace/channel"></Redirect>;
  }

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
          {signUpError && <Error> {signUpError} </Error>}
          {signUpSuccess && <Success> 회원가입이 완료되었습니다 🎉 로그인하여 완료해주세요. </Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
