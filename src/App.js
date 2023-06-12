import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PrintTickets from "./pages/PrintTickets";
import QrCodeScan from "./pages/QrCodeScan";
import VitalCardRead from "./pages/VitalCardRead";
import NotFound from "./pages/NotFound";
import {AppContextProvider} from "./context/AppContext";
import Speak from "./pages/Speak";
import Loader from "./Loader";


export default function App() {
    const query = new URLSearchParams(window.location.search);
    const deviceIdParam = query.get('deviceIdParam');
    //loadJsUrl();


    return (
        <AppContextProvider deviceId={deviceIdParam}>
            <Loader deviceIdParam={deviceIdParam}>
                <Router>
                    <Layout>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="/printTickets" element={<PrintTickets/>}/>
                            <Route exact path="/printTickets" element={<PrintTickets/>}/>
                            <Route exact path="/qrCodeScan" element={<QrCodeScan/>}/>
                            <Route exact path="/speak" element={<Speak/>}/>
                            <Route exact path="/vitalCardRead" element={<VitalCardRead/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Layout>
                </Router>
            </Loader>
        </AppContextProvider>
    );
}
