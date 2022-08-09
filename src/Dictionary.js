import React, {useState }  from "react";
import axios from "axios";
import Result from "./Result"
import "./Dictionary.css";


export default function Dictionary() {

    let [keyWord, setKeyWord] = useState("");
    let [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

function search(event) {
    event.preventDefault();

    // alert (`Searching for ${keyWord} definition...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
}

function keyWordChange(event) {
    setKeyWord(event.target.value);
}
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input className="form-control form-control-sm"
                type="search"
                placeholder="Type a word and press Enter"
                autoFocus={true}
                onChange={keyWordChange}/>
            </form>
            <Result result={result}/>
        </div>

    )
}