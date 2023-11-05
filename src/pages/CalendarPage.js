import {Col, Container, Row, Form} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";
import {TaskManager} from "../components/TaskManager";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import {COLOR_SCHEME} from "../data/data";


export function CalendarPage() {
    const {setShow, setTitle, newTask} = useTaskManagerContext()
    const {colorScheme, changeColorPallet} = useColorSchemeContext();
    const [layout, setLayout] = useState(<CalendarWeek/>);

    return <Container fluid={"md"} className={"p-0  g-0"}>
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => setLayout(<CalendarWeek/>)}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => setLayout(<CalendarMonth/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onClick={() => setLayout(<CalendarYear/>)}
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
                    <Form.Select defaultValue={Number(colorScheme)} onChange={e => changeColorPallet(Number(e.target.value))}>
                        <option value={0}>Light mode</option>
                        <option value={1}>Dark mode</option>
                    </Form.Select>
                </Col>
            </Row>
        </OptionBar>
        <TaskManager/>
        {layout}
    </Container>
}
