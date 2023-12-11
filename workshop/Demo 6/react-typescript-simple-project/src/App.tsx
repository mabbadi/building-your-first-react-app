import { useState } from "react";
import Controllers from "./Controllers";

const App: React.FC = () => {

  const [text, setText] = useState<string>('Page with basic HTML elements');
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{text}</p>
      <div>Count: {count}</div>
      <Controllers count={count} setCount={setCount} setText={setText} />
    </div>
  );
};

export default App;
