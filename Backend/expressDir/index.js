const express = require("express");
const app = express();

let port= 1024;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res)=>{
//     console.log("request recievd");
//     res.send("Basic")
// });

app.get("/", (req, res)=>{
    res.send("hello i am root")
})
// app.get("/search", (req, res)=>{
//     res.send("you contacted search path")
// })

// app.get("*", (req, res)=>{
//     res.send("no path")
// })

// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     // res.send("hello I am root2");
//     let{username, id}=req.params;
//     let html=`<h1>welcome @${username}</h1>`
//     res.send(html);
// });

app.get("/search", (req, res)=>{
    // let { q } = req.query;
    console.log(req.query);
    res.send(`search queries are`);
});