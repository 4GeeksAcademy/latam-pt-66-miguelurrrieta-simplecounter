import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css"; 

function ContadorSimple(props) {
    return (
        <div className='bigCounter'>
            <div className='calendar'>
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className='four'>{props.digitFour % 10}</div>
            <div className='three'>{props.digitThree % 10}</div>
            <div className='two'>{props.digitTwo % 10}</div>
            <div className='one'>{props.digitOne % 10}</div>
        </div>
    );
}

let counter = 0;
setInterval(function() {
    const four = Math.floor(counter / 1000)%10;
    const three = Math.floor(counter / 100)%10;
    const two = Math.floor(counter / 10)%10;
    const one = Math.floor(counter / 1)%10;
   
    counter++;

    
    ReactDOM.render(
        <ContadorSimple
            digitOne={one}
            digitTwo={two}
            digitThree={three}
            digitFour={four}
        />,
        document.querySelector("#root") 
    );
}, 1000);

 