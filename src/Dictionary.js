import React, {useState }  from "react";
import axios from "axios";
import ResultTop from "./ResultTop";
import ResultBottom from "./ResultBottom";
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

function HandleSubmit(event) {
    event.preventDefault();
    search();
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
            <section>
            <form onSubmit={HandleSubmit}>
                <input className="form-control form-control-sm"
                type="search"
                placeholder="Type a word and press Enter"
                autoFocus={true}
                onChange={keyWordChange}
                // defaultValue={props.defaultKeyWord}
                />
            </form>
            <ResultTop top={result}/>
            </section>
            <ResultBottom bottom={result}/>
               
        </div>
    )
  } else {
    load();
    return null;
  }
}