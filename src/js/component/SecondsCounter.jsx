

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = ({digito,icon})=> {
    const styleLetter = {
        fontSize: "30px",
        fontWeight: "bold"
    }
    const valueInsert = digito? digito : icon
    return (
        <p className="col py-5 rounded border border-white border-1 text-white" style={styleLetter}>{icon === true ? <FontAwesomeIcon icon={faClock}/>
        : digito}</p>

    )
}

export default SecondsCounter