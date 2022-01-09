import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from '@components/ChatBox/style';
import React, { VFC, useCallback } from 'react';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}

// 채널, DM 에서 채팅 했을 때 재사용됨
// DM 보내기, 혹은 채널 메시지 요청을 하면 재사용이 불가능 하므로 props 로 사용한다.
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat }) => {
  const onKeydownChat = useCallback((e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        onSubmitForm(e);
      }
    }
  }, []);

  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea>
          <textarea value={chat} onChange={onChangeChat} onKeyDown={onKeydownChat}>
            {' '}
          </textarea>
        </MentionsTextarea>
        <Toolbox>
          <SendButton onSubmit={onSubmitForm}>전송</SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
