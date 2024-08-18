import React from 'react';
const Case4: React.FC = () => {
  //handleClick 事件处理函数
  //通常将事件处理程序命名为 handle，后接事件名.eg:handleClick/handleMouseEnter

  // e.stopPropagation() 阻止事件传播
  //e.preventDefault() 阻止默认行为

  const handleClick = (e: any) => {
    console.log('你点击了我!');
    e.stopPropagation(); //阻止事件传播
  };

  return (
    <>
      <div
        className="Toolbar"
        onClick={() => {
          console.log('你点击了 toolbar !');
        }}>
        <button onClick={handleClick}>播放电影</button>
      </div>
    </>
  );
};

export default Case4;
