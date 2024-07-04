      
        function ColorInput({setColor}) {
            return (
              <>
                <input 
                        type="text" 
                        onChange={(event) => {
                        setColor(event.target.value)
                    }}
                />
              </>
            );
        }
          
        export default ColorInput;
          