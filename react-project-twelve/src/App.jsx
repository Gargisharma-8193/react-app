import { useState } from 'react'
import {useForm} from 'react-hook-form'

import './App.css'

function App() {
  const{
    register,
    handleSubmit,
    watch,
    formState : {errors,isSubmitting},
  }=useForm();

  async function onSubmit(data){
    //API call ka simulate krna
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form",data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >First Name:</label>
        <input className={errors.firstname ? 'input-error' : ""}
        {...register('firstname',
          {
            required:true,
            minLength:{value:3,message:'Min len at least 3'},
            maxLength:{value:6,message:'Max len atmost 6'}
          })} />
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
      </div>
      <br />
       <div>
        <label >Middle Name:</label>
        <input className={errors.firstname ? 'input-error' : ""}
        {...register('middlename')} />
      </div>
      <br />
       <div>
        <label >Last Name:</label>
        <input className={errors.firstname ? 'input-error' : ""}
        {...register('lastname',
          {
            pattern:{
              value:/^[A-Za-z]+$/i,
              message:"Last name isnot as per the rules"
            }
          })} />
          {errors.lastname && <p className='error-msg'>{errors.lastname.message }</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting": "submit"} />
    </form>
  )
}

export default App
