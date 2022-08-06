import Circle from "./components/Circle";

const App = () => {
  console.log("test");
  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" text="check" />
    </div>
  );
};

export default App;
