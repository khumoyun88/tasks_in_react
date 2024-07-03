import { useState } from 'react'
import './App.css'
import './components/Counter.jsx'
import Count from './components/Counter.jsx'

function App() {
  const [text, setText] = useState('')


  return (
    <>
      <h3>task 2</h3>
      < Count/>

      <h3>task 3</h3>
      <h4>{text}</h4>
      <input 
        type="text" 
        onChange={(event) => {
           setText(event.target.value)
          }}
      />
    </>
  )
}

export default App
