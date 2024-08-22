import React from 'react';

interface TodoinputProps {
  save: (txt: any) => void;
}
const Todoinput: React.FC<TodoinputProps> = ({ save }) => {
  console.log('save', save);
  return (
    <input
      placeholder="请输入内容"
      onKeyUp={(e: any) => {
        if (e.keyCode === 13) {
          if (e.currentTarget.value) {
            save(e.currentTarget.value); //存
            e.currentTarget.value = ''; //清空
          } else {
            alert('请输入内容');
          }
        }
      }}
    />
  );
};

export default Todoinput;
