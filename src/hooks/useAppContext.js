import { useContext } from 'react';
import {APPUtilContext} from "../context/AppContext";

function useAppUtil() {
     let context = useContext(APPUtilContext);
     return context;
}

export default useAppUtil;
