import React from "react"

const ChildComponent = React.memo((props) =>{
    console.log("child component go re render again")
    return(
        <div>
            <button onClick={props.handleClick}>
                  {props.buttonName}
            </button>
          

        </div>
    )
});
export default ChildComponent

//React.memo -> wrap ->component ->component re render tb hi hogajb props change honge nhi toh rerender nhi hoga

//if you are sending a function then react.memo would not be able to save you from rendering