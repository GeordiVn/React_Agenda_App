import {Col, Row} from "react-bootstrap";
import {
    dBTimeStampToLocaleDateString, dbTimeStampToTime
} from "../utilities/db_time_date_utilities";
import PropTypes from "prop-types";
import {Section} from "./Section.jsx";
import {TaskData} from "./TaskData.jsx";
import {IconButton} from "./IconButton.jsx";
import {BiEdit} from "react-icons/bi";
import {TiDelete} from "react-icons/ti";
import {useTaskManagerContext} from "../contexts/taskManagerContext.jsx";

export function TaskElementWeek(props) {
    const {task, customStyle} = props
    const {setShow, setTask, setTitle, notifyDelete} = useTaskManagerContext();

    return <Section customStyle={customStyle}>
        <Row className={'g-0'}>
            <Col xs={"10"}>
                <TaskData title={'Task'} priority={task.priority} data={task.title}/>
            </Col>
            <Col className={'text-end'}>
                <IconButton onClick={() => {
                    setTask(task, setTitle("Wijzig"));
                    setShow(true);
                }}>
                    <BiEdit style={{width: '35px', height: '35px'}}/>
                </IconButton>
                <IconButton onClick={() => {
                    notifyDelete(task)
                }}>
                    <TiDelete style={{width: '35px', height: '35px'}}/>
                </IconButton>
            </Col>
        </Row>
        <TaskData title={'Datum'} data={dBTimeStampToLocaleDateString(task.date)}/>
        <TaskData title={'Om'} data={dbTimeStampToTime(task.date)}/>
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
    }), customStyle: PropTypes.shape({})
};

