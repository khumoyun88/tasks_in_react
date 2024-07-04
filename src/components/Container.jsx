
function Container({color}) {
    return (
      <>
        <div className="container" style={
            {
                width: '300px',
                height: '300px',
                border: '1px solid',
                borderRadius: '4px',
                backgroundColor: color,
                borderColor: color

            }

        }></div>
      </>
    );
}
export default Container;
  