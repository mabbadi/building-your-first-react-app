import { useState } from "react";

const App: React.FC = () => {
  const [text, setText] = useState<string>('Page with basic HTML elements');
  const [count, setCount] = useState<number>(0);
  
  const changeText = () => {
    setText ("Some other text.");
  };
  const incrementCount = () => {
    setCount (count + 1);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{text}</p>
      <div>Count: {count}</div>
      <div>
        <button onClick={ changeText }>Change text</button>
        <button onClick={ incrementCount }>Increment count</button>
      </div>
    </div>
  );
};
export default App;
