import React, { useEffect, useRef, useState } from 'react';

const CaseOne: React.FC = () => {
  let box = useRef(null);

  useEffect(() => {
    console.log(box.current);
  }, []);
  return (
    <>
      <div ref={box}>hellow word</div>
    </>
  );
};
export default CaseOne;
