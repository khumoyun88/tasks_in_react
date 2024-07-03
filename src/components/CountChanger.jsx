

function CountChanger({ value, setValue }) {
    return (
      <>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setValue(0)}>reset</button>
      </>
    );
  }
  
  export default CountChanger;

  