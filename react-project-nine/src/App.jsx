
import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';

//step-1:create context
// const UserContext = createContext();

//step-2:wrap all the child inside the provider

// function App() {
  
  //step-3:pass value
  // const[user,setUser]=useState({name:"Gargi"});
//ste-4:consumer le andr jake consume kr lo any consumer childA ,B,C 

  // return (
  //  <>
  //  <UserContext.Provider value={user}>
  //    <ChildA />
  //  </UserContext.Provider>
  
  //  </>
  // )

// }
// const ThemeContext =createContext();
// function App() {
//   const [theme, setTheme]=useState('Light');

//   return (

//     <ThemeContext.Provider value={{theme, setTheme}}>
//       <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
//         <ChildA />
//       </div>
//     </ThemeContext.Provider>
//   )
// }


const UserContext = createContext();
const ThemeContext =createContext();
function App() {
  const[user,setUser]=useState({name:"Gargi"});
  const [theme, setTheme]=useState('Light');

  return (
     <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
     </UserContext.Provider>

    
  )
}


export default App
export {UserContext}
export {ThemeContext}
