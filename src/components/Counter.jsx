import { useState } from "react";
import CountChanger from "./CountChanger";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>{count}</h4>
      <CountChanger value={count} setValue={setCount} />
    </>
  );
}

export default Counter;
