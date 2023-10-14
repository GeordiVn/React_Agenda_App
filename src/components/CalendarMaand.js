import {SelectionBar} from "./SelectionBar";
import {DayElement} from "./DayElement";
import {useState} from "react";
import {Section} from "./Section";
import {Col, Row} from "react-bootstrap";

export function CalendarMaand(props) {
    const {tasks} = props;
    const [dateSelected, setDateSelected] = useState(new Date());
    return <div>
        <SelectionBar></SelectionBar>
        <Section>
            <DayOrderBar dayNames={dayNames}/>

        </Section>
    </div>
}

function DayOrderBar(props) {
    const {dayNames} = props;
    return <Col xs={12}>
        <Row>
            {dayNames.map((dayName, index) => <DayName key={index} dayName={dayName}/>)}

        </Row>
    </Col>
}

function DayName(props) {
    const {dayName} = props;
    return <Col className={'text-center'}>
        <p>{dayName}</p>
    </Col>
}

function MonthGrid(props) {
    const {date, tasks} = props;





}

const dayNames = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
