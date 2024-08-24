import React from 'react';

const Case1: React.FC = () => {
  //数组方法
  //1 indexOf 查找目标元素是否存在于数组中,存在返回下标,不存在返回-1
  //   const arr = ['a', 'b', 'c', 'd', 'e'];
  //   const res1 = arr.indexOf('c'); //2
  //   const res2 = arr.indexOf('k'); //-1

  //2 forEach() 遍历数组中的元素.没有返回值,不会改变原数组
  //   const arr = ['a', 'b', 'c', 'd', 'e'];
  //   arr.forEach((item, index) => {
  //     console.log(item); //当前元素
  //     console.log(index); //当前元素的索引
  //   });

  //3 map() 遍历数组中的元素,返回一个新数组.不回改变原数组. 没有return,会返回undefined
  //   const arr = ['a', 'b', 'c', 'd', 'e'];
  //   const result = arr.map((item, index) => {
  //     console.log(item); //当前元素
  //     console.log(index); //当前元素的索引
  //     return item + '777';
  //   });
  //   console.log(result); //['a777', 'b777', 'c777', 'd777', 'e777']
  //   console.log(arr); //['a', 'b', 'c', 'd', 'e']

  //4 filter() 把符合条件的过滤出来.返回一个新数组,不会修改原数组

  //   const arr = [4, 5, 6, 7, 8];
  //   const res1 = arr.filter((item, index) => {
  //     console.log(item, index);
  //     return item > 4;
  //   });
  //   console.log(res1); //[5, 6, 7, 8]

  //5 find() 返回符合条件的元素,找到第一个满足条件的元素,直接返回该元素.找不到,返回undefined.
  // findIndex() 返回符合条件元素的下标.找到第一个满足条件的元素,返回该元素的下标.找不到返回-1.
  //   const ages = [3, 10, 18, 20];
  //   const res1 = ages.find((item, index) => {
  //     // console.log(item, index);
  //     return item > 10;
  //   });
  //   //   console.log(res1); //18

  //   const res2 = ages.findIndex((item, index) => {
  //     console.log(item, index);
  //     return item > 202;
  //   });
  //   console.log(res2); //2

  //6 some() 有一个满足条件的就返回true,都不满足条件返回false
  //   const ages = [3, 10, 18, 20];
  //   const res = ages.some((item, index) => {
  //     console.log(item, index);
  //     return item > 3;
  //   });
  //   console.log(res);
  return <></>;
};

export default Case1;
