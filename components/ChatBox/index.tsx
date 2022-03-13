import { ChatArea, EachMention, Form, MentionsTextarea, SendButton, Toolbox } from '@components/ChatBox/style';
import React, { ReactNode, useCallback, useEffect, useRef, VFC } from 'react';
import autosize from 'autosize';
import { Mention, SuggestionDataItem } from 'react-mentions';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import useSocket from '@hooks/useSocket';
import { useParams } from 'react-router';
import gravatar from 'gravatar';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
  placeholder?: string;
}

// 채널, DM 에서 채팅 했을 때 재사용됨
// DM 보내기, 혹은 채널 메시지 요청을 하면 재사용이 불가능 하므로 props 로 사용한다.
const ChatBox: VFC<Props> = ({ chat, onSubmitForm, onChangeChat, placeholder }) => {
  const { workspace } = useParams<{ workspace: string }>();
  const {
    data: userData,
    error,
    revalidate,
    mutate,
  } = useSWR<IUser | false>('/api/users', fetcher, { dedupingInterval: 100000 });
  const { data: memberData } = useSWR<IUser[]>(userData ? `/api/workspaces/${workspace}/members` : null, fetcher);

  // status 로 관리하는 것이 아닌, 태그로 관리하고 싶을 때 ref 사용
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, [autosize]);
  const onKeydownChat = useCallback((e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        onSubmitForm(e);
      }
    }
  }, []);

  const renderSuggestion = useCallback(
    (
      suggestion: SuggestionDataItem,
      search: string,
      highlightedDisplay: ReactNode,
      index: number,
      focused: boolean,
    ): React.ReactNode => {
      if (!memberData) return;
      return (
        <EachMention focus={focused}>
          <img
            src={gravatar.url(memberData[index].email, { s: '20px', d: 'retro' })}
            alt={memberData[index].nickname}
          />
          <span>{highlightedDisplay}</span>
        </EachMention>
      );
    },
    [memberData],
  );

  // appendSpaceOnAdd: 멘션 대상 선택한 다음 한칸 띄워주는 기능
  return (
    <ChatArea>
      <Form onSubmit={onSubmitForm}>
        <MentionsTextarea
          id={'editor-chat'}
          value={chat}
          onChange={onChangeChat}
          onKeyDown={onKeydownChat}
          placeholder={placeholder}
          inputRef={textareaRef}
          allowSuggestionsAboveCursor>
          <Mention
            appendSpaceOnAdd
            trigger="@"
            data={memberData?.map((x) => ({ id: x.id, display: x.nickname })) || []}
            renderSuggestion={renderSuggestion}
          />
        </MentionsTextarea>
        <Toolbox>
          <SendButton onSubmit={onSubmitForm}>전송</SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
