import {Col, Row} from "react-bootstrap";
import {DeleteButton} from "./DeleteButton";
import {dbTimeStampConverterToDate, dbTimeStampConverterToTime} from "../utilities/dbTimeStampConverter";

export function Section(props) {
    const {children} = props;
    return <Row className={'g-0'} style={{
        backgroundColor: '#B5CB99',
        borderRadius: '10px',
        color: 'white',
        padding: '1.5rem',
        marginTop: '1.5rem'
    }}>
        {children}
    </Row>
}
