
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");

  }
  function handleMouseOver(){
    alert("para ke upar mouse lekar aaye ho")
  }
  function handleInputChange(e){
    // console.log("Input m value change hui h");
    console.log("value till now:",e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("form submit krdu kya");
  }


  return (
    <div>
      <button onClick={()=> alert("Button click hua h")}>
        Click me
      </button>


      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}


      {/* <p onMouseOver={handleMouseOver}style={{border:"1px solid black"}}>
      para is written
    </p>
    
    <button onClick={handleClick}>
      Click me
      </button> */}

    </div>
    
  )
}

export default App
