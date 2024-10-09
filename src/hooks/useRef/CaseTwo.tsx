import React, { useRef } from 'react';

const CaseTwo: React.FC = () => {
  //缓存数据ref=0
  const ref = useRef(0);
  //点击按钮触发的事件
  const handle = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  };
  return (
    <>
      <button onClick={handle}>++</button>
    </>
  );
};
export default CaseTwo;
