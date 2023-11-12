import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {addDoc, deleteDoc, collection, GeoPoint, query, updateDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {toast} from "react-toastify";
import {Button, Col, Row} from "react-bootstrap";
import {useColorSchemeContext} from "./colorSchemeContext";
import {toDateInputValue} from "../utilities/db_time_date_utilities";
import {NEW_TASK} from "../data/data";


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
            ...task, date: {date: toDateInputValue(task.date.toDate()), time: task.date.toDate().toLocaleTimeString()}
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

export const useTaskManagerContext = () => useContext(TaskManagerContext);