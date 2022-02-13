import React, { VFC } from 'react';
import { ChatZone, Section } from './style';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';

interface Props {
  chatData?: IDM[];
}

const ChatList: VFC<Props> = ({ chatData }) => {
  return (
    <ChatZone>
      {chatData?.map((chat) => {
        return <Chat key={chat.id} data={chat} />;
      })}
    </ChatZone>
  );
};

export default ChatList;
