import { useState } from 'react'
import './App.css'
import Form from './form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'
import Counter from './Counter'
import Joker from './Joker'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Joker/>  
       <br />
            
    </>
  )
}

export default App
