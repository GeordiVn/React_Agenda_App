import {SelectionBar} from "./SelectionBar.jsx";
import {DayElement} from "./DayElement.jsx";
import {useState} from "react";
import {Section} from "./Section.jsx";
import {Col, Row} from "react-bootstrap";
import {addMonths, endOfMonth, startOfMonth} from "date-fns";
import {ButtonCustom} from "./ButtonCustom.jsx";
import {TaskNote} from "./TaskNote.jsx";
import PropTypes from "prop-types";
import {DAY_NAMES_SHORT, MONTH_NUMBER} from "../data/data.jsx";
import {
    addCurrentMonthDays,
    addEmptyDaysOfNextMonth,
    addEmptyDaysOfPrevMonth,
    dayMonthIsToday,
    taskIsCurrentDay,
    taskIsCurrentDayAndIsRepeat,
} from "../utilities/calendar_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext.jsx";
import {useColorSchemeContext} from "../contexts/colorSchemeContext.jsx";


export function CalendarMonth() {
    const [dateSelected, setDateSelected] = useState(new Date());
    const {tasks} = useTaskManagerContext();
    const {colorPallet} = useColorSchemeContext()

    return <div>
        <MonthSelector dateSelected={dateSelected} onDateChanged={setDateSelected} customStyle={colorPallet}/>
        <Section customStyle={colorPallet}>
            <DayOrderBar dayNames={DAY_NAMES_SHORT}/>
            <MonthGrid dateSelected={dateSelected} tasks={tasks} customStyle={colorPallet}/>
        </Section>
    </div>
}

function MonthSelector(props) {
    const {dateSelected, onDateChanged, customStyle} = props
    return <SelectionBar customStyle={customStyle}>
        <ButtonCustom title={'Vorige maand'} onClick={() => onDateChanged(addMonths(dateSelected, -1))}/>
        <ButtonCustom title={'Volgende maand'} onClick={() => onDateChanged(addMonths(dateSelected, 1))}/>
        <ButtonCustom title={'Deze maand'} onClick={() => onDateChanged(new Date())}/>
        <div className={"text-center"}>
            <h5 style={{color: 'white'}}>{MONTH_NUMBER[dateSelected.getMonth()]} {dateSelected.getFullYear()}</h5>
        </div>
    </SelectionBar>

}

function DayOrderBar(props) {
    const {dayNames} = props;
    return <Col xs={12}>
        <Row>
            <>
                {dayNames.map((dayName, index) => <DayName key={index} dayName={dayName}/>)}
            </>
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
    const {dateSelected, tasks, customStyle} = props;
    const startDate = startOfMonth(dateSelected);
    const endDate = endOfMonth(dateSelected);

    return <>
        <EmptyDaysOfPrevMonth startDay={startDate} customStyle={customStyle}/>
        <CurrentMonthDays startDay={startDate} tasks={tasks} dateSelected={dateSelected} customStyle={customStyle}/>
        <EmptyDaysOfNextMonth endDay={endDate} customStyle={customStyle}/>
    </>

}

function EmptyDaysOfPrevMonth(props) {
    const {startDay, customStyle} = props;
    return <>
        {addEmptyDaysOfPrevMonth(startDay).map((number, index) => <DayElement key={index}
                                                                              style={customStyle.monthDayElementEmpty}/>)}
    </>
}

function CurrentMonthDays(props) {
    const {startDay, tasks, dateSelected, customStyle} = props;
    return <>
        {addCurrentMonthDays(startDay).map((type, index) => type !== "newrow" ?
            <DayElement key={index} today={dayMonthIsToday(dateSelected, Number(type))} title={type.toString()}>
                {[...tasks].filter(task => taskIsCurrentDay(task, Number(type), dateSelected) || taskIsCurrentDayAndIsRepeat(task, Number(type), dateSelected))
                    .map((task, index) => <TaskNote key={index * 100} customStyle={customStyle} task={task}>
                        <div className={"rounded-2"} style={customStyle.monthTaskInfo}>
                            <p>
                                {task.title}
                            </p>
                        </div>
                    </TaskNote>)}
            </DayElement> : <Col key={index} xs={12}></Col>)}
    </>
}

function EmptyDaysOfNextMonth(props) {
    const {endDay, dateSelected, customStyle} = props
    return <>
        {addEmptyDaysOfNextMonth(endDay, dateSelected).map((number, index) => <DayElement key={index}
                                                                                          style={customStyle.monthDayElementEmpty}></DayElement>)}
    </>
}

EmptyDaysOfPrevMonth.propTypes = {
    startDay: PropTypes.instanceOf(Date), customStyle: PropTypes.object
};
EmptyDaysOfPrevMonth.propTypes = {
    endDay: PropTypes.instanceOf(Date), dateSelected: PropTypes.instanceOf(Date), customStyle: PropTypes.object
};
CurrentMonthDays.propTypes = {
    startDay: PropTypes.instanceOf(Date), tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })), dateSelected: PropTypes.instanceOf(Date), customStyle: PropTypes.object
};

MonthSelector.propTypes = {
    dateSelected: PropTypes.instanceOf(Date), onDateChanged: PropTypes.func
};

DayName.propTypes = {
    dayName: PropTypes.string
};

DayOrderBar.propTypes = {
    dayNames: PropTypes.arrayOf(PropTypes.string)
};

MonthGrid.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })), dateSelected: PropTypes.instanceOf(Date), customStyle: PropTypes.shape({})
}

