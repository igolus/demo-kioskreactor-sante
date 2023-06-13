import React, {useEffect} from 'react';
import useAppContext from "./hooks/useAppContext";
import {connectIcanope} from "./util/vitalUtil";
import ClipLoaderComponent from "./component/ClipLoaderComponent";

var scriptLoaded = false;

function appendLog()
{
    console.log.apply(null, arguments);
}

function updateStateDisplay()
{
}

function handleError( error, command, timeoutInSeconds, answerCallback )
{
    console.error( 'Handled error', error );
    answerCallback( { 'error': error } );
}

function wrapperInitialized( serverUrl )
{
    if( serverUrl )
        console.log( "Wrapper initialized. Server url is '" + serverUrl  + "'" );
    else
        console.log( "An error occurred during the wrapper initialization. ");
}


var dmpConnectInstance;

function Loader({children, deviceIdParam}) {

    const {setKioskReactorJSLoaded, setVitalCardInside,
        setVitalData, setVitalScriptReady, vitalScriptReady, kioskReactorJSLoaded} = useAppContext();

    useEffect(() => {
        loadJsUrl();
    }, [])

    function loadJsUrl() {
        if (scriptLoaded) {
            return;
        }
        scriptLoaded = true

        const scriptKioskReactor = document.createElement("script");
        scriptKioskReactor.src = "https://us-central1-totemsystem-5889b.cloudfunctions.net/homePage/kioskReactorJs/" + deviceIdParam + "?windows=true";
        scriptKioskReactor.async = false;
        scriptKioskReactor.onload = () => {
            setKioskReactorJSLoaded(true)
        }


        const scriptDmConnect = document.createElement("script");
        scriptDmConnect.src = "https://us-central1-totemsystem-5889b.cloudfunctions.net/homePage/dmConnect";
        scriptDmConnect.async = false;
        scriptDmConnect.onload = () => {
            setVitalScriptReady(true);
            const DMPConnectCons = window['DMPConnect'];
            dmpConnectInstance = new DMPConnectCons(appendLog, updateStateDisplay, handleError,
                wrapperInitialized, "9982", "localhost.icanopee.net");

            let interval = setInterval(() => {
                try {
                    connectIcanope(dmpConnectInstance,
                        setVitalCardInside, setVitalData, appendLog);

                    clearInterval(interval);
                }
                catch (err) {
                    console.log("unable to connect to icanopee")
                }
            }, 1000);
        }
        document.body.appendChild(scriptKioskReactor);
        document.body.appendChild(scriptDmConnect);
    }


    return (
        <>
            {(vitalScriptReady && kioskReactorJSLoaded) ?
                <>
                    {children}
                </>
                :
                <ClipLoaderComponent/>
            }
        </>
    );
}

export default Loader;
