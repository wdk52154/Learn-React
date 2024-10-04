function Node(value) {
  this.value = value;
  this.next = null;
}

//创建链表
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;
d.next = null;
console.log(a);
