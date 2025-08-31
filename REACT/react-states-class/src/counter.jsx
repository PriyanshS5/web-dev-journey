import { useState } from "react"

export default function Counter(){
    // let count =0;

    function incCount(){
        setCount(count+1);
        console.log(count);
    }
    
    // const [stateVariable, setStateVariable] = useState(0);            //initalization state set the value of state and setState is a updater function which updates the value
    // console.log(arr);

    let [count, setCount] = useState(0);

    return(
        <div>
            <h3>Count = {count}</h3>
             <button onClick={incCount}>Increase Counter</button>
        </div>
    )

}