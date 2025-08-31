const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require('method-override')
const port = 1010;
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended : true})); 
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ 
    {   
        id: uuidv4(),
        username : "Dev",
        content : "I love programming."
    },
    {   
        id: uuidv4(),
        username : "Priyansh",
        content : "Commit and work towards it."
    },
    {   
        id: uuidv4(),
        username : "Sam",
        content : "I am earning billions."
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts})
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({username, content})
    res.redirect("/posts")
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
     });
    
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
  });

  app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
  });

  app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
  })

app.listen(port, () =>{
    console.log("listening to port: 1010");
});