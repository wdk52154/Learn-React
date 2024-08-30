import React, { useState } from 'react';

const Us1: React.FC = () => {
  //定义一个状态变量
  //state:当前的state
  //setState:set函数
  const [state, setState] = useState(0);
  //点击事件
  const onClick = () => {
    //1 直接传递新状态
    // setState(1);
    //2 函数式更新
    //React 把更新函数放入队列中并重新渲染组件。在下一次渲染期间，React 将通过把队列中所有更新函数应用于先前的状态来计算下一个状态。
    setState((v) => v + 1);
    console.log('state', state);
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={onClick}>点击事件</button>
    </>
  );
};
export default Us1;
