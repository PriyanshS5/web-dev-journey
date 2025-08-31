import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import LikeButton from './LikeButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>States in REACT</h1>
    <Counter/> */}

    <p>States in REACT</p>
    <LikeButton/>
    </>
  );
}

export default App
