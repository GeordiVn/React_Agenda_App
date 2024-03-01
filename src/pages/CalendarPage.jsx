import {Col, Container, Row, Form} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar.jsx";
import {ButtonCustom} from "../components/ButtonCustom.jsx";
import React, {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek.jsx";
import {CalendarMonth} from "../components/CalendarMonth.jsx";
import {CalendarYear} from "../components/CalendarYear.jsx";
import {TaskManager} from "../components/TaskManager.jsx";
import {useTaskManagerContext} from "../contexts/taskManagerContext.jsx";
import {useColorSchemeContext} from "../contexts/colorSchemeContext.jsx";
import {ToastContainer} from "react-toastify";
import {useLocalStorage} from "@uidotdev/usehooks";
import {LAYOUT_SELECT} from "../data/data.jsx";

export function CalendarPage() {

    const {setShow, setTitle, newTask} = useTaskManagerContext()
    const {colorScheme, changeColorPallet} = useColorSchemeContext();
    const [lastLayout, setLastLayout] = useLocalStorage("lastLayout", 0)
    const [layout, setLayout] = useState(LAYOUT_SELECT[lastLayout]);


    return <Container fluid={"md"} className={"g-0"}>
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => {
                        setLayout(<CalendarWeek/>);
                        setLastLayout(0);
                    }}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => {
                        setLayout(<CalendarMonth/>);
                        setLastLayout(1);
                    }}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => {
                        setLayout(<CalendarYear/>);
                        setLastLayout(2);
                    }}
                                  title={'Jaar'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom title={"Nieuw"} onClick={() => {
                        setTitle("Nieuw");
                        newTask();
                        setShow(true);
                    }}/>
                </Col>
                <Col xs={"auto"}>
                    <Form.Select defaultValue={Number(colorScheme)}
                                 onChange={e => changeColorPallet(Number(e.target.value))}>
                        <option value={0}>Light mode</option>
                        <option value={1}>Dark mode</option>
                        <option value={2}>Discord mode</option>
                    </Form.Select>
                </Col>
            </Row>
            <ToastContainer/>
        </OptionBar>
        <TaskManager/>
        <>
            {layout}
        </>
    </Container>
}
