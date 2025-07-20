import { useState } from 'react'

import './App.css'
import ChildComponent from './components/ChildComponent';
import { useCallback } from 'react';
import ExpensiveComponents from './components/ExpensiveComponents';

function App (){
  return (
    <div>
      <ExpensiveComponents />
    </div>
  )
}

export default App
