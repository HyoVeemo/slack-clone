import { ChatArea, Form, MentionsTextarea, SendButton, Toolbox } from '@components/ChatBox/style';
import React, { VFC, useCallback, useEffect, useRef } from 'react';
import autosize from 'autosize';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
  placeholder?: string;
}

// 채널, DM 에서 채팅 했을 때 재사용됨
// DM 보내기, 혹은 채널 메시지 요청을 하면 재사용이 불가능 하므로 props 로 사용한다.
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat, placeholder }) => {
  // status 로 관리하는 것이 아닌, 태그로 관리하고 싶을 때 ref 사용
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);
  const onKeydownChat = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (!e.shiftKey) {
          onSubmitForm(e);
        }
      }
    },
    [onSubmitForm],
  );

  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea
          id={'editor-chat'}
          value={chat}
          onChange={onChangeChat}
          onKeyDown={onKeydownChat}
          placeholder={placeholder}
          ref={textareaRef}
        />
        <Toolbox>
          <SendButton onSubmit={onSubmitForm}>전송</SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
