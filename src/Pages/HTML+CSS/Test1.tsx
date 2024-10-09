import React from 'react';
import './Test1.less';
const Test1: React.FC = () => {
  return (
    <>
      <div className="container">
        <img src={require('./boy.jpg')} alt="" />
      </div>
    </>
  );
};
export default Test1;
