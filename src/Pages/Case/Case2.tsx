import React from 'react';
//条件渲染
interface ItemProps {
  name?: string;
  isPacked?: boolean;
}

const Item: React.FC<ItemProps> = ({ name, isPacked }) => {
  /*
    1 三目运算符
    return <li className="item">{isPacked ? name + ' ✔' : name}</li>;
    */

  /*
  2 与运算符 &&
  ①在 JSX 中，{cond ? <A /> : <B />} 表示 “当 cond 为真值时, 渲染 <A />，否则 <B />”。
   ②在 JSX 中，{cond && <A />} 表示 “当 cond 为真值时, 渲染 <A />，否则不进行渲染”。
  */
  return (
    <li className="item">
      {name}
      {/* {isPacked && '✔'} */}
    </li>
  );
};
const PackingList: React.FC = () => {
  return (
    <>
      <section>
        <h1>Sally Ride 的行李清单</h1>
        <ul>
          <Item isPacked={true} name="宇航服" />
          <Item isPacked={true} name="带金箔的头盔" />
          <Item isPacked={false} name="Tam 的照片" />
          <Item isPacked={true} name="wdk很帅" />
        </ul>
      </section>
    </>
  );
};
export default PackingList;
