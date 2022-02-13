import style from '@emotion/styled';

export const ChatWrapper = style.div`
  display: flex;
  padding: 8px 20px;
  &:hover {
    background: #eee;
  }
  & .chat-img {
    display: flex;
    width: 36px; 
    margin-right: 0px;
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;
