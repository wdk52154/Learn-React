import React, { useCallback, useState } from 'react';
import Todoinput from './Todoinput';
import Todos from './Todos';
import styled from 'styled-components';

interface List {
  list?: any;
  txt?: any;
  isEnd?: boolean;
  id?: any;
}

const TodolistBox = styled.div`
  .todo-list {
    width: 100vw;
    height: 100vh;
    background-color: pink;
    .todo-input {
      /* background-color: skyblue; */
      text-align: center;
      width: 200px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 25px;
      font-size: 20px;
      outline: none; //移除焦点时的默认轮廓线
    }
    .todos {
      .item {
        button {
          width: 100px;
          height: 40px;
          background-color: skyblue;
        }
      }
    }
  }
`;

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
    <TodolistBox>
      <div className="todo-list">
        <Todoinput save={save} />
        <hr />
        <Todos list={list} del={del} end={end} />
      </div>
    </TodolistBox>
  );
};
export default TodoList;
