import React, { useState } from 'react';

export default function Us2() {
  //为组件添加状态:在组件的顶层调用useState来声明一个或者多个状态变量
  const [age, setAge] = useState(18);
  const [name, setName] = useState('wdk');
  const onClick = () => {
    setName('hello word');
  };
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <button onClick={onClick}>更新</button>
    </>
  );
}
