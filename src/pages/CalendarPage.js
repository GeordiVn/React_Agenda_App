import {Col, Container, Row} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";
import {TaskManager} from "../components/TaskManager";
import {useTaskManagerContext} from "../contexts/taskManagerContext";


export function CalendarPage(props) {

    const [dateSelected, setSelectedDate] = useState(new Date());
    const {tasks,setShow, setTitle, newTask} = useTaskManagerContext()
    const [layout, setLayout] = useState(<CalendarWeek dateSelected={dateSelected}
                                                       onDateSelectedChanged={setSelectedDate}
                                                       tasks={tasks}/>);
    return <Container fluid={"md"} className={"p-0  g-0"}>
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarWeek dateSelected={dateSelected}
                                                                         onDateSelectedChanged={setSelectedDate}
                                                                         tasks={tasks}/>)}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarMonth dateSelected={dateSelected}
                                                                          onDateSelectedChanged={setSelectedDate}
                                                                          tasks={tasks}/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout}
                                  onClick={() => setLayout(<CalendarYear dateSelected={dateSelected}
                                                                         onDateSelectedChanged={setSelectedDate}
                                                                         tasks={tasks}/>)}
                                  title={'Jaar'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom title={"Nieuw"} onClick={() => {
                        setTitle("Nieuw");
                        newTask();
                        setShow(true);
                    }}/>
                </Col>
            </Row>
        </OptionBar>
        <TaskManager title={"Nieuw"}/>
        {layout}
    </Container>
}
