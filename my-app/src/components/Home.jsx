import React from 'react'
import './Component.css'
import {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () =>{
    const [title, setTitle]=useState("");
    const [value,setValue]=useState('');
    const [searchParams, setSearchParams]=useSearchParams();
    const pasteId  =searchParams.get('pasteId');
    const dispatch = useDispatch();

    function createPaste(){
        const paste ={
            title:title,
            content:value,
            _id:pasteId ||
                Date.now().toString(36),
            createdAt:new Date().toISOString()

        }
        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }
        //after creation and updation
        setTitle('');
        setValue('');
        setSearchParams({});

    }
    return (
        <div>
            <div className='home-container'>
            <input
            className='input-box'
            type="text" 
            placeholder='enter your text here'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={createPaste}
            className='button-box'>
                {
                    pasteId ? "update my paste" : "create my paste"
                }
            </button>
        </div>
        <div className='text-container'>
            <textarea 
            className='text-box'
            value={value}
            placeholder='enter content here'
            onChange={(e) =>setValue(e.target.value)}
            rows={20}
            />
        </div>
        </div>
        
    )
}
export default Home