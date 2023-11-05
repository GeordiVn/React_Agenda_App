import {useColorSchemeContext} from "../contexts/colorSchemeContext";

export function SelectionBar(props) {
    const {children} = props;
    const {colorPallet} = useColorSchemeContext();
    return <div style={colorPallet.selectionBar}>
        {children}
    </div>
}
