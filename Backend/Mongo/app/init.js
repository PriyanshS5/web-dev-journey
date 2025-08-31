const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().catch(err => console.log(err));

main()
.then(() =>{
    console.log("db connection successful")
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

  let allChats = [
    {
    from:"Neha",
    to:"Priya",
    msg:"Hey send me the datesheet",
    created_at: new Date()
    },
    {
        from:"Danish",
        to:"Zayn",
        msg:"LOL, it's funny.",
        created_at: new Date()
        },
        {
            from:"Shivansh",
            to:"Ronit",
            msg:"Where are you?",
            created_at: new Date()
            },
            {
                from:"Samar",
                to:"Dev",
                msg:"Hey what's new",
                created_at: new Date()
                },
                {
                    from:"Vansh",
                    to:"Rahul",
                    msg:"Have you done the project",
                    created_at: new Date()
                    },
                    {
                        from:"Adam",
                        to:"Ana",
                        msg:"Hey how are you",
                        created_at: new Date()
                        }
];

Chat.insertMany(allChats);