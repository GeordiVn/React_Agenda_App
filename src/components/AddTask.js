import {Button, Form, Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useState} from "react";
import {ButtonCustom} from "./ButtonCustom";
import {getUnixTime} from "date-fns"
import {addDoc} from "firebase/firestore";
import {getDay, getMonth, getTime, getYear} from "date-fns";

export function AddTask(props) {
    const {title, show, onShowChanged, collectionRef} = props;
    const [newTask, setNewTask] = useState({
        title: "",
        priority: 0,
        date: {date: "", time: ""},
        description: "",
        repeat: false,
        location: {_long: 0, _lat: 0}
    });
    return (<Modal show={show} onHide={() => onShowChanged(!show)}>
            <ModalHeader>
                <h5>{title}</h5>
                <Button className={"btn-close"} onClick={() => onShowChanged(false)}></Button>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required={true} value={newTask.title}
                                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}/>
                    <Form.Label>Prioriteit</Form.Label>
                    <Form.Select value={newTask.priority}
                                 onChange={(e) => setNewTask({...newTask, priority: Number(e.target.value)})}>
                        <option value={0}>Laag</option>
                        <option value={1}>Gemiddeld</option>
                        <option value={2}>Hoog</option>
                    </Form.Select>


                    <Form.Label>Datum</Form.Label>
                    <Form.Control required={true} type={"date"} value={newTask.date.date}
                                  onChange={(e) => setNewTask({
                                      ...newTask, date: {date: e.target.value, time: newTask.date.time}
                                  })}></Form.Control>
                    <Form.Label>Tijd</Form.Label>
                    <Form.Control required={true} type={"time"} value={newTask.date.time} onChange={(e) => setNewTask({
                        ...newTask, date: {date: newTask.date.date, time: e.target.value}
                    })}></Form.Control>


                    <Form.Label>Omschrijving</Form.Label>
                    <Form.Control as={"textarea"} rows={3} value={newTask.description}
                                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}/>
                    <Form.Label>Terugkomend</Form.Label>
                    <Form.Switch value={newTask.repeat.toString()}
                                 onChange={(e) => setNewTask({...newTask, repeat: e.target.checked})}/>

                </Form>
                <div className={"text-end mt-2"}>
                    <ButtonCustom title={"Save"} onClick={ async () => {
                       await saveNewTask(collectionRef, newTask);
                        onShowChanged(false);
                    }}/>
                </div>
            </ModalBody>
        </Modal>);
}

async function saveNewTask(collectionRef, task) {
    const taskForSave = {...task, date: new Date(task.date.date + "T" + task.date.time + ":00")}
    try {
        console.log(taskForSave);
        await addDoc(collectionRef, taskForSave);
    } catch (e) {
        console.log(e);
        console.log("Er is iets mis gegaan tijdens oplagen nieuwe task");
    }
}