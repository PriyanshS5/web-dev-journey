const nm= prompt("enter a number max")
let a=Math.floor(Math.random()*nm)+1;
let b=prompt("guess the number"); 
while(true){
    if(b=="quit"){
        console.log("You quit");
        break;
    }
    else if(b==a){
        console.log("You guessed it right! Congrats! The number is", a);
        break;
    }
    else if(b<a){
        b=prompt("your guess is too small, try again.");
    }
    else if(b>a){
        b=prompt("your guess is too large, try again.");
    }
}