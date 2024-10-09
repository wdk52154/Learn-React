import React, { ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { useState } from 'react';

interface Props {
  containerHeight?: any; //容器高度
  itemHeight?: any; //列表尺寸
  itemCount?: any; //列表长度
  children: any;
}

const FixedSizeList: React.FC<Props> = (props) => {
  const { containerHeight, children, itemHeight, itemCount } = props;
  //children语义不好,赋值给Component
  const Component = children;

  const contentHeight = itemHeight * itemCount; //内容总高度
  const [scrollTop, setScrollTop] = useState(0); //滚动位置

  //继续需要渲染的item索引有哪些
  let startIdx = Math.floor(scrollTop / itemHeight);
  let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight);

  //上下额外多渲染几个item,解决滚动时来不及加载元素出现短暂的空白区域的问题
  const paddingCount = 2;
  startIdx = Math.max(startIdx - paddingCount, 0); // 处理越界情况
  endIdx = Math.min(endIdx + paddingCount, itemCount - 1);

  const top = itemHeight * startIdx; // 第一个渲染 item 到顶部距离

  //需要渲染的items
  const items = [];
  for (let i = startIdx; i <= endIdx; i++) {
    items.push(<Component key={i} index={i} style={{ height: itemHeight }} />);
  }

  return (
    <>
      <div
        style={{ height: containerHeight, overflow: 'auto' }}
        onScroll={(e) => {
          // 处理渲染异步导致的白屏现象
          // 改为同步更新，但可能会有性能问题，可以做 节流 + RAF 优化
          flushSync(() => {
            if (e.target instanceof HTMLDivElement) {
              setScrollTop(e.target.scrollTop);
            }
            // setScrollTop(e.target.scrollTop);
          });
        }}>
        <div style={{ height: contentHeight }}>
          {/* 一个将 items 往下推到正确位置的空元素 */}
          <div style={{ height: top }}></div>
          {items}
        </div>
      </div>
    </>
  );
};

export default FixedSizeList;
