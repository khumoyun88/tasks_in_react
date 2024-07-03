import { useState } from "react";
import CountChanger from "./CountChanger";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>{count}</h3>
      <CountChanger value={count} setValue={setCount} />
    </>
  );
}

export default Counter;
