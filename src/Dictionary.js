import React, {useState }  from "react";
import axios from "axios";
import Result from "./Result"
import "./Dictionary.css";


export default function Dictionary(props) {

    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

function search() {
   
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
}

function keyWordChange(event) {
    setKeyWord(event.target.value);
}

function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input className="form-control form-control-sm"
                type="search"
                placeholder="Type a word and press Enter"
                autoFocus={true}
                onChange={keyWordChange}
                defaultValue={props.defaultKeyWord}
                />
            </form>
            <Result result={result}/>
        </div>
    )
  } else {
    load();
    return null;
  }
}