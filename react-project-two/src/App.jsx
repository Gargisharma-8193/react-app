import UseCard from "./components/UserCard"
import gargipic from './assets/gargipic.jpg'
import Maharana from './assets/Maharana.jpg'
import prithviraj from './assets/prithviraj.jpg'



function App() {
  

  return (
    <div className="container">
      <UseCard  name="Gargi sharma" desc="Description 1" image={gargipic}/>
      <UseCard name="Maharana pratap" desc="Description 2" image={Maharana}/>
      <UseCard name="Prthvi raj" desc="Description 3" image={prithviraj}/>
    </div>
  )
}

export default App
