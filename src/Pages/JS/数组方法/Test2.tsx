import React from 'react';
//删
const Test2: React.FC = () => {
  //1 pop 删除数组中的最后一个元素,并返回被删除的元素.会改变原数组
  //   const arr1 = [1, 2, 3];
  //   const arr2 = arr1.pop();
  //   console.log(arr2);
  //   console.log(arr1);

  //2 shift 从数组中删除第一个元素,并返回被删除的元素.会改变原数组
  // const todolist = ['购物', '学习', '锻炼', '阅读'];
  // const firstItem = todolist.shift();
  // console.log(todolist); //['学习', '锻炼', '阅读']
  // console.log(firstItem); //购物

  //3 splice 向数组添加、删除或替换数组中的元素,会改变原数组.(包括索引本身)
  // const arr1 = [1, 2, 3, 4];
  // const arr2 = arr1.splice(1, 2);
  // console.log(arr1); //[1,4]
  // console.log(arr2); //[2,3]

  //4 slice 从数组中提取出指定位置的元素,生成一个新数组,不会改变原数组(不包括索引本身)
  const arr1 = [1, 2, 3, 4];
  const arr2 = arr1.slice(1, 2);
  console.log(arr1); //[1,2,3,4]
  console.log(arr2); //[2]
  return <></>;
};

export default Test2;
