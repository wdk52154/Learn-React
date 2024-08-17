import React from 'react';
import ReactDOM from 'react-dom/client';
//全局样式和初始样式
import '@/assets/style/global.less';
import '@/assets/style/reset.less';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <App />
  </>,
);
