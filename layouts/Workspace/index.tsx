import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// children 을 사용하는 컴포넌트 FC (children 을 안 쓰는 컴포넌트는 VFC type)
const Index: FC = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        // 쿠키 공유 옵션
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      <button onClick={onLogout}> 로그아웃</button>
      {children}
    </div>
  );
};

export default Index;
