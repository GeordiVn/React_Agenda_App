import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useLocalStorage} from "@uidotdev/usehooks";
import {COLOR_SCHEME} from "../data/data.jsx";

const ColorSchemeContext = createContext();


export function ColorSchemeProvider(props) {
    const [colorScheme, setColorScheme] = useLocalStorage("defaultColorScheme", 0);
    const [colorPallet, setColorPallet] = useState(COLOR_SCHEME[colorScheme]);

    const setBodyColor = useCallback(({color}) => {
        document.documentElement.style.setProperty('--bodyColor', color)
    }, []);

    useEffect(() => {
        setBodyColor(colorPallet.body)
    }, [colorPallet.body, setBodyColor]);

    const changeColorPallet = useCallback((colorScheme) => {
        setColorScheme(colorScheme);
        setBodyColor(COLOR_SCHEME[colorScheme].body);
        setColorPallet(COLOR_SCHEME[colorScheme])

    }, [setBodyColor, setColorScheme]);


    const api = useMemo(() => ({
        colorScheme, setColorScheme, colorPallet, changeColorPallet

    }), [colorScheme, setColorScheme, colorPallet, changeColorPallet]);

    return <ColorSchemeContext.Provider value={api}>
        {props.children}
    </ColorSchemeContext.Provider>
}

export const useColorSchemeContext = () => useContext(ColorSchemeContext);



