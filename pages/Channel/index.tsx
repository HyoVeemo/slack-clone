import React, { useCallback } from 'react';
import { Container, Header } from '@pages/Channel/style';
import useInput from '@hooks/useInput';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';

const Channel = () => {
  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    setChat('');
  }, []);

  return (
    <Container>
      <Header>채널 제목</Header>
      <ChatList />
      <ChatBox chat={chat} onSubmitForm={onSubmitForm} onChangeChat={onChangeChat} />
    </Container>
  );
};

export default Channel;
