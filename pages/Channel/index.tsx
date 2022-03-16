import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Header } from '@pages/Channel/style';
import useInput from '@hooks/useInput';
import ChatList from '@components/ChatList';
import ChatBox from '@components/ChatBox';
import axios from 'axios';
import { useParams } from 'react-router';
import useSWR, { useSWRInfinite } from 'swr';
import fetcher from '@utils/fetcher';
import makeSection from '@utils/makeSection';
import Scrollbars from 'react-custom-scrollbars';
import { IChannel, IChat, IUser } from '@typings/db';
import useSocket from '@hooks/useSocket';
import InviteChannelModal from '@components/InviteChannelModal';

const Channel = () => {
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const { data: myData } = useSWR(`/api/users`, fetcher);
  const { data: channelMembersData } = useSWR<IUser[]>(
    myData ? `/api/workspaces/${workspace}/channels/${channel}/members` : null,
    fetcher,
  );
  const { data: channelData } = useSWR<IChannel>(`/api/workspaces/${workspace}/channels/${channel}`, fetcher);
  const [chat, onChangeChat, setChat] = useInput('');
  const {
    data: chatData,
    mutate: mutateChat,
    revalidate,
    setSize, //페이지 수 바꿔주는 역할
  } = useSWRInfinite<IChat[]>(
    (index) => `/api/workspaces/${workspace}/channels/${channel}/chats?perPage=20&page=${index + 1}`,
    fetcher,
  );
  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;

  const scrollbarRef = useRef<Scrollbars>(null);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      // 1. 채팅을 서버에 발송
      // 서버에 저장된 채팅을 다시 받아본다.
      if (chat?.trim()) {
        const savedChat = chat;
        if (chatData && channelData) {
          mutateChat((prev) => {
            prev?.[0].unshift({
              id: (chatData[0][0]?.id || 0) + 1,
              content: savedChat,
              UserId: myData.id,
              User: myData,
              ChannelId: channelData.id,
              Channel: channelData,
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
          .post(`/api/workspaces/${workspace}/channels/${channel}/chats`, {
            content: chat,
          })
          .then(() => {
            revalidate();
          })
          .catch(console.error);
      }
      setChat('');
    },
    [chat, chatData, myData, channelData, workspace, channel],
  );
  const [socket] = useSocket(workspace);

  const onMessage = useCallback(
    (data: IChat) => {
      if (data.Channel.name === channel && data.UserId !== myData.id) {
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
    },
    [channel],
  );

  const chatSections = makeSection(chatData ? chatData.flat().reverse() : []);

  useEffect(() => {
    socket?.on('message', onMessage);
    return () => {
      socket?.off('message', onMessage);
    };
  }, [socket, onMessage]);

  // 로딩 시 스크롤바 제일 아래로
  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  });

  const onClickInviteChannel = useCallback(() => {
    setShowInviteChannelModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowInviteChannelModal(false);
  }, []);

  if (!myData) {
    return null;
  }

  return (
    <Container>
      <Header>
        <span> {channel}</span>
        <div className="header-right">
          <span></span>
          <button
            onClick={onClickInviteChannel}
            className="c-button-unstyled p-ia__view_header__button"
            aria-label="Add people to #react-native"
            data-sk="tooltip_parent"
            type="button">
            <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
          </button>
        </div>
      </Header>
      <ChatList
        chatSections={chatSections}
        scrollbarRef={scrollbarRef}
        setSize={setSize}
        isEmpty={isEmpty}
        isReachingEnd={isReachingEnd}
      />
      <ChatBox chat={chat} onSubmitForm={onSubmitForm} onChangeChat={onChangeChat} />
      <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      />
    </Container>
  );
};

export default Channel;
