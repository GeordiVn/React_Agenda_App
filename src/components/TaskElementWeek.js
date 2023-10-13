import {Row} from "react-bootstrap";

export function TaskElementWeek(props)
{
    const {task}=props

    return <Row className={'g-0'}>
        <p>{task.title}</p>
    </Row>
}
