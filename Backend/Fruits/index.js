// const apple = require("./apple");
// const banana = require("./banana");
// const orange = require("./orange");

// let fruits ={apple, banana, orange};

// module.exports = fruits;

const figlet=require("figlet");

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  

