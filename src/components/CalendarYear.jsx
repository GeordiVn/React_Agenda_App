import {Section} from "./Section.jsx";
import {SelectionBar} from "./SelectionBar.jsx";
import {useState} from "react";
import {Col} from "react-bootstrap";
import {addYears, getDaysInMonth} from "date-fns";
import {ButtonCustom} from "./ButtonCustom.jsx";
import {TaskNote} from "./TaskNote.jsx";
import {taskIsCurrentDay, taskIsCurrentDayAndIsRepeat} from "../utilities/calendar_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext.jsx";
import {useColorSchemeContext} from "../contexts/colorSchemeContext.jsx";
import {MONTHS_IN_YEAR} from "../data/data.jsx";
import PropTypes from "prop-types";

export function CalendarYear() {
    const [dateSelected, setDateSelected] = useState(new Date(new Date().getFullYear(), 0, 1));
    const {tasks} = useTaskManagerContext();
    const {colorPallet} = useColorSchemeContext();
    return <>
        <YearSelector dateSelected={dateSelected} onDateSelectedChanged={setDateSelected} customStyle={colorPallet}/>
        <Section customStyle={colorPallet}>
            {MONTHS_IN_YEAR.map((month, index) => <MonthColumn key={month.number}
                                                               tasks={tasks}
                                                               month={month}
                                                               customStyle={colorPallet}
                                                               dateSelected={new Date(dateSelected.setMonth(month.number))}/>)}
        </Section>
    </>
}

function YearSelector(props) {
    const {dateSelected, onDateSelectedChanged, customStyle} = props;
    return <SelectionBar customStyle={customStyle}>
        <ButtonCustom onClick={() => onDateSelectedChanged(addYears(dateSelected, -1))} title={"Vorig jaar"}/>
        <ButtonCustom onClick={() => onDateSelectedChanged(addYears(dateSelected, 1))} title={"Volgend jaar"}/>
        <ButtonCustom onClick={() => onDateSelectedChanged(new Date())} title={"Dit jaar"}/>
        <div className={"text-center"}>
            <h5 style={{color: 'white'}}>{dateSelected.getFullYear()}</h5>
        </div>
    </SelectionBar>
}

function MonthColumn(props) {
    const {dateSelected, tasks, month, customStyle} = props;
    return <Col xs={4} md={3} lg={2} className={"p-2"}>
        <div className={"rounded-2 mb-3 p-2"} style={customStyle.monthColumnStyle}>
            <h6 className={"text-center"}>{month.month}</h6>
            <DaysForMonth dateSelected={dateSelected} tasks={tasks} customStyle={customStyle}/>
        </div>
    </Col>
}

function DayForMonth(props) {
    const {title, tasks, customStyle} = props;
    return <div>
        {!tasks.length > 0 ? <strong>{title}</strong> : <TaskNote tasks={tasks} customStyle={customStyle}>
            <div className={"my-1"} style={customStyle.dayForMonth}>
                <strong>{title}<span
                    className={"ms-3 text-white"}>{tasks.length < 2 ? tasks.length + " Item" : tasks.length + " Items"}</span></strong>
            </div>
        </TaskNote>}
    </div>
}

function DaysForMonth(props) {
    const {dateSelected, tasks, customStyle} = props;
    const daysInMonth = getDaysInMonth(dateSelected);
    let daysMonthArray = [];
    for (let day = 1; day < daysInMonth + 1; day++) {
        daysMonthArray = [[...daysMonthArray],
            <DayForMonth key={day * dateSelected.getMonth} title={day} customStyle={customStyle}
                         tasks={tasks.filter(task => taskIsCurrentDay(task, day, dateSelected) || taskIsCurrentDayAndIsRepeat(task, day, dateSelected))}/>]
    }
    return <div>
        {daysMonthArray}
    </div>;
}

YearSelector.propTypes = {
    dateSelected: PropTypes.instanceOf(Date), onDateSelectedChanged: PropTypes.func
};

MonthColumn.propTypes = {
    dateSelected: PropTypes.instanceOf(Date), tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })), month: PropTypes.shape({
        number: PropTypes.number, month: PropTypes.string
    }), customStyle: PropTypes.shape({})
};

DayForMonth.protpTypes = {
    title: PropTypes.string, tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })), customStyle: PropTypes.shape({})
};

DaysForMonth.propTypes = {
    dateSelected: PropTypes.instanceOf(Date), tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })), customStyle: PropTypes.shape({})
};

