// console.log("hello coder");
// a=1+2;
// console.log(`the value of a is:${a}`);
// let colour="yellow";
// if(colour==="red"){
//     console.log("stop");
// }
// if (colour==="yellow") {
//     console.log("wait");
// }
// if (colour==="green") {
//     console.log("go");
// }
// let size="L";
// if(size==="S"){
//     console.log(`price is Rs.50`);
// }
// else if(size==="M"){
//     console.log(`price is Rs.100`);
// }
// else if(size==="L"){
//     console.log(`price is Rs.150`);
// }
// else if(size==="XL"){
//     console.log(`price is Rs.200`);
// }
// alert("something is wrong")

// let str="help!";
// let cars=["bmw", "audi", "rolls royce","ferrari","huyndai"];
// let start=["january", "july", "march", "august"];
// let end=["c","c++","html","js","python","java","c#","sql"];
// let a =[['x',null,'O'],[null, 'O',null],['O',null,'X']];
// let str=prompt("enter the string");
// if(str.length==0){
//     console.log("empty");
// }
// else{
//     console.log("not empty");
// }
// if(str===str.toLowerCase()){
//     console.log("low");
// }
// else{
//     console.log("not lower");
// 
// for (let i=0; i<=5; i++){
//     console.log(i);
// }
// let n=5;
// for(let i=0;i<=10; i++){
//     console.log(`${n}*${i}=${n*i}`)
// }
// let c=prompt("write  your number");
// c=parseInt(c);
// for(let z=c; z<=c*10; z=z+c){
//     console.log(z);
// }
// for (let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }
// const favMovie="3 Idiots";
// let guess=prompt("please guess my favourite movie or quit");
// while((guess!=favMovie)&&(guess!="quit")){
    
//     guess = prompt("Wrong guess please try again ");
// }
// console.log("it is 3 Idiots")

// let heroes =[["ironman", "black panther", "spiderman"],["captain america","hulk","black widow"]];
// for (let i=0; i<heroes.length;i++){
//     for(let j=0; j<heroes[i].length;j++){
//         console.log(`i=${i}, j=${j}, ${heroes[i][j]}`);
//     }
// }
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(i=0;i<arr.length;i++){
//     if(arr[i]== num){
//     arr.splice(i,1)
//     }
    
// }
// console.log(arr)

// let num=76176927;
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// let nm=2819;
// let sum=0;
// let copy= nm;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum)

// let n=5
// let factorial=1;
// for(let i=1; i<=n; i++){
//     factorial *= i;
// }
// console.log(factorial)

// let arr=[1,4,7,9,3,8];
// let largest=0;
// for(let i=1; i<=arr.length; i++){
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }
// console.log(largest);

// let student = {
//  name:"Priyansh Singh",
//  age:20,
//  marks:77,
//  city:"Jaipur"
// }

// const post={
//     username:"priyansh23._",
//     content: "triund trek",
//     like:1000,
//     reposts:"dhruv.vyas",
//     tags:["#trek","travel"]


// }

// let a=Math.floor(Math.random()*10)+1;

// function hello(hello){
//     console.log(hello);
// }

// hello("hello");
// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,10)
// let n=prompt("Enter the number")
// function table(n){
//     for(let i=0; i<11;i++){
//         x=n*i;
//         console.log(`${n}*${i}=${x}`)
//     }
// }
// table(n);

// function getSum(n){
//     let sum=0;
//     for(let i =0; i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let str=["hi","priyansh"];
// function concat(str){
//     let result="";
//     for(let i =0; i<str.length;i++){
//         result += str[i];
//     }
//     return result;
// }

// function vari(func, n){
//     for(let i=0; i<n;i++){
//         func();
//     }
// }
//     let greet= function(){
//         console.log("namaste");
//     }



// vari(greet,1000);

// let student={
//     name: "Priyansh Singh",
//     age: 20,
//     eng: 95,
//     math:87,
//     phy:90,
//     getAvg(){
//         let avg=(this.eng+ this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks ${avg}`);
//     }

// }
// let a =(a,b)=>{
//     console.log(a+b);
// }
// let n=prompt("Give a number.")
// let j= (x)=>(n*n);

// let id= setInterval(()=>{
//     console.log("Priyansh keep doing it.");},2000
// );
// setTimeout(()=>{
//     clearInterval(id)
// },10000);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// let arrayAvg=(arr)=>{
//     for(let i=0; i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// };
// console.log(arrayAvg(arr));

// let a=4;
// let isEven=(a)=>a%2==0;

//  let arr =[1,2,3,4,5,6];
//  let print=function print(el){
//     console.log(el)
//  }
//  arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// })

// arr.forEach((el)=>{console.log(el)})

// let arr=[{
//     name:"Priyansh Singh",
//     age:20
// },
// {
//     name:"Amay Trivedi",
//     age:20
// },
// {
//     name:"Harshita Singh",
//     age:17
// }]

// arr.forEach((el)=>{
//     console.log(el.age)
// })

// let nm=[1,2,3,4];
// let double=nm.map((el)=>{return el*2});

// let nm=[2,3,4,1,5,6,7,8,8,5,10,11,12,18,20];
// let ans= nm.filter((el)=>{
//     return el%2==0;
// })

arr=[12,5,32,56,14,93,89,27,40];
// let max=-1;
// for( let i=0; i<=arr.length; i++){
//     if(arr[i]>max){
//      max=arr[i];
//     }
//     else{
//         max=max;
//     }
    
// }
// console.log(max)

// let maxi=arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(maxi);

// let ten=arr.every((el)=>el%10==0);

// let min=arr.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(min);

// let btn = document.querySelector("button");
// function sayHello(){
//     alert("hello!");
// }
// btn.onclick=sayHello;

// let btnos = document.querySelectorAll("button");
// function sayHello(){
//     alert("hello!");
//  }
//  function sayBest(){
//     alert("Im at the top of the world");
//  }
// for(btn of btnos){
//     // btn.onmouseenter= function(){
//     //     console.log("you entered a button");
//     // };
//     // btn.onclick=sayHello;
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayBest);

// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor="blue";
// })

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
    
//     let inp = document.querySelector("input");
//     console.log(inp.value);
// })

// let div =document.querySelector("div");
// let ul =document.querySelector("ul");
// let lis =document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// })
// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })
// for(li of lis){li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// })}

// function hello(){
//     console.log("Hello!");
// }
// function demo(){
//     hello();
// }

// setTimeout(function(){
//     console.log("I m the best!");
// }, 2000);

// console.log("Priyansh")

// CAll back nesting..

// let h1=document.querySelector("h1");
// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }
//     changeColor("red",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("pink",1000)
//         })
//     })

//function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }
savetoDb("I'm the best.",
()=>{
    console.log("success");
    savetoDb("Im grateful for what I have.",
()=>{
    console.log("success2");
    
},
()=>{
    console.log("failure2");
}
);
},
()=>{
    console.log("failure");
}
);

function savetoDb(data){
    return new Promise((success, failure)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            success("success");
        }
        else{
            failure("failure");
        }
    });
}
savetoDb("hi")
    .then(()=>{
        console.log("Hey");
    })
    .catch(()=>{
        console.log("bye");
    })