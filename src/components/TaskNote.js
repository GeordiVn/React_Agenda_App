import {useState} from "react";
import {TaskData} from "./TaskData";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

const contentStyle = {background: '#B5CB99', borderRadius: '10px'};
const overlayStyle = {background: 'rgba(223,229,229,0.29)'};
const arrowStyle = {color: '#000'};

export function TaskNote(props) {
    const {task, tasks,children} = props
    const [open, setIsOpen] = useState(false);
    return <a href={"#"} onClick={(event) => {
        event.preventDefault();
        setIsOpen(true);
    }}>
        {children}
        <TaskPopUp open={open} task={task} tasks={tasks} onOpenChanged={setIsOpen}/>
    </a>
}


function TaskPopUp(props) {
    const {task, tasks, open, onOpenChanged} = props;

    return <Popup onClose={() => onOpenChanged(false)} open={open} arrowStyle={arrowStyle} overlayStyle={overlayStyle}
                  contentStyle={contentStyle}
                  children={task ? <TaskPopUpData task={task}/> : tasks.map(task => <TaskPopUpData task={task}/>)}/>
}

function TaskPopUpData(props)
{
    const {task} = props;
    return <div className={"rounded-2 m-2 p-2"} style={{backgroundColor: '#FCE09B'}}>
        <TaskData title={"Task: "} data={task.title}/>
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

