import {SelectionBar} from "./SelectionBar";
import {DayElement} from "./DayElement";
import {useState} from "react";
import {Section} from "./Section";
import {Col, Row} from "react-bootstrap";
import {addMonths, endOfMonth, getDaysInMonth, lastDayOfMonth, startOfMonth} from "date-fns";
import {forEach, map} from "react-bootstrap/ElementChildren";
import {ButtonCustom} from "./ButtonCustom";

export function CalendarMaand(props) {
    const {tasks} = props;
    const [dateSelected, setDateSelected] = useState(new Date());
    return <div>
        <MonthSelector dateSelected={dateSelected} onDateChanged={setDateSelected}/>
        <Section>
            <DayOrderBar dayNames={dayNames}/>
            <MonthGrid date={dateSelected} tasks={tasks}/>
        </Section>
    </div>
}

function MonthSelector(props) {
    const {dateSelected, onDateChanged} = props
    return <SelectionBar>
        <ButtonCustom title={'Vorige maand'} onClick={() => onDateChanged(addMonths(dateSelected, -1))}/>
        <ButtonCustom title={'Volgende maand'} onClick={() => onDateChanged(addMonths(dateSelected, 1))}/>
        <ButtonCustom title={'Deze maand'} onClick={() => onDateChanged(new Date())}/>
        <p style={{color: 'white'}}>{dateSelected.toLocaleDateString('nl-BE')}</p>
    </SelectionBar>

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
    const start = startOfMonth(date);
    const end = endOfMonth(date)
    let count = dayNameNumbers[start.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]
    const dayCount = getDaysInMonth(start);
    let elements = [];

    //add empty days
    if (count !== 1) {
        for (let i = 0; i < count - 1; i++) {
            elements = [...elements, <DayElement style={{
                backgroundColor: '#d1c7b0',
                color: 'black',
                borderRadius: '10px',
                marginBottom: '5px',
                marginRight: '5px',
                height: '100px'
            }}></DayElement>]
        }
    }
    //add current month days
    for (let i = 1; i < dayCount + 1; i++) {
        elements = [...elements, <DayElement key={i} title={i}></DayElement>];
        if (count === 7) {
            elements = [...elements, <Col xs={12}></Col>]
            count = 0
        }
        count++;
    }
    //add empty days
    if (lastDayOfMonth(date).toLocaleDateString('nl-BE', {weekday: 'long'}).toLowerCase() !== 'zondag') {
        for (let i = 0; i < 7 - dayNameNumbers[end.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]; i++) {
            elements = [...elements, <DayElement style={{
                backgroundColor: '#d1c7b0',
                color: 'black',
                borderRadius: '10px',
                marginBottom: '5px',
                marginRight: '5px',
                height: '100px'
            }}></DayElement>]
        }
    }
    return elements;
}

const dayNames = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'];
const dayNameNumbers = {
    maandag: 1, dinsdag: 2, woensdag: 3, donderdag: 4, vrijdag: 5, zaterdag: 6, zondag: 7
};
const dayNumberNames = {
    1: "Maandag", 2: 'Dinsdag', 3: 'Woensdag', 4: 'Donderdag', 5: 'Vrijdag', 6: 'Zaterdag', 7: 'Zondag'
};
