import {Button, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useState} from "react";
import {ButtonCustom} from "./ButtonCustom";
import {getUnixTime} from "date-fns"
import {addDoc} from "firebase/firestore";
import {getDay, getMonth, getTime, getYear} from "date-fns";
import {dbTimeStampToTime} from "../utilities/db_time_date_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext";

export function TaskManager() {
    const {title, editTask, storeTaskChanges, saveTask, show, setShow} = useTaskManagerContext();

    return (<Modal show={!!show} onHide={() => setShow(false)}>
        <ModalHeader>
            <h5>{title}</h5>
            <Button className={"btn-close"} onClick={() => setShow(false)}></Button>
        </ModalHeader>
        <ModalBody>
            <Form>
                <Form.Label>Title</Form.Label>
                <Form.Control required={true} value={editTask.title}
                              onChange={(e) => storeTaskChanges({...editTask, title: e.target.value})}/>
                <Form.Label>Prioriteit</Form.Label>
                <Form.Select value={editTask.priority}
                             onChange={(e) => storeTaskChanges({...editTask, priority: Number(e.target.value)})}>
                    <option value={0}>Laag</option>
                    <option value={1}>Gemiddeld</option>
                    <option value={2}>Hoog</option>
                </Form.Select>


                <Form.Label>Datum</Form.Label>
                <Form.Control required={true} type={"date"} value={editTask.date.date}
                              onChange={(e) => storeTaskChanges({
                                  ...editTask, date: {date: e.target.value, time: editTask.date.time}
                              })}></Form.Control>
                <Form.Label>Tijd</Form.Label>
                <Form.Control required={true} type={"time"} value={editTask.date.time}
                              onChange={(e) => storeTaskChanges({
                                  ...editTask, date: {date: editTask.date.date, time: e.target.value}
                              })}></Form.Control>


                <Form.Label>Omschrijving</Form.Label>
                <Form.Control as={"textarea"} rows={3} value={editTask.description}
                              onChange={(e) => storeTaskChanges({...editTask, description: e.target.value})}/>
                <Form.Label>Terugkomend</Form.Label>
                <Form.Switch value={editTask.repeat.toString()}
                             onChange={(e) => storeTaskChanges({...editTask, repeat: e.target.checked})}/>

            </Form>
            <div className={"text-end mt-2"}>
                <ButtonCustom title={"Save"} onClick={async () => {
                    saveTask(editTask);
                    setShow(false);
                }}/>
            </div>
        </ModalBody>
    </Modal>);
}

