import React from 'react';
//每一项
interface TodoProps {
  id?: any;
  txt?: string;
  del: (id: number) => void;
  end: (id: number) => void;
  isEnd?: boolean;
}
//每一项
const Todo: React.FC<TodoProps> = ({ txt, del, end, id, isEnd }) => {
  console.log(del);
  return (
    <div className="item">
      <h1>{txt}</h1>
      <div className="op">
        <button
          className=""
          onClick={() => {
            if (confirm('是否确认删除？')) {
              del(id);
            }
          }}>
          删除
        </button>
        <button
          style={{ display: isEnd ? 'none' : '' }}
          className=""
          onClick={() => {
            end(id);
          }}>
          完成
        </button>
      </div>
    </div>
  );
};

export default Todo;
