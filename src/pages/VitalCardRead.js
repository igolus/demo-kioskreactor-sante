import React from 'react';
import useAppContext from "../hooks/useAppContext";

function VitalCardRead(props) {

    const {vitalScriptReady, vitalData, vitalCardInside} = useAppContext()
    return (
        <div>
            <p>{vitalScriptReady ? "Y" : "N"}</p>
            <p>{vitalCardInside ? "vitalCardInside Y" : "vitalCardInside N"}</p>
            <p>{JSON.stringify(vitalData || {})}</p>
        </div>
    );
}

export default VitalCardRead;
