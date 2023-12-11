import { useState } from "react";
const App: React.FC = () => {
  const [text, setText] = useState<string>('Page with basic HTML elements');
  const changeText = () => {
    setText ("Some other text.");
  };
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{text}</p>
      <div>
        <button onClick={ changeText }>Change text</button>
      </div>
    </div>
  );
};
export default App;
