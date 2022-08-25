import "./styles.css";
import { MyType } from 'mylibrary/MyType';

export default function App() {

  const b: MyType = {
    name: "Mary",
  };

  return (
    <div className="App">
      <h1>Hello from main</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Here's MyType: { JSON.stringify(b) }</p>
    </div>
  );
}
