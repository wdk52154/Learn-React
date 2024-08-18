import React from 'react';
interface SonProps {
  person: {
    name?: string;
    age?: number;
  };
  size?: number;
}
const Son: React.FC<SonProps> = (props) => {
  console.log('props', props);
  //结构赋值
  let { person, size = 180 } = props;
  //默认值,传递props为undefined才生效.
  return (
    <>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{size}</div>
    </>
  );
};

const Father: React.FC = () => {
  const name = 'wdk';
  const age = 18;
  const size = 100;
  return (
    <>
      <Son person={{ name, age }} size={undefined} />
    </>
  );
};
export default Father;
