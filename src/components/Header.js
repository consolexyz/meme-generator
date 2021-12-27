import React from "react";
import  './style.css';


export default function Header(){
    return(
        <header className = 'header'>
            <img src ='./assets/images/Troll-Face.png'  alt= "logo" className ="logo"/>
            <h2 className ="header-title">Meme Generator</h2>
        </header>
    )
}