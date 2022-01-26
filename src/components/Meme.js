import React from "react";
import memesData from "../memesData.js"


function Meme() {
  let url

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
  }

  function handleClick() {

  }
  return (
    <main>
     <p> <img src="{url}" alt="" /></p>
        <div className="form">
            <input
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button
                className="form--button"
            >
                Get a new meme image 🖼
            </button>
        </div>
    </main>
)
}

export default Meme
