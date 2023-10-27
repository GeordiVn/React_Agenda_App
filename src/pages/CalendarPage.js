import {Col, Container, Row} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {CalendarYear} from "../components/CalendarYear";


export function CalendarPage(props) {
    const {tasks} = props;
    const [layout, setLayout] = useState(<CalendarWeek tasks={tasks}/>);
    return <Container fluid={"md"} className={"p-0  g-0"}>
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarWeek tasks={tasks}/>)}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarMonth tasks={tasks}/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarYear tasks={tasks}/>)}
                                  title={'Jaar'}/>
                </Col>
            </Row>
        </OptionBar>
        {layout}
    </Container>
}
