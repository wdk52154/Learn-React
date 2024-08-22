//封装一个map的函数
const myMap = function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
};

const array = [1, 2, 3, 4, 5, 6, 7];
myMap(array, (item, index) => {
  console.log(item, index);
});

// const utils = { myMap };

// /* 导出API */
// export default utils;
