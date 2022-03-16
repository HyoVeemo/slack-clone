import { IChat, IDM } from '@typings/db';
import dayjs from 'dayjs';

export default function makeSection(chatList: (IDM | IChat)[]) {
  const section: { [key: string]: (IDM | IChat)[] } = {};
  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(section[monthDate])) {
      section[monthDate].push(chat);
    } else {
      section[monthDate] = [chat];
    }
  });

  return section;
}
