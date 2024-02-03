import { useState } from "react"

export default function Form1(props){

    const [formData, setFormData] = useState({
        something: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        // fetch(url, {method: "post", headers, body})
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="something" onChange={handleChange}></input>
        <button>Submit</button>
    </form>
}