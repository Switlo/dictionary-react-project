import React, {useState }  from "react";
import "./Dictionary.css";

export default function Dictionary() {

    let [keyWord, setKeyWord] = useState("");

function search(event) {
    event.preventDefault();

    alert (`Searching for ${keyWord} definition...`);
}

function keyWordChange(event) {
    setKeyWord(event.target.value);
}
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Type a word and press Enter" autoFocus={true} onChange={keyWordChange}/>
            </form>
        </div>

    )
}