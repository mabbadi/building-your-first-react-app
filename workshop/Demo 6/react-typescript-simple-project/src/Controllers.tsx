interface ControllersProps {
    setText: (newText: string) => void;
    count: number;
    setCount: (newCount: number) => void;
  } 
const Controllers: React.FC<ControllersProps> = ({setText, count, setCount}) => {
  const changeText = () => {
    setText ("Some other text.");
  };
  const incrementCount = () => {
    setCount (count + 1);
  };
  return (
    <div>
        <button onClick={ changeText }>Change text</button>
        <button onClick={ incrementCount }>Increment count</button>
    </div>
  );
};
export default Controllers; 
