import PropTypes from "prop-types";
import {PRIORITY_COLOR} from "../data/data";

export function TaskData(props) {
    const {title, data, priority} = props;
    return <p><span style={{
        fontSize: 'large',
        fontWeight: 'bold',
        color: priority ? PRIORITY_COLOR[priority] : "white"
    }}>{title}: </span>{data}</p>
}

TaskData.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    priority: PropTypes.number
}

