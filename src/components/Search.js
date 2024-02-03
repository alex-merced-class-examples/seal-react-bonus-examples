import directors from "./data";
import { useRef, useState } from "react";

export default function Search(props) {

    const [dirs, setDirs] = useState(directors)

    const inputRef = useRef(null)

    const handleSearch = (event) => {
        const text = inputRef.current.value
        const newListOfDirectors = directors.filter((d) => d.name.includes(text) )
        if(text === ""){
            setDirs(directors)
            return 1
        }
        setDirs(newListOfDirectors)
    }

  return (
    <>
      <input type="text" ref={inputRef}></input>
      <button onClick={handleSearch}>Search</button>
      <div>
        {dirs.map((d) => {
          return (
            <div>
              <h1>{d.name}</h1>
              <h2>{d.nationality}</h2>
              <h4>{d.notableFilms.join(" ,")}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
