import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import PropTypes from "prop-types";

export function ButtonCustom(props) {
    const {title, onClick} = props;
    const {colorPallet} = useColorSchemeContext();
    return <button onClick={() => onClick()} style={colorPallet.buttonCustom}>{title}</button>

}

ButtonCustom.propTypes = {
    title: PropTypes.string, onClick: PropTypes.func
};