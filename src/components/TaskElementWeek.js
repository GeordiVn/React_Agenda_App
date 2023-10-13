import {Col, Row} from "react-bootstrap";
import {
    dbTimeStampConverter,
    dbTimeStampConverterToDate,
    dbTimeStampConverterToTime
} from "../utilities/dbTimeStampConverter";
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
                <TaskData  title={'Task'} textColor={priorityColor[task.priority]} data={task.title}/>
            </Col>
            <Col className={'text-end'}>
                <DeleteButton/>
            </Col>
        </Row>
        <TaskData title={'Datum'} data={dbTimeStampConverterToDate(task.date)}/>
        <TaskData title={'Om'} data={dbTimeStampConverterToTime(task.date)}/>
        <TaskData title={'Omschrijving'} data={task.description}/>
    </Row>
}

function TaskData(props) {
    const {title, data,textColor} = props;
    return <p><span style={{fontSize: 'large', fontWeight: 'bold',color:textColor}}>{title}:</span> {data}</p>
}


const priorityColor = {
    0:'white',
    1:'orange',
    2:'red'
}
