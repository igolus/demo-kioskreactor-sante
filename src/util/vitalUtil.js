export function connectIcanope(dmpConnectInstance,
                               setCardInside,
                               setVitalData, appendLog) {
    //showLoading();
    //dmpConnectInstance.hl_sessionExists
    dmpConnectInstance.hl_openSession(3600 * 24 * 360, null, ( res ) => {
        if (res.error) {
            alert("Error loading session");
            return;
        }
        dmpConnectInstance.hl_getVitaleCard( 1, "Identive CLOUD 2700 R Smart Card Reader 0", function(a){
            dmpConnectInstance.hl_startVitaleCardMonitoring( 1 /* Checking interval in seconds. */,
                async function( receivedObject, responseCallback )
                {
                    if( receivedObject.error )
                    {
                        appendLog("-- hl_startVitaleCardMonitoring failed: ", receivedObject );
                        //alert( "-- hl_startVitaleCardMonitoring failed: ", receivedObject );
                    }
                    else
                    {
                        if (receivedObject.s_cardStatus === 'NewCardFound') {
                            setCardInside(true);
                            dmpConnectInstance.hl_readVitaleCard(function(vitaleData) {
                                if (a.error) {
                                    appendLog("-- hl_readVitaleCard failed: ", vitaleData);
                                } else {
                                    appendLog("-- hl_readVitaleCard succeeded.", JSON.stringify(vitaleData, null, 2));
                                    setVitalData(vitaleData);
                                }
                            });
                        }
                        else if (receivedObject.s_cardStatus === 'CardMissing') {
                            setCardInside(false);
                            setVitalData(null);
                        }
                        console.log( "The Vitale card status changed " + JSON.stringify(receivedObject, null, 2 ))
                        responseCallback( true );
                    }
                });
        });
    })
}
