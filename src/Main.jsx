import React from "react";
import Quotes from "./Quote";
console.log(Quotes)
function Main(props){
    return(
        <main>
            <div className="note"> 
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </main>
    )
};
export default Main;