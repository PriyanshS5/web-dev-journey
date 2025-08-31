import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username should be filled..';
    }

    return errors;
  };

export default function CommentsForm({addNewComment}){
    // let [formData, setFormData] = useState({
    //     username:"",
    //     remarks:"",
    //     rating:5
    // });
    const formik = useFormik({
        initialValues: {
            username:"",
            remarks:"",
            rating:5
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    // let handleInputChange = (event) => {
    //     setFormData((currData)=>{
    //         return{...currData, [event.target.name]: event.target.value }
    //     })
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:"",
    //         remarks:"",
    //         rating:5
    //     })
    // }

    return(
        <div>
            <h4>Give a Comment.</h4>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                placehodler="username" 
                // value={formData.username}
                value={formik.values.username}
                // onChange={handleInputChange}
                onChange={formik.handleChange}
                id="username"
                name="username"/>
                <br /><br />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
 

                <label htmlFor="remarks">Remarks</label>
                <textarea 
                name="remarks" id="remarks" 
                placeholder= "Add Remarks! " 
                // value={formData.remarks}
                value={formik.values.remarks}
                // onChange={handleInputChange}
                onChange={formik.handleChange}>
                    </textarea>
                <br />  <br />

                <label htmlFor="rating">Ratings</label>
                <input 
                type="number" 
                placeholder="rating" 
                min={1} 
                max={5} 
                // value={formData.rating}
                value={formik.values.rating}
                // onChange={handleInputChange}
                onChange={formik.handleChange}
                id="rating"
                name="rating"/>
                <br /><br />

                <button>Add a comment.</button>
            </form>
        </div>
    )
}