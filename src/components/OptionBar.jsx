import {Row} from "react-bootstrap";
import {useColorSchemeContext} from "../contexts/colorSchemeContext.jsx";
import PropTypes from "prop-types";

export function OptionBar(props) {
    const {children} = props;
    const {colorPallet} = useColorSchemeContext()
    return <Row style={colorPallet.optionBar} className={'g-0'}>{children}</Row>
}

OptionBar.propTypes = {
    children: PropTypes.any
};
