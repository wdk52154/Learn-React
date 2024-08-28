/*1 创建数组 */
let arr1 = [1, 2, 3, 4, 5];
//数组初始的长度为10
let arr2 = new Array(10);
console.log(arr1, arr2);
/*2 创建链表 */
let b = { value: 2, next: null };
let a = {
  value: 1,
  next: b,
};
console.log(a.next == b); //true
