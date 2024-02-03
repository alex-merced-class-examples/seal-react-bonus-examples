export default function Form3(props){


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        console.log(formData.get("something"))

        //fetch(url, {method: "put", headers, body})
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="something"></input>
        <button>Submit</button>
    </form>
}