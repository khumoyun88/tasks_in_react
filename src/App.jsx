import { useState } from 'react'
import './App.css'
import './components/Counter.jsx'
import Count from './components/Counter.jsx'
import MyInput from './components/MyInput.jsx'
import Container from './components/Container.jsx'
import ColorInput from './components/ColorInput.jsx'

function App() {
  const [text, setText] = useState('')
  const [color ,setColor] = useState('')


  return (
    <>
      <h3>task 2</h3>
      < Count/>

      <h3>task 3</h3>
      <h4>{text}</h4>
      <MyInput setText={setText}/>

      <h3>task 4</h3>
        <ColorInput setColor={setColor}/>
        <Container color={color}/>
        






      
    </>
  )
}

export default App
