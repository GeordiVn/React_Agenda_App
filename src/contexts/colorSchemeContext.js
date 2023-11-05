import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useLocalStorage} from "@uidotdev/usehooks";
import {COLOR_SCHEME} from "../data/data";

const ColorSchemeContext = createContext();


export function ColorSchemeProvider(props) {
    const [colorScheme, setColorScheme] = useLocalStorage("defaultColorScheme", 0);
    const [colorPallet, setColorPallet] = useState(colorScheme === 0 ? COLOR_SCHEME.light : COLOR_SCHEME.dark);

    const setBodyColor = useCallback(({color}) => {
        document.documentElement.style.setProperty('--bodyColor', color)
    }, []);

    useEffect(() => {
        setBodyColor(colorPallet.body)
    }, []);

    const changeColorPallet = useCallback((colorScheme) => {
        setColorScheme(colorScheme);
        setBodyColor(colorScheme === 0 ? COLOR_SCHEME.light.body : COLOR_SCHEME.dark.body);
        setColorPallet(colorScheme === 0 ? COLOR_SCHEME.light : COLOR_SCHEME.dark)

    }, [setBodyColor,setColorScheme]);


    const api = useMemo(() => ({
        colorScheme, setColorScheme, colorPallet, changeColorPallet

    }), [colorScheme, setColorScheme, colorPallet, changeColorPallet]);

    return <ColorSchemeContext.Provider value={api}>
        {props.children}
    </ColorSchemeContext.Provider>
}

export const useColorSchemeContext = () => useContext(ColorSchemeContext);



