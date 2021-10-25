import {
  AddButton,
  Channels,
  Chats,
  Header, LogOutButton, MenuScroll,
  ProfileImg, ProfileModal,
  RightMenu, WorkspaceButton,
  WorkspaceName,
  Workspaces,
  WorkspaceWrapper,
} from '@layouts/Workspace/style';
import React, { FC, useCallback, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import gravatar from 'gravatar'
import loadable from '@loadable/component';
import Menu from '@components/Menu/index';


const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

// children 을 사용하는 컴포넌트 FC (children 을 안 쓰는 컴포넌트는 VFC type)
const Index: FC = ({ children }) => {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { data: userData, error, revalidate, mutate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 });

  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        // 쿠키 공유 옵션
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  // 보통 토글 함수라고 부른다.
  const onClickUserProfile = useCallback(()=>{
    setShowUserMenu((prev)=>!prev)
  }, [])

  const onClickCreateWorkSpace = useCallback(()=>{

  }, [])

  if (!userData) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      <Header>
        slack
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData.nickname, {s:'28px', d:'retro'})} alt={userData.nickname}/>
               {showUserMenu && <Menu style={{right: 0, top:38}} show = {showUserMenu} onCloseModal={onClickUserProfile} >
                  <ProfileModal>
                    <img src={gravatar.url(userData.nickname, {s:'36px', d: 'retro'})} alt={userData.nickname}/>
                    <div>
                      <span id="profile-name">{userData.nickname}</span>
                      <span id="profile-active">Active</span>
                    </div>
                  </ProfileModal>
                 <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
                 </Menu>}
           </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}> 로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>
          {userData?.Workspaces.map((ws:any)=>{
            return (
              <Link key={ws.name} to={`/workspace/${123}/channel/일반`}>
                <WorkspaceButton>
                  {ws.name.slice(0,1).toUpperCase()}
                </WorkspaceButton>
              </Link>
            )
          })}
          <AddButton onClick={onClickCreateWorkSpace}></AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName>
            workspacename
          </WorkspaceName>
          <MenuScroll>
            menuscroll
          </MenuScroll>
        </Channels>
        <Chats>
          <Switch>
            <Route path="/workspace/channel" component={Channel}></Route>
            <Route path="/workspace/dm" component={DirectMessage}></Route>
          </Switch>
        </Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Index;
