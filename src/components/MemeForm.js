import React, { useState } from "react";
import memeData from "../memeData";

export default function MemeForm(){
   
const [meme, setMeme ] =useState(
    {
        topText : "",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    }
)

const [allMemeImage , setAllMemeImage] = useState(memeData)

function getMemeImage(){
    const MemeArray = memeData.data.memes
    const randomNumber= Math.floor(Math.random() * MemeArray.length)
    const url = MemeArray[randomNumber].url

    setMeme( prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
}



    return( 
        <main>
        <div className = 'form'>
            <input type = "text"
                  className ="form-input"
                  placeholder ="Top-input"
                  />
            <input type = "text"
            className = 'form-input' 
            placeholder = 'bottom-input'
            />
            <button className = "form-button" onClick = {getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <div className ="image-container">
          <img src ={meme.randomImage} className="meme-image" />
        </div>
        </main>
    )
}