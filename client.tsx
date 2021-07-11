import React from 'react';
import { render } from 'react-dom';
import App from '@layouts/App';
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    , document.querySelector('#app'));

// pages  - react 는 single page 어플리케이션이지만 결국 페이지가 있다. -서비스
// components - 짜잘 컴포넌트
// layouts - 공통 레이아웃