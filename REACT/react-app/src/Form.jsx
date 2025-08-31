function handleFormSubmit(){
    event.preventDefault();                         //this prevents the form default behaviour
    console.log("form was submitted")

}

export default function Form(){
    return(<form>
        <input placeholder="Write Something"/>
        <button onClick={handleFormSubmit}>Submit</button>
    </form>)
}