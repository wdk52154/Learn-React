//遍历数组
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function bianli(arr) {
  //如果数组为空,直接return
  if (arr == null) return;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i); //arr[i] 元素  i 索引
  }
}
bianli(arr);
