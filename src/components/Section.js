import {Row} from "react-bootstrap";

export function Section(props) {
    const {children} = props;
    return <Row className={'g-0 p-md-1'} style={{
        backgroundColor: '#B5CB99',
        borderRadius: '10px',
        color: 'white',
        marginTop: '1.5rem'
    }}>
        {children}
    </Row>
}
