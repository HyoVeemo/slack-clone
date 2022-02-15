import React, { useCallback, useRef, VFC } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { ChatZone } from './style';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';

interface Props {
  chatData?: IDM[];
}

const ChatList: VFC<Props> = ({ chatData }) => {
  const scrollbarRef = useRef(null);

  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {chatData?.map((chat) => {
          return <Chat key={chat.id} data={chat} />;
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
