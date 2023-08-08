import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";
import fontawesome  from "@fortawesome/fontawesome-svg-core" 

//create your first component
const Home = ({firstDigit,secondDigit = "0",threeDigit="0",fourDigit="0",fiveDigit ="0",sixDigit="0"}) => {
	console.log(secondDigit)
	const stylePadre = {
		background:"black"
	}
	const styleRow = {
		paddingLeft:"200px",
		paddingRight:"200px",
		paddingTop:"15px",
		paddingBottom:"15px"

	}
	return (
		<div className="text-center container-fluid" style={stylePadre} >
        	<div className="row" style={styleRow}>
				<div className="col-2">
					<SecondsCounter icon={true}/>
				</div>
				<div className="col">
					<SecondsCounter digito={sixDigit === 0 ? "0" : sixDigit}/>
				</div>
				<div className="col">
					<SecondsCounter digito={fiveDigit === 0 ? "0" : fiveDigit}/>
				</div>
				<div className="col">
					<SecondsCounter digito={fourDigit === 0 ? "0" : fourDigit}/>
				</div>
				<div className="col">
					<SecondsCounter digito={threeDigit === 0 ? "0" : threeDigit}/>
				</div>
				<div className="col">
					<SecondsCounter digito={secondDigit === 0 ? "0" : secondDigit}/>
				</div>
				<div className="col">
					<SecondsCounter digito={firstDigit === 0 ? "0" : firstDigit}/>
				</div>
		

    		</div>
		</div>
	);
};

export default Home;
