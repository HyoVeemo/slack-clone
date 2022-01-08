import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from '@components/ChatBox/style';
import React, { VFC, useCallback } from 'react';

interface Props {
  chat: string;
}

const ChatBox: VFC<Props> = ({ chat }) => {
  const onSubmitForm = useCallback(() => {}, []);

  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea>
          <textarea></textarea>
        </MentionsTextarea>
        <Toolbox>
          <SendButton>전송</SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
