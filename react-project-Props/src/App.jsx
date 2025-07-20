
import './App.css'
import Button from './components/Button'
// import Card from './components/Card'

function App() {
  const{count, setCount}=useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    
    <div>
      <Button handleClick={handleClick} 
      text="click me">
        <h1>{count}</h1>
        </Button>

     {/* <Card name="Gargi sharma"> */}
      {/* CHILDREN */}
      {/* <h1>Best Web Dev Course</h1>
      <p>Trying to be consistent in this</p>
      <p>Will Complte the course soon</p>

     </Card> */}
     {/* <Card children="Mai ek children hu">
       Hello jee kaise ho sarre 
     </Card> */}

    </div>

  )
}

export default App
