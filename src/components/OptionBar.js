import {Row} from "react-bootstrap";

export function OptionBar(props) {
    const {children} = props;
    return <Row style={{backgroundColor:'#B2533E',padding:'10px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px', marginTop:'20px'}} className={'g-0'}>{children}</Row>
}
