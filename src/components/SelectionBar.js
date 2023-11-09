import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import PropTypes from "prop-types";

export function SelectionBar(props) {
    const {children} = props;
    const {colorPallet} = useColorSchemeContext();
    return <div style={colorPallet.selectionBar}>
        {children}
    </div>
}

SelectionBar.propTypes = {
    children: PropTypes.any
};