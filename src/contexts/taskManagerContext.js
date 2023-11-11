import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {addDoc, deleteDoc, collection, GeoPoint, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {toast} from "react-toastify";
import {Button, Col, Row} from "react-bootstrap";
import {useColorSchemeContext} from "./colorSchemeContext";


const TaskManagerContext = createContext();

const taskConverter = {
    toFirestore: function (dataInApp) {
        return {
            title: dataInApp.title,
            date: dataInApp.date,
            description: dataInApp.description,
            location: new GeoPoint(dataInApp.location._lat, dataInApp.location._long),
            repeat: Boolean(dataInApp.repeat),
            priority: Number(dataInApp.priority)
        };
    }, fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }

}

export function TaskManagerProvider(props) {
    const collectionRef = useMemo(() => collection(firestoreDB, 'tasks').withConverter(taskConverter), []);
    const queryRef = useMemo(() => query(collectionRef), [collectionRef]);
    const [tasks, loading] = useCollectionData(queryRef);
    const [editTask, setEditTask] = useState(NEW_TASK);
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);
    const {colorPallet} = useColorSchemeContext();

    const clearEditTask = useCallback(() => {
        setEditTask(NEW_TASK);
    }, [])
    const newTask = useCallback(() => {
        setEditTask(NEW_TASK);
    }, [])
    const storeTaskChanges = useCallback((task) => {
        setEditTask(task)
    }, [])
    const setTask = useCallback((task) => {
        setEditTask({
            ...task, date: {date: task.date.toDate().toDateInputValue(), time: task.date.toDate().toLocaleTimeString()}
        })
    }, [])
    const deleteTask = useCallback(async (task) => {
        try {
            await deleteDoc(task.ref).then(() => toast("Task verwijderd!"));
        } catch {
            toast.warning("Er ging iets mis bij het verwijderen!");
        }

    }, [])
    const notifyDelete = useCallback((task) => {
        toast.warn(
            <div>
                <Row>
                    <p>Wil je task met titel {task.title} verwijderen?</p>
                    <Col>
                        <Button onClick={() => deleteTask(task)}>
                            Ja
                        </Button>
                    </Col>
                    <Col>
                        <Button>Nee</Button>
                    </Col>
                </Row>
            </div>
            , {position: 'top-center', style: colorPallet.toastStyle});

    }, [colorPallet.toastStyle, deleteTask])

    const saveTask = useCallback(async (task) => {
        const taskForSave = {...task, date: new Date(task.date.date + "T" + task.date.time)}
        try {
            console.log(taskForSave);
            task.ref ?
                await updateDoc(task.ref, taskForSave).then(() => toast.info("Wijzigingen opgeslagen!")) :
                await addDoc(collectionRef, taskForSave).then(() => toast.info("Nieuwe task toegevoegd!"));
        } catch {
            toast.warning("Er ging iets mis bij het opslagen!");
        }
    }, [collectionRef])

    const api = useMemo(() => ({
        tasks,
        clearEditTask,
        editTask,
        newTask,
        show,
        setShow,
        storeTaskChanges,
        title,
        setTask,
        setTitle,
        saveTask,
        deleteTask,
        notifyDelete
    }), [tasks, clearEditTask, editTask, setTask, newTask, storeTaskChanges, show, setShow, title, setTitle, saveTask, deleteTask, notifyDelete]);

    return <TaskManagerContext.Provider value={api}>
        {loading ? <></> : props.children}
    </TaskManagerContext.Provider>
}

Date.prototype.toDateInputValue = (function () {
    const local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
const NEW_TASK = {
    title: "",
    priority: 0,
    date: {date: new Date().toDateInputValue(), time: "00:00"},
    description: "",
    repeat: false,
    location: {_long: 0, _lat: 0}
}
export const useTaskManagerContext = () => useContext(TaskManagerContext);