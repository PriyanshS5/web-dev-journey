function handleClick(){
    console.log("Hello!");
}

function handleMouseOver(){
    console.log("Bye!");
}

export default function Button(){
    return (<div>
        <button onClick={handleClick}>Click Me!</button>
        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Magni quisquam, recusandae sed totam tempore, maiores quibusdam aliquam nemo sit corrupti autem beatae et. 
        Sint officiis pariatur vitae qui corrupti unde.</p>
        </div>
        );
}