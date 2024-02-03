import { useRef } from "react"

export default function Form2(props){

    const inputRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputRef.current.value)
        // fetch(url, {method: "post", headers, body})
    }

    return <form>
        <input type="text" name="something" ref={inputRef}></input>
        <button>Submit</button>
    </form>
}