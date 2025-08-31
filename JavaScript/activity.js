let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    let h3= document.querySelector("h3");
    let randomColour= getRandomColour();
    h3.innerText=randomColour;

    let div= document.querySelector("div");
    div.style.backgroundColor= randomColour;

    console.log("colour generated");
})

function getRandomColour(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let colour= `rgb(${red}, ${green}, ${blue})`;
    return colour;
}