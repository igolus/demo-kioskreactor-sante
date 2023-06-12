import React from 'react';
import useAppContext from "../hooks/useAppContext";

function Home() {
    const {deviceIdParam} = useAppContext();
    return (
        <div>
            <h1>HOME</h1>
            <h1>{deviceIdParam}</h1>
        </div>
    );
}

export default Home;
