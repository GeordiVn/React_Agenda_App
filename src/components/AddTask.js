import {Button, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useState} from "react";
import {ButtonCustom} from "./ButtonCustom";

export function AddTask(props) {
    const {title, show, onShowChanged} = props;
    const [task, setTask] = useState();
    return (
        <Modal show={show} onHide={() => onShowChanged(!show)}>
            <ModalHeader>
                <h5>{title}</h5>
                <Button className={"btn-close"} onClick={() => onShowChanged(false)}></Button>

            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Label>Title</Form.Label>
                    <Form.Control/>
                    <Form.Label>Datum</Form.Label>
                    <Form.Control type={"date"}></Form.Control>
                    <Form.Label>Tijd</Form.Label>
                    <Form.Control type={"time"}></Form.Control>
                    <Form.Label>Omschrijving</Form.Label>
                    <Form.Control as={"textarea"} rows={3}/>
                    <div className={"text-end mt-2"}>
                        <ButtonCustom title={"Save"}/>
                    </div>

                </Form>
            </ModalBody>
        </Modal>
    );
}