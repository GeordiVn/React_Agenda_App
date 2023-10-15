import {Col, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useRef, useState} from "react";

export function TaskNote(props) {
    const {task} = props;
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return <div className={'m-1 text-white rounded-2'} style={{backgroundColor: '#B5CB99'}}>
        <a href={'#'} ref={target}  onClick={e => {
            e.preventDefault();
            setShow(!show)
        }} >
            {task.title}
        </a>
        <TaskOverlay target={target} show={show}/>
    </div>
}


function TaskOverlay(props) {
    const {target, show} = props;
    return <Overlay target={target.current} show={show} placement="right">
        {({
              placement: _placement,
              arrowProps: _arrowProps,
              show: _show,
              popper: _popper,
              hasDoneInitialMeasure: _hasDoneInitialMeasure,
              ...props
          }) => (
            <div{...props}>
                Simple tooltip
            </div>
        )}
    </Overlay>
}
