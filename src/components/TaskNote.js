import {Col, Modal, Overlay, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useRef, useState} from "react";
import {TaskData} from "./TaskData";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const contentStyle = {background: '#B5CB99', borderRadius: '10px'};
const overlayStyle = {background: 'rgba(223,229,229,0.29)'};
const arrowStyle = {color: '#000'};

export function TaskNote(props) {
    const {task} = props
    const [open, setIsOpen] = useState(false);
    return <div onClick={() => setIsOpen(true)} className={"rounded-2"} style={{backgroundColor:'#B5CB99'}}>
        <a href={"javascript:void(0)"}>
            {task.title}
        </a>
        <TaskPopUp open={open} task={task} onOpenChanged={setIsOpen}/>
    </div>
}


function TaskPopUp(props) {
    const {task, open, onOpenChanged} = props;

    return <Popup onClose={() => onOpenChanged(false)} open={open} arrowStyle={arrowStyle} overlayStyle={overlayStyle}
                  contentStyle={contentStyle}  children={
        <div className={"rounded-2 m-2 p-2"} style={{backgroundColor: '#FCE09B'}}>
            <TaskData title={"Task: "} data={task.title}/>
            <TaskData title={"Datum: "} data={task.date.toDate().toLocaleDateString('nl-BE')}/>
            <TaskData title={"Tijd: "} data={task.date.toDate().toLocaleTimeString()}/>
            <TaskData title={"Omschrijving: "} data={task.description}/>

        </div>
    }/>


}


TaskNote.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })
}

