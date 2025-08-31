const { faker } = require('@faker-js/faker');  //importing faker which will give fake database
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));   //When the server receives this data, it needs to parse it into a JavaScript object so you can access the key-value pairs in your application.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


const connection = mysql.createConnection({  // for creating connection
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'okpriyansh'
  });

  let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

  //let q ="INSERT INTO user (id, username, email, password) VALUES ?"; //inserting data these are the schema
  // let user = ["123", "123_newuser","abc@gmail.com","abc"];  //values

  // let data = [];
  // for (let i =1; i<=100; i++){
  //   data.push(getRandomUser()); //pushing 100 fake users data 
  // }


// try {
//   connection.query(q, [data], (err, result) =>{  //entering in database
//     if(err) throw err;
//     console.log(result);
//   });
// }
// catch (err) {
//     console.log(err);
// }

// connection.end();


  //console.log (getRandomUser());


  // Home Route
  app.get("/", (req, res) =>{
    let q = `SELECT count(*) FROM user`;  //for the count of entries
    try {
        connection.query(q, (err, result) =>{  //entering in database
          if(err) throw err;
          let count = result [0]["count(*)"];
          res.render("home.ejs", {count});
        });
      }
      catch (err) {
          console.log(err);
          res.send("some error in DB");
      }
  });

  // Show Route

  app.get("/user" , (req,res) => {
    let q = `SELECT * FROM user`;
    try{
      connection.query(q, (err, users) => {
      if(err) throw err;
      //console.log(result);
      // res.send(result);
      res.render("showuser.ejs", {users});
    });
    }
    catch (err){
      console.log(err);
      res.send("some error occured");

    }
  });
  
    //edit route
    app.get("/user/:id/edit", (req,res) => {
      let {id} =req.params;
      let q = `SELECT * FROM user WHERE id='${id}'`; //qoutes on id means we dont want value but the string.
      
      try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        console.log(result);
        let user = result[0];
        // res.send(result);
        res.render("edit.ejs", { user });
      });
      }
      catch (err){
        console.log(err);
        res.send("some error occured");
  
      }
    });

    //Update Route
    app.patch("/user/:id", (req,res) => {
      let {id} =req.params;
      let { password: formPass, username: newUsername} = req.body; //inpy which we are getting from the client are getting saved in thos variable
      let q = `SELECT * FROM user WHERE id='${id}'`; //qoutes on id means we dont want value but the string.
      
      try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        // res.send(result);
        if(formPass != user.password){
          res.send("wrong password");
        }
        else{
          let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
            if(err) throw err;
            res.redirect("/user");
          })
        }
        
      });
      }
      catch (err){
        console.log(err);
        res.send("some error occured");
  
      }
    });

    app.get("/user/adduser", (req, res) => {
      res.render("add.ejs");
  })

  app.post("/user/adduser", (req,res) =>{
    let {username, email, password} = req.body;
    let id = uuidv4();
      let q = `INSERT INTO user (id, username, email, password)
      VALUES ('${id}', '${username}', '${email}', '${password}');`
      try{
        connection.query(q, (err, result) => {
        if(err) throw err;
        console.log("Request body:", req.body);
        let user = result[0];
        // res.send(result);
        res.redirect("/user");
      });
      }
      catch (err){
        console.log(err);
        res.send("some error occured");
  
      }
    
  });
  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
 

  app.listen("2626", () => {
    console.log("server is listening to port 2626");
  })