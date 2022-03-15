import React, { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import useSWR, { useSWRInfinite } from 'swr';
import gravatar from 'gravatar';
import fetcher from '@utils/fetcher';
import useInput from '@hooks/useInput';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import { Container, Header } from './style';
import axios from 'axios';
import { IDM } from '@typings/db';
import makeSection from '@utils/makeSection';
import Scrollbars from 'react-custom-scrollbars';
import useSocket from '@hooks/useSocket';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR(`/api/users`, fetcher);
  const {
    data: chatData,
    mutate: mutateChat,
    revalidate,
    setSize, //페이지 수 바꿔주는 역할
  } = useSWRInfinite<IDM[]>(
    (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );
  // [[{id:3}], [{id:1}, {id:2}] 왼쪽일수록 과거 데이터

  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || !!(chatData && chatData[chatData?.length - 1]?.length < 20);

  const [chat, onChangeChat, setChat] = useInput('');
  const [socket] = useSocket(workspace);

  const chatSections = makeSection(chatData ? chatData.flat().reverse() : []);

  const scrollbarRef = useRef<Scrollbars>(null);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      // 1. 채팅을 서버에 발송
      // 서버에 저장된 채팅을 다시 받아본다.
      if (chat?.trim()) {
        const savedChat = chat;
        if (chatData) {
          mutateChat((prev) => {
            prev?.[0].unshift({
              id: (chatData[0][0]?.id || 0) + 1,
              content: savedChat,
              Sender: myData,
              SenderId: myData.id,
              Receiver: userData,
              ReceiverId: userData.id,
              createdAt: new Date(),
            });
            return prev;
          }, false).then(() => {
            setChat('');
            if (scrollbarRef.current) {
              scrollbarRef.current.scrollToBottom();
            }
          });
        }
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then(() => {
            revalidate();
          })
          .catch(console.error);
      }
      setChat('');
    },
    [chat],
  );

  const onMessage = useCallback((data: IDM) => {
    if (data.SenderId === Number(id) && myData.id !== Number(id)) {
      // 소켓이 새롭게 받은 채팅을 가져다 주기 때문에, 굳이 revalidate 할 필요 없이 mutate 한다.
      mutateChat((chatData) => {
        chatData?.[0].unshift(data);
        return chatData;
      }, false).then(() => {
        if (scrollbarRef.current) {
          // 내가 보낸 채팅은 최하단으로 이동하지만
          // 일정 높이 이상 스크롤 했을 때, 다른사람이 보낸 채팅은 스크롤 위치 유지
          if (
            scrollbarRef.current.getScrollHeight() <
            scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
          ) {
            setTimeout(() => {
              scrollbarRef?.current?.scrollToBottom();
            }, 50);
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    socket?.on('dm', onMessage);
    return () => {
      socket?.off('dm', onMessage);
    };
  }, [socket, onMessage]);

  // 로딩 시 스크롤바 제일 아래로
  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
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
      <ChatList
        chatSections={chatSections}
        scrollbarRef={scrollbarRef}
        setSize={setSize}
        isEmpty={isEmpty}
        isReachingEnd={isReachingEnd}
      />
      <ChatBox chat={chat} onSubmitForm={onSubmitForm} onChangeChat={onChangeChat} />
    </Container>
  );
};

export default DirectMessage;
