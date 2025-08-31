const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');                //'mongodb://Local host: default mongo db port no./database connect'...this command awaits for the promise from the database itself. '.connect' will start a asynchronous process( process which takes their own time but not according to the code).


main()
.then(() => {
    console.log("Connectioin successful");                           //resolves the promisses when fullfilled
}) 
.catch(err => console.log(err));                                     //to execute async function if the promise not fullfiled

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({                              //created a schema (Structure) for the document.
    name: String,
    email: String,
    age: Number,
});

 const User = mongoose.model("User", userSchema);                      //model
// //const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User ({                                             //It got saved in memory in js but not in db.
//     name: "Adam",
//     email: "adamsapple@gmail.com",
//     age: 23
// });

// user1.save();                                                          //this command helps to save in db and returns returns promise.

// const user2 = new User ({                                             //It got saved in memory in js but not in db.
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 21
// });

// user2.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.find({age: { $gt: 21 } })                                           // to find
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.updateOne( { name : "Eve" } , { age : 49 } )
// .then((res) => {
//         console.log(res);
//     })
// .catch((err) => {
//         console.log(err);
//     });

    // User.updateMany( { age: { $gt: 20 } }, { age : 25 } )
    // .then((res)=> {
    //     console.log(res)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })

    User.findOneAndUpdate( { age: 25 }, { age : 30 } , { new : true })         //new:true -> by default the value is false but the true helps us return the updated value in the console
    .then((res)=> {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })