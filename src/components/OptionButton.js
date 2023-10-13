import {Col} from "react-bootstrap";

export function OptionButton(props) {
    const {title,onLayoutChanged,layout} = props;
    return <Col xs={"auto"} style={{marginRight: '10px'}}>
        <button onClick={()=>onLayoutChanged(layout)} style={{
            backgroundColor: '#512bd4',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '5px'
        }}>{title}</button>
    </Col>
}
