import { useState } from "react"

export default function Form(){
    // let [fullName, setFullName] = useState("");

    let [formData, setFormData] = useState({
        fullName:"",
        userName:"",
        password: ""
    })

    // let handleNameChange = (event) => {
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // };

    let handleInputChange = (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        // console.log(newValue);

        setFormData((currData) =>{
            currData[fieldName] = newValue;
            return {...currData};
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({})                             //if we want to khali the input are after submission of the form
    }


    return(
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="fullName">Full Name</label>
            <input type="text" 
            placeholder="Enter Full Name" 
            value={formData.fullName} 
            // onChange={handleNameChange}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input type="text" 
            placeholder="Enter User Name" 
            value={formData.userName} 
            // onChange={handleNameChange}
            onChange={handleInputChange}
            id="username"
            name="userName"
            />
             <br /><br />
            <label htmlFor="password">Password</label>
            <input type="text" 
            placeholder="Enter Password" 
            value={formData.password} 
            // onChange={handleNameChange}
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
}