import React, { useCallback, VFC, forwardRef, RefObject } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { ChatZone, Section, StickyHeader } from './style';
import { IDM } from '@typings/db';
import Chat from '@components/Chat';

interface Props {
  setSize: (f: (size: number) => number) => Promise<IDM[][] | undefined>;
  scrollbarRef: RefObject<Scrollbars>;
  chatSections: { [key: string]: IDM[] };
  isEmpty: boolean;
  isReachingEnd: boolean;
}

const ChatList: VFC<Props> = ({ chatSections, scrollbarRef, setSize, isEmpty, isReachingEnd }) => {
  // scrollbar 를 컨트롤 할 수 있는데, 채널이나 DM 에 선언하는 것이 좋을 것 같다.
  // 채팅을 쳤을때 맨 아래로 가는 처리를 하려면 다이렉트 메세지에 있어야 쭉 내릴 수 있음

  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      // 끝에 도달하면 더이상 새로 불러올 필요가 없음
      console.log('가장 위');
      setSize((prevSize) => prevSize + 1).then(() => {
        // 스크롤 위치 유지
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
