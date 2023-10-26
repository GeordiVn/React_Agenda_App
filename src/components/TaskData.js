export function TaskData(props) {
    const {title, data, priority} = props;
    return <p><span style={{fontSize: 'large', fontWeight: 'bold', color: priority? priorityColor[priority]:"white"}}>{title}: </span>{data}</p>
}
const priorityColor = {
    0: 'white', 1: 'orange', 2: 'red'
}
