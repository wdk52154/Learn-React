import React, { useCallback, useState } from 'react';
import Todoinput from './Todoinput';
import Todos from './Todos';

interface List {
  list?: any;
  txt?: any;
  isEnd?: boolean;
  id?: any;
}
const TodoList: React.FC = () => {
  const [list, setList] = useState<List[]>([]);
  //保存方法
  const save = useCallback((txt: any) => {
    setList((v) => [...v, { id: crypto.randomUUID(), txt, isEnd: false }]);
  }, []);

  //删除的方法
  const del = useCallback((id: number) => {
    setList((v) => v.filter((item) => item.id != id)); //当前id不等于传过来的id
  }, []);
  //完成的方法
  const end = useCallback((id: number) => {
    setList((v) =>
      v.map((item) => (item.id == id ? { ...item, isEnd: true } : { ...item })),
    );
  }, []);
  return (
    <div className="todo-list">
      <Todoinput save={save} />
      <hr />
      <Todos list={list} del={del} end={end} />
    </div>
  );
};
export default TodoList;
