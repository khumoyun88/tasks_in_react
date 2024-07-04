

function MyInput({ setText }) {
    return (
      <>
        <input 
            type="text" 
            onChange={(event) => {
            setText(event.target.value)
          }}
        />
      </>
    );
}
export default MyInput;
  