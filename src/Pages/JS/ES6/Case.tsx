import React from 'react';

const Case1: React.FC = () => {
  const arr = ['a', 'b', 'c', 'd'];
  //
  const b = arr.map((item, index) => {
    console.log(item, index);
    return item + 1;
  });
  console.log(b);
  return <></>;
};

export default Case1;
