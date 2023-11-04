import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {addDoc, deleteDoc, collection, GeoPoint, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useLocalStorage} from "@uidotdev/usehooks";
import {COLOR_SCHEME} from "../data/data";

const ColorSchemeContext = createContext();


export function ColorSchemeProvider(props) {
    const [colorScheme, setColorScheme] = useLocalStorage("defaultColorScheme", 0);
    const [colorPallet, setColorPallet] = useState(colorScheme === 0 ? COLOR_SCHEME.light : COLOR_SCHEME.dark);

    const changeColorPallet = useCallback((colorScheme)=>{
        setColorScheme(colorScheme);
        setColorPallet(colorScheme===0? COLOR_SCHEME.light:COLOR_SCHEME.dark)
    },[]);

    const api = useMemo(() => ({
        colorScheme, setColorScheme, colorPallet, changeColorPallet

    }), [colorScheme, setColorScheme, colorPallet, changeColorPallet]);

    return <ColorSchemeContext.Provider value={api}>
        {props.children}
    </ColorSchemeContext.Provider>
}

export const useColorSchemeContext = () => useContext(ColorSchemeContext);



