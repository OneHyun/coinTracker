import Circle from "./components/Circle";
import React, { useState } from "react";
import { env } from "process";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.btnColor};
`;
const App = () => {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    console.log("Changing", value);
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default App;
