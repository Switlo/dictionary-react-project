import React, { useState }  from "react";
import axios from "axios";
import ResultTop from "./ResultTop";
import ResultBottom from "./ResultBottom";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {

    let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResult(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
        console.log(response.data.photos)
      }

function search() {
   
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelslApiKey = "563492ad6f917000010000018c07b291396546caa135a835804d6045";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelslApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
                <input className="form-control rounded-4"
                type="search"
                placeholder="Type your word and press Enter"
                autoFocus={true}
                onChange={keyWordChange}
                // defaultValue={props.defaultKeyWord}
                />
            </form>
            <ResultTop top={result}/>
            </section>
            <section className="PhotosSection">
            <Photos photos={photos}/>
            </section>
            <section>
            <ResultBottom bottom={result}/>
            </section>
        </div>
    )
  } else {
    load();
    return null;
  }
}