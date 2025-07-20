import React ,{useState,useEffect} from 'react';
function ResizeComponents() {
    const [windoWidth,setWindowWidth]=useState(window.innerWidth);

    useEffect(() =>{
        
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event listners Added");
    window.addEventListener('resize',handleResize);

    return() =>{
        console.log("Event Listners removed");
        window.removeEventListener('resize',handleResize);
    };
   },[]);
//it will run only on first render
   return (
    <div>
        <h1>WindowWidth:{windoWidth}px</h1>
    </div>
   )
}
export default ResizeComponents