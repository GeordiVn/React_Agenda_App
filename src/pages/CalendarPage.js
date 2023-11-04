import {Col, Container, Row, Form} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";
import {TaskManager} from "../components/TaskManager";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useLocalStorage} from "@uidotdev/usehooks";


export function CalendarPage(props) {
    const {tasks, setShow, setTitle, newTask} = useTaskManagerContext()
    const [layout, setLayout] = useState(<CalendarWeek tasks={tasks}/>);
    const [colorScheme, setColorScheme] = useLocalStorage("defaultColorScheme", 0);
    return <Container fluid={"md"} className={"p-0  g-0"}>
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarWeek tasks={tasks}/>)}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarMonth tasks={tasks}/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarYear tasks={tasks}/>)}
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
                    <Form.Select defaultValue={colorScheme} onChange={(event) => setColorScheme(Number(event.target.value))}>
                        <option value={0}>Lightmode</option>
                        <option value={1}>Dark mode</option>
                    </Form.Select>
                </Col>
            </Row>
        </OptionBar>
        <TaskManager/>
        {layout}
    </Container>
}
