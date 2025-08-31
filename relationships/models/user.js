const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("connection unsuccessful"))
.catch(err => console.log(err));

async function main() { 
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User({
        username:"Sherlockholmes",
        addresses:[{
            location: "234, Mehta nagar",
            city: "Jaipur"
        }]
    });
    user1.addresses.push({location: "P32 Wallstreet", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();