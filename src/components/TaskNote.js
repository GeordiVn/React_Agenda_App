import {useState} from "react";
import {TaskData} from "./TaskData";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {IconButton} from "./IconButton";
import {BiEdit} from "react-icons/bi";
import {Col, Row} from "react-bootstrap";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import {TiDelete} from "react-icons/ti";
import {useMessageContext} from "../contexts/messageContext";

export function TaskNote(props) {
    const {task, tasks, children, customStyle} = props
    const [open, setIsOpen] = useState(false);
    return <a href={"#"} onClick={(event) => {
        event.preventDefault();
        setIsOpen(true);
    }}>
        {children}
        <TaskPopUp open={open} task={task} tasks={tasks} onOpenChanged={setIsOpen} customStyle={customStyle}/>
    </a>
}

function TaskPopUp(props) {
    const {task, tasks, open, onOpenChanged, customStyle} = props;
    const {colorPallet} = useColorSchemeContext();
    return <Popup onClose={() => onOpenChanged(false)} open={open} arrowStyle={colorPallet.taskNote.arrowStyle}
                  overlayStyle={colorPallet.taskNote.overlayStyle}
                  contentStyle={colorPallet.taskNote.contentStyle}
                  children={task ? <TaskPopUpData task={task} customStyle={customStyle}/> : tasks.map(task =>
                      <TaskPopUpData key={task.id}
                                     task={task} customStyle={customStyle}/>)}/>
}

function TaskPopUpData(props) {
    const {setTask, setShow, setTitle, deleteTask} = useTaskManagerContext()
    const {notifyDelete} = useMessageContext();
    const {task, customStyle} = props;
    return <div className={"rounded-2 m-2 p-2"} style={customStyle.taskNoteBackGround}>
        <Row>
            <Col xs={10}>
                <TaskData title={"Task: "} data={task.title}/>
            </Col>
            <Col className={"text-end"}>
                <IconButton onClick={() => {
                    setTitle("Wijzig");
                    setShow(true);
                    setTask(task);
                }}>
                    <BiEdit style={{width: '35px', height: '35px'}}/>
                </IconButton>
                <IconButton onClick={() => {
                    notifyDelete(task);
                }}>
                    <TiDelete style={{width: '35px', height: '35px'}}/>
                </IconButton>
            </Col>
        </Row>

        <TaskData title={"Datum: "} data={task.date.toDate().toLocaleDateString('nl-BE')}/>
        <TaskData title={"Tijd: "} data={task.date.toDate().toLocaleTimeString()}/>
        <TaskData title={"Omschrijving: "} data={task.description}/>
    </div>
}

TaskNote.propTypes = {
    tasks: PropTypes.array,
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })
}

