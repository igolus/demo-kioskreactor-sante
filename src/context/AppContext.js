import React, {useCallback, useState} from "react";
export const APPUtilContext = React.createContext();

const AppContextProvider = ({ deviceId, children }) => {
  const [kioskReactorJSLoaded, setKioskReactorJSLoaded] = useState(false);
  const [vitalData, setVitalData] = useState(null);
  const [vitalScriptReady, setVitalScriptReady] = useState(false);
  const [vitalCardInside, setVitalCardInside] = useState(false);

  const contextValue = {
    deviceIdParam: deviceId,
    kioskReactorJSLoaded: kioskReactorJSLoaded,
    setKioskReactorJSLoaded: setKioskReactorJSLoaded,
    vitalData: vitalData,
    setVitalData: setVitalData,
    vitalCardInside : vitalCardInside,
    setVitalCardInside: setVitalCardInside,
    vitalScriptReady,
    setVitalScriptReady: useCallback((value) =>
    {
      setVitalScriptReady(value)
    }, []),
  };

  return (
      <APPUtilContext.Provider value={contextValue}>
        {children}
      </APPUtilContext.Provider>
  );
};

export { AppContextProvider };
