import React from 'react';
import './juejin.less';
//稀土掘金pc页面
const JueJin: React.FC = () => {
  const navItme = [
    { id: 1, text: '首页' },
    { id: 2, text: 'BOT' },
    { id: 3, text: '沸点' },
    { id: 4, text: '课堂' },
    { id: 5, text: '直播' },
    { id: 6, text: '活动' },
    { id: 7, text: '竞赛' },
    { id: 8, text: '商城' },
    { id: 9, text: 'App' },
    { id: 10, text: '插件' },
  ];
  return (
    <div className="juejin">
      <div className="header">
        <a className="header-a"></a>
        <div className="header-left">
          <ul>
            {navItme.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <input type="text" placeholder="搜索稀土掘金" />
          <button>创作者中心</button>
          <div className="">会员</div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};
export default JueJin;
