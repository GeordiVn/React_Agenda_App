import {Col, Row} from "react-bootstrap";
import {dbTimestampConverter} from "../utilities/dbTimestampConverter";
import {DeleteButton} from "./DeleteButton";

export function TaskElementWeek(props) {
    const {task} = props

    return <Row className={'g-0'} style={{
        backgroundColor: '#512bd4',
        borderRadius: '10px',
        color: 'white',
        padding: '1.5rem',
        marginTop: '1.5rem'
    }}>
        <Row className={'g-0'}>
            <Col xs={"10"}>
                <TaskData title={'Task'} data={task.title}/>
            </Col>
            <Col className={'text-end'}>
                <DeleteButton/>
            </Col>
        </Row>
        <TaskData title={'Datum'} data={dbTimestampConverter(task.date.seconds)}/>
        <TaskData title={'Omschrijving'} data={task.description}/>
    </Row>
}

function TaskData(props) {
    const {title, data} = props;
    return <p><span style={{fontSize: 'large', fontWeight: 'bold'}}>{title}:</span> {data}</p>
}
