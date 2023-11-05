import {Row} from "react-bootstrap";
export function Section(props) {
    const {children, customStyle} = props;
    return <Row className={'g-0 p-md-1'} style={customStyle.section.style}>
        {children}
    </Row>
}
