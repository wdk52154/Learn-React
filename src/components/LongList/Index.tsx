import React, { ReactNode } from 'react';
import FixedSizeList from './FixedSizeList';
import './style.less';

interface Item {
  style?: any;
  index?: any;
}
const Item: React.FC<Item> = (props) => {
  const { style, index } = props;
  return (
    <>
      <div
        className="item"
        style={{
          ...style,
          background: index % 2 === 0 ? 'burlywood' : 'cadeblue',
        }}>
        {index}
      </div>
    </>
  );
};

const Index: React.FC = () => {
  const list = new Array(10000).fill(0).map((item, i) => i);
  //   console.log(list);
  return (
    <>
      <FixedSizeList containerHeight={300} itemHeight={50} itemCount={list.length}>
        {Item}
      </FixedSizeList>
    </>
  );
};

export default Index;
