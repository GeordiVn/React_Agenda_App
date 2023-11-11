import {useState} from "react";
import {TaskData} from "./TaskData";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import {IconButton} from "./IconButton";
import {BiEdit} from "react-icons/bi";
import {Col, Row} from "react-bootstrap";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {TiDelete} from "react-icons/ti";


export function TaskNote(props) {
    const {task, tasks, children, customStyle} = props
    const [open, setIsOpen] = useState(false);
    return <button className={"p-0 m-0 text-start text-white border-0 bg-transparent w-100"}  onClick={(event) => {
        event.preventDefault();
        setIsOpen(true);
    }}>
        {children}
        <TaskPopUp open={open} task={task} tasks={tasks} onOpenChanged={setIsOpen} customStyle={customStyle}/>
    </button>
}

function TaskPopUp(props) {
    const {task, tasks, open, onOpenChanged, customStyle} = props;
    return <Popup onClose={() => onOpenChanged(false)} open={open} arrowStyle={customStyle.taskNote.arrowStyle}
                  overlayStyle={customStyle.taskNote.overlayStyle}
                  contentStyle={customStyle.taskNote.contentStyle}
                  children={task ? <TaskPopUpData task={task} customStyle={customStyle}/> : tasks.map(task =>
                      <TaskPopUpData key={task.id}
                                     task={task} customStyle={customStyle}/>)}/>
}

function TaskPopUpData(props) {
    const {setTask, setShow, setTitle, notifyDelete} = useTaskManagerContext()
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

TaskPopUpData.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    }),
    customStyle: PropTypes.shape({})
};

TaskNote.propTypes = {
    tasks: PropTypes.array,
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })
};

TaskPopUp.propTypes = {
    colorPallet: PropTypes.shape({})
};

