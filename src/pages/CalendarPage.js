import {Col, Container, Row, Form} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import React, {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";
import {TaskManager} from "../components/TaskManager";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import {ToastContainer} from "react-toastify";
import {useLocalStorage} from "@uidotdev/usehooks";

export function CalendarPage() {
    const LAYOUT_SELECT={
        0:<CalendarWeek/>,
        1:<CalendarMonth/>,
        2:<CalendarYear/>
    }
    const {setShow, setTitle, newTask} = useTaskManagerContext()
    const {colorScheme, changeColorPallet} = useColorSchemeContext();
    const [lastLayout,setLastLayout] = useLocalStorage("lastLayout",0)
    const [layout, setLayout] = useState(LAYOUT_SELECT[lastLayout]);


    return <Container fluid={"md"} className={"p-0  g-0"}>
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
                    <Form.Select  defaultValue={Number(colorScheme)}
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
        {layout}
    </Container>
}
