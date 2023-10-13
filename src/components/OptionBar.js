import {Row} from "react-bootstrap";

export function OptionBar(props) {
    const {children} = props;
    return <Row className={'g-0'}>{children}</Row>
}
