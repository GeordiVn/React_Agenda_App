import {Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props) {
    const {children, customStyle} = props;
    return <Row className={'g-0 p-md-1'} style={customStyle.section.style}>
        {children}
    </Row>
}

Section.propTypes = {
    children: PropTypes.any,
    customStyle: PropTypes.shape({})
};