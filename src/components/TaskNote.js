import {Col, Modal, Overlay, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {useRef, useState} from "react";
import {TaskData} from "./TaskData";

export function TaskNote(props) {
    const {task} = props;
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return <a href={"#"} ref={target} onClick={(e) => {
        e.preventDefault();
        setShow(!show);
    }}>
            <p style={{backgroundColor: '#B5CB99'}} className={"text-white rounded-2 me-1 ms-1 p-1"}>
                {task.title}
            </p>
            <TaskOverlay target={target} onShowChanged={setShow} task={task} show={show}/>
        </a>

}


function TaskOverlay(props) {
    const {task, target, show, onShowChanged} = props;
    return <Overlay target={target.current} show={show} placement="auto">
        {({
              placement: _placement,
              arrowProps: _arrowProps,
              show: _show,
              popper: _popper,
              hasDoneInitialMeasure: _hasDoneInitialMeasure,
              ...props
          }) => (
            <div{...props}>
                <Row onClick={() => onShowChanged(false)} className={"bg-dark text-white rounded-2 p-3"}>

                    <Col xs={12}><TaskData title={"Task"} data={task.title} priority={task.priority}/></Col>

                    <Col xs={12}>
                        <TaskData title={"Date"} data={task.date.toDate().toLocaleDateString('nl-BE')} priority={0}/>
                        <TaskData title={"Om"} data={task.date.toDate().toLocaleTimeString('nl-BE')}/>
                        <TaskData title={"Omschrijving"} data={task.description} priority={0}/>
                    </Col>
                </Row>
            </div>
        )}
    </Overlay>
}
