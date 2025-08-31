const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connectioin successful");                           
}) 
.catch(err => console.log(err));                                    

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({                              //created a schema (Structure) for the document.
    title:{
        type: String,
        required:true                                                 // if not given book validation will be failed
    },
    author:{
        type: String
    },
    price:{
        type: Number,
        min:[1, "Price is too low for selling"]                       //it is throwing of error message  
    },
    discount:{
        type: Number,
        default: 0
    },

    genre: [String],                                                    //aray of strings

    category:{
        type: String,
        enum:["fiction", "non -fiction", "self-help"]                    //agr inke alawa koi or category hui toh error aajayega
    }


});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "How to win friends and influence people",
    author: "Dale Carnegie",
    price: 250
});

book1.save()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})