import {SelectionBar} from "./SelectionBar";
import {DayElement} from "./DayElement";
import {useState} from "react";
import {Section} from "./Section";
import {Col, Row} from "react-bootstrap";
import {addMonths, endOfMonth, getDaysInMonth, lastDayOfMonth, setDay, startOfMonth} from "date-fns";
import {ButtonCustom} from "./ButtonCustom";
import {TaskNote} from "./TaskNote";
import PropTypes from "prop-types";
import {dayNameNumbers, dayNames} from "../data/data";
import {
    dayMonthIsToday,
    taskIsCurrentDay,
    taskIsCurrentDayAndIsRepeat,
} from "../utilities/calendar_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext";

export function CalendarMonth() {
    const {tasks} = useTaskManagerContext();
    const [dateSelected, setDateSelected] = useState(new Date());
    return <div>
        <MonthSelector dateSelected={dateSelected} onDateChanged={setDateSelected}/>
        <Section>
            <DayOrderBar dayNames={dayNames}/>
            <MonthGrid dateSelected={dateSelected} tasks={tasks}/>
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
    const {dateSelected, tasks} = props;
    const start = startOfMonth(dateSelected);
    const end = endOfMonth(dateSelected)
    const dayCount = getDaysInMonth(start);

    let elements = [];
    let count = dayNameNumbers[start.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]
    let keyCount = 0;

    //add empty days
    if (count !== 1) {
        for (let i = 0; i < count - 1; i++) {
            elements = [...elements, <DayElement key={keyCount} style={{
                backgroundColor: '#d1c7b0',
                color: 'black',
                borderRadius: '10px',
                marginBottom: '5px',
                marginRight: '5px',
                height: '150px'
            }}></DayElement>]
            keyCount++;
        }
    }
    //add current month days
    for (let day = 1; day < dayCount + 1; day++) {
        elements = [...elements, <DayElement key={keyCount} today={dayMonthIsToday(dateSelected, day)} title={day}>
            {[...tasks].filter(task => taskIsCurrentDay(task, day, dateSelected) || taskIsCurrentDayAndIsRepeat(task, day, dateSelected))
                .map((task, index) =>
                    <TaskNote key={keyCount * index} task={task}>
                        <div className={"rounded-2"} style={{backgroundColor: '#B5CB99'}}>
                            <p>
                                {task.title}
                            </p>
                        </div>
                    </TaskNote>)}
        </DayElement>];
        keyCount++;
        if (count === 7) {
            elements = [...elements, <Col key={keyCount} xs={12}></Col>]
            count = 0
            keyCount++;
        }
        count++;

    }
    //add empty days
    if (lastDayOfMonth(dateSelected).toLocaleDateString('nl-BE', {weekday: 'long'}).toLowerCase() !== 'zondag') {
        for (let i = 0; i < 7 - dayNameNumbers[end.toLocaleDateString('ng-BE', {weekday: 'long'}).toLowerCase()]; i++) {
            elements = [...elements, <DayElement key={keyCount} style={{
                backgroundColor: '#d1c7b0',
                color: 'black',
                borderRadius: '10px',
                marginBottom: '5px',
                marginRight: '5px',
                height: '150px'
            }}></DayElement>]
            keyCount++;
        }
    }
    return elements;
}


MonthGrid.propTypes = {
    tasks: PropTypes.array, dateSelected: PropTypes.instanceOf(Date)
}

