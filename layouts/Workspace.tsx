import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// children을 사용하는 컴포넌트 FC (children 을 안 쓰는 컴포넌트는 VFC)
const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        // data 에는 사용자 정보가 들어있다가 revalidate를 호출하며 null 로 초기화된다.
        // swr 은 컴포넌트를 넘나들며 전역 스토리지가 된다.
        revalidate();
      });
  }, []);

  if (!data) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      <button onClick={onLogout}> 로그아웃</button>
    </div>
  );
};

export default Workspace;
