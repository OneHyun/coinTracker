import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("hi :)");
    return () => {
      console.log("bye :(");
    };
  }, []);
  return <h1>Hello</h1>;
};

const App = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
};

export default App;
