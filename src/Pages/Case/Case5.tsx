import React, { useState } from 'react';

//一个输入框,按下回车，渲染一个li和按钮，有删除的功能
interface Item {
  id: string;
  name: string;
}
const Case5: React.FC = () => {
  const [list, setList] = useState<Item[]>([]);

  const saveHandle = (e: any) => {
    //当按下回车时
    if (e.keyCode === 13) {
      //如果输入框中有值
      if (e.target.value) {
        //往数组list里面增加元素
        list.push({
          id: crypto.randomUUID(), //使用crypto API生成唯一的ID
          name: e.target.value, //使用输入框中的值
        });
        setList([...list]); //更新状态以渲染列表
        e.target.value = ''; //清空输入框
      } else {
        alert('请输入内容'); //如果输入框为空,提示用户输入内容
      }
    }
  };

  const delOne = (id: string) => {
    if (confirm('是否确认删除')) {
      setList(list.filter((item) => item.id != id));
    }
  };
  return (
    <>
      <div className="list">
        <input type="text" placeholder="请输入内容" onKeyUp={saveHandle} />
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => delOne(item.id)}>删除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Case5;
