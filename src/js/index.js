//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let num = 0



function Intervalo(){
    const numberStr = num.toString()
    const firstDigit = Math.floor(numberStr.substring(0,1))
    const secondDigit = Math.floor(numberStr.substring(1,2))
    const threeDigit = Math.floor(numberStr.substring(2,3))
    const fourDigit = Math.floor(numberStr.substring(3,4))
    const fiveDigit = Math.floor(numberStr.substring(4,5))
    const sixDigit = Math.floor(numberStr.substring(5,6))
    if(num>0 && num<=9) {
        ReactDOM.render(<Home firstDigit={firstDigit} />, document.querySelector("#app"));
    }else if(num > 9 && num<=99) {
        ReactDOM.render(<Home firstDigit={secondDigit} secondDigit={firstDigit}  />, document.querySelector("#app"));
    }else if(num > 99 && num<= 999) {
        ReactDOM.render(<Home firstDigit={threeDigit} secondDigit={secondDigit} threeDigit={firstDigit}  />, document.querySelector("#app"));

    }else if(num > 999 && num<= 9999) {
        ReactDOM.render(<Home firstDigit={fourDigit} secondDigit={threeDigit} threeDigit={secondDigit} fourDigit={firstDigit}  />, document.querySelector("#app"));

    }else if(num > 9999 && num<= 99999) {
        ReactDOM.render(<Home firstDigit={fiveDigit} secondDigit={fourDigit} threeDigit={threeDigit} fourDigit={secondDigit} fiveDigit={firstDigit}  />, document.querySelector("#app"));

    }else if(num > 99999) {
        ReactDOM.render(<Home firstDigit={sixDigit} secondDigit={fiveDigit} threeDigit={fourDigit} fourDigit={threeDigit} fiveDigit={secondDigit} sixDigit={firstDigit}  />, document.querySelector("#app"));
    }

    num ++

}

setInterval(Intervalo,1000);