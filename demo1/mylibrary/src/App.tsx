import { MyType } from "./MyType";
import "./styles.css";

export default function App() {
  const a: MyType = {
    name: "John"
  };

  return (
    <div className="App">
      <h1>Hello from mylibrary</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Here's MyType: { JSON.stringify(a) }</p>
    </div>
  );
}
