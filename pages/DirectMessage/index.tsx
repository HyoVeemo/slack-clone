import React from 'react';
import Workspace from '@layouts/Workspace';
import { Container, Header } from './style';
import gravatar from 'gravatar';
import useSWR from 'swr';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import ChatBox from '@components/ChatBox';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: myData } = useSWR(`/api/users`, fetcher, {
    dedupingInterval: 2000, // 2초
  });

  if (!userData || !myData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span> {userData.nickname}</span>
      </Header>
      {/*<ChatList />*/}
      <ChatBox chat={''} />
    </Container>
  );
};

export default DirectMessage;
