import React from "react"
import { useNavigate } from "react-router-dom";

const Home= () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/about');
    }
    return (
        <div onClick={handleClick}>
            Home page
            <button>
                Move to About page
            </button>

        </div>
    )

}
export default Home