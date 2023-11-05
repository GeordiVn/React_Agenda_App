import {Col} from "react-bootstrap";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";

export function ButtonCustom(props) {
    const {title, onClick} = props;
    const {colorPallet} = useColorSchemeContext();
    return <button onClick={() => onClick()} style={colorPallet.buttonCustom}>{title}</button>

}
