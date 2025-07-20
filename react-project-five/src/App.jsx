
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';


function App() {
  const [isLoggedIn, setLoggedIn]= useState(true); 

   return(
   <div>
     {isLoggedIn ? <LogoutBtn /> :  <LoginBtn />}
     </div>
   )

//  if(isLoggedIn){
//   return(
//     <LogoutBtn />
//   )

//  }
//  else{
//   return(
//     <LoginBtn />
//   )
//  }
}

export default App
