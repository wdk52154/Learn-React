import React, { useEffect, useState } from 'react';
//倒计时
const Case6: React.FC = () => {
  const [reminded, setReminded] = useState(10);
  const startHandle = () => {
    const timer = setInterval(() => {
      setReminded((r) => {
        if (r > 1) {
          return r - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  useEffect(() => {
    console.log('reminded', reminded);
  }, [reminded]);
  return (
    <>
      <h1>{reminded > 0 ? `还剩${reminded}秒` : '活动开始了'}</h1>
      <button onClick={startHandle}>开始计时</button>
    </>
  );
};

export default Case6;
