import {Row} from "react-bootstrap";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";

export function Section(props) {
    const {children} = props;
    const {colorPallet} = useColorSchemeContext()
    return <Row className={'g-0 p-md-1'} style={colorPallet.section.style}>
        {children}
    </Row>
}
