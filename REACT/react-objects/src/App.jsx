// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import LudoBoard from './LudoBoard.jsx';
// import TodoList from './TodoList';
import Lottery from './Lottery';
import {sum} from "./helper";

function App() {
  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) =>
      num === ticket[0]
    );
  }

return(
<>

<Lottery n={3} winCondition={winCondition}/>

{/* <Ticket ticket={[0,1,2]}/>
<Ticket ticket={[0,1,5,0,0,2,3,1]}/> */}
{/* <TicketNum num={4}/>
<TicketNum num={2}/> */}

</>
)

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  //)
}

export default App
