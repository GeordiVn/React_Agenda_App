import React, {createContext, useCallback, useContext, useMemo, useState} from "react";
import {toast} from "react-toastify";
import {Button, Col, Row} from "react-bootstrap";
import {useTaskManagerContext} from "./taskManagerContext";

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useState("");
    const {deleteTask} = useTaskManagerContext();
    console.log(message);

    const notifyDelete = useCallback((task) => {
        toast.warn(<Row>
            <p>Wil je task met titel {task.title} verwijderen?</p>
            <Col>
                <Button onClick={() => deleteTask(task)}>
                    Ja
                </Button>
            </Col>
            <Col>
                <Button>Nee</Button>
            </Col>


        </Row>, {position: 'top-center'});

    }, [])
    const clearMessage = useCallback(() => {
        setMessage("")
    }, [])
    const api = useMemo(() => (
        {message, setMessage, clearMessage, notifyDelete}
    ), [message, setMessage, clearMessage, notifyDelete]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);