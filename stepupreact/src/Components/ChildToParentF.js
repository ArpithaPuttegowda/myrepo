export const Parent = () => {
  const getData = (d) => {
    alert(d);
  };
  return (
    <div>
      <Child fn={getData} />
    </div>
  );
};
const Child = ({fn}) => {
  const myData = [1, 2, 3];
  const handleClick = () => {
    fn(myData);
  };
  return (
    <div>
      CHild
      <button onClick={handleClick}>
        click me to pass data from child to parent
      </button>
    </div>
  );
};
