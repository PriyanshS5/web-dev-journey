import { useEffect, useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({})

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () =>{
        let response = await fetch (URL);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
       setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }

    useEffect(() => {async function getFirstJoke(){                             //use effect k liye apko async ko arrow function m btana pdega

        let response = await fetch (URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }
    getNewJoke();
    }, [])
    
    


    return(
        <div>
            <h3>Joker!</h3>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}