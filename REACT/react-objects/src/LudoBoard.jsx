import { useState } from "react";
export default function LudoBoard(){
    
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0 });
    // let [count, setCount] = useState(0);
    let [arr, SetArr] = useState(["no moves"]);

    let updateBlue = () =>{
        // moves.blue +=1;
        // setMoves((prevMoves) => {
        //     return{...prevMoves, blue: prevMoves.blue +1};
        // });
        //setMoves({...moves, blue: moves.blue + 1}); //spread(...) will show the changes in UI as it update our object
    
        // arr.push("blue moves");
        SetArr((prevArr)=>{
            return [...arr, "blue moves"                    //arrays and state
        ]});
    
    };
 
 
    return(
        <div>
            <p>
            Game begins!
            </p>

            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow} </p>
                <button style={{backgroundColor: "yellow", color: "black"}}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>
            </div>

        </div>
        
    )
}