import React from 'react';
//渲染列表
const data1 = [
  '凯瑟琳·约翰逊: 数学家',
  '马里奥·莫利纳: 化学家',
  '穆罕默德·阿卜杜勒·萨拉姆: 物理学家',
  '珀西·莱温·朱利亚: 化学家',
  '苏布拉马尼扬·钱德拉塞卡: 天体物理学家',
];
const data2 = [
  {
    id: 0,
    name: '凯瑟琳·约翰逊',
    profession: '数学家',
  },
  {
    id: 1,
    name: '马里奥·莫利纳',
    profession: '化学家',
  },
  {
    id: 2,
    name: '穆罕默德·阿卜杜勒·萨拉姆',
    profession: '物理学家',
  },
  {
    id: 3,
    name: '珀西·莱温·朱利亚',
    profession: '化学家',
  },
  {
    id: 4,
    name: '苏布拉马尼扬·钱德拉塞卡',
    profession: '天体物理学家',
  },
];
const Case3: React.FC = () => {
  const listItems = data1.map((item, index) => <li key={index}>{item}</li>);
  const chemists = data2.filter((item) => item.profession === '化学家');
  const listItems2 = chemists.map((person) => (
    <li key={person.id}>
      <div>
        {person.id}-{person.name}-{person.profession}
      </div>
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
      <br />
      <ul>{listItems2}</ul>
    </>
  );
};

export default Case3;
