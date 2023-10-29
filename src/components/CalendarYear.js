import {Section} from "./Section";
import {SelectionBar} from "./SelectionBar";
import {useState} from "react";
import {Col} from "react-bootstrap";
import {addYears, getDaysInMonth} from "date-fns";
import {ButtonCustom} from "./ButtonCustom";
import {TaskNote} from "./TaskNote";
import {taskIsCurrentDay, taskIsCurrentDayAndIsRepeat} from "../utilities/calendar_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext";

export function CalendarYear() {
    const {tasks} = useTaskManagerContext();
    const [dateSelected, setDateSelected] = useState(new Date(new Date().getFullYear(), 0, 1));
    return <div>
        <YearSelector dateSelected={dateSelected} onDateSelectedChanged={setDateSelected}/>
        <Section>
            {MONTHS_IN_YEAR.map((month, index) => <MonthColumn key={month.number}
                                                               tasks={tasks}
                                                               month={month}
                                                               dateSelected={dateSelected.setMonth(month.number)}/>)}
        </Section>
    </div>
}

function YearSelector(props) {
    const {dateSelected, onDateSelectedChanged} = props;
    return <SelectionBar>
        <ButtonCustom onClick={() => onDateSelectedChanged(addYears(dateSelected, -1))} title={"Vorig jaar"}/>
        <ButtonCustom onClick={() => onDateSelectedChanged(addYears(dateSelected, 1))} title={"Volgend jaar"}/>
        <ButtonCustom onClick={() => onDateSelectedChanged(new Date())} title={"Dit jaar"}/>
        <p style={{color: 'white'}}>{dateSelected.toLocaleDateString('nl-BE')}</p>
    </SelectionBar>
}

function MonthColumn(props) {
    const {dateSelected, tasks, month} = props;
    return <Col xs={4} md={3} lg={2} className={"p-2"}>
        <div className={"rounded-2 mb-3 p-2 text-black"} style={{backgroundColor: '#FCE09B'}}>
            <h6 className={"text-center"}>{month.month}</h6>
            {generateDaysForMonth(dateSelected, tasks, month)}
        </div>
    </Col>
}

function DayForMonth(props) {
    const {title, tasks, today} = props;
    return <div>
        {!tasks.length > 0 ? <strong>{title}</strong> : <TaskNote tasks={tasks}>
            <div className={"my-1"} style={{backgroundColor: '#B5CB99'}}>
                <strong className={"text-black"}>{title}<span
                    className={"ms-3 text-white"}>{tasks.length < 2 ? tasks.length + " Item" : tasks.length + " Items"}</span></strong>
            </div>
        </TaskNote>}
    </div>


}

function generateDaysForMonth(dateSelected, tasks, month) {
    console.log(new Date(dateSelected).toLocaleDateString("nl-BE"));
    const daysInMonth = getDaysInMonth(dateSelected);
    let daysMonthArray = [];
    for (let day = 1; day < daysInMonth + 1; day++) {
        daysMonthArray = [[...daysMonthArray], <DayForMonth key={day * dateSelected.getMonth} title={day}
                                                            tasks={tasks.filter(task => taskIsCurrentDay(task, day, dateSelected) || taskIsCurrentDayAndIsRepeat(task, day, dateSelected))}/>]
    }
    return daysMonthArray;
}


const MONTHS_IN_YEAR = [
    {number: 0, month: "januari"},
    {number: 1, month: "februari"},
    {number: 2, month: "maart"},
    {number: 3, month: "april"},
    {number: 4, month: "mei"},
    {number: 5, month: "juni"},
    {number: 6, month: "juli"},
    {number: 7, month: "augustus"},
    {number: 8, month: "september"},
    {number: 9, month: "oktober"},
    {number: 10, month: "november"},
    {number: 11, month: "december"},

]