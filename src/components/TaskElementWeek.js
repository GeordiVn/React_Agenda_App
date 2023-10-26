import {Col, Row} from "react-bootstrap";
import {
    dbTimeStampConverterToDate, dbTimeStampConverterToTime
} from "../utilities/dbTimeStampConverter";
import {DeleteButton} from "./DeleteButton";
import PropTypes from "prop-types";
import {Section} from "./Section";
import {TaskData} from "./TaskData";

export function TaskElementWeek(props) {
    const {task} = props

    return <Section>
        <Row className={'g-0 '}>
            <Col xs={"10"}>
                <TaskData title={'Task'} priority={task.priority} data={task.title}/>
            </Col>
            <Col className={'text-end'}>
                <DeleteButton/>
            </Col>
        </Row>
        <TaskData title={'Datum'} data={dbTimeStampConverterToDate(task.date)}/>
        <TaskData title={'Om'} data={dbTimeStampConverterToTime(task.date)}/>
        <TaskData title={'Omschrijving'} data={task.description}/>
    </Section>
}


TaskElementWeek.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })
};

