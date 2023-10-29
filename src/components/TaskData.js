import {TaskNote} from "./TaskNote";
import PropTypes from "prop-types";

export function TaskData(props) {
    const {title, data, priority} = props;
    return <p><span style={{fontSize: 'large', fontWeight: 'bold', color: priority? priorityColor[priority]:"white"}}>{title}: </span>{data}</p>
}

TaskData.propTypes={
    title:PropTypes.string,
    data:PropTypes.string,
    priority:PropTypes.string
}
const priorityColor = {
    0: 'white', 1: 'orange', 2: 'red'
}
