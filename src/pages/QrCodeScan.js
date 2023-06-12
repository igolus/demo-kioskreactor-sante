import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import useAppContext from "../hooks/useAppContext";

function QrCodeScan(props) {

    const [QRCode, setQRCode] = useState('NO CODE');
    const {kioskReactorJSLoaded} = useAppContext();

    useEffect(() => {
        if (kioskReactorJSLoaded) {
            try {
                window['addQrcodeListener']((qrcode) => {
                    try {
                        setQRCode(qrcode)
                    } catch (err) {
                        alert(err)
                    }
                })
            }
            catch (e) {

            }
        }

    }, [kioskReactorJSLoaded])


    return (
        <>
            <h1>{QRCode}</h1>
            <h1>{kioskReactorJSLoaded}</h1>
        </>
    );
}

export default QrCodeScan;
