import {Col, Container, Row} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";
import {AddTask} from "../components/AddTask";


export function CalendarPage(props) {
    const {tasks,collectionRef} = props;
    const [layout, setLayout] = useState(<CalendarWeek tasks={tasks}/>);
    const [dateSelected, setSelectedDate] = useState(new Date());
    const [show,setShow] = useState(false);
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
                    <ButtonCustom title={"Nieuw"} onClick={()=>setShow(true)}/>
                </Col>
            </Row>
        </OptionBar>
        <AddTask collectionRef={collectionRef} title={"Nieuw"} show={show} onShowChanged={setShow}/>
        {layout}
    </Container>
}
