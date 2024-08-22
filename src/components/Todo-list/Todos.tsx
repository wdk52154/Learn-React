import React from 'react';
import Todo from './Todo';
interface TodosProps {
  list?: any;
  del?: (id: number) => void;
  id?: number;
  end?: (id: number) => void;
}
const Todos: React.FC<TodosProps> = ({ list, del, end }) => {
  return (
    <div className="todos">
      {list.map((item: any) => (
        <Todo key={item.id} {...item} del={del} end={end} />
      ))}
    </div>
  );
};
export default Todos;
