import {Section} from "./Section";
import {SelectionBar} from "./SelectionBar";
import {useState} from "react";
import {Col} from "react-bootstrap";
import {addYears, getDaysInMonth} from "date-fns";
import {ButtonCustom} from "./ButtonCustom";
import {TaskNote} from "./TaskNote";
import {taskIsCurrentDay, taskIsCurrentDayAndIsRepeat} from "../utilities/calendar_utilities";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";

export function CalendarYear() {
    const {tasks} = useTaskManagerContext();
    const [dateSelected, setDateSelected] = useState(new Date(new Date().getFullYear(), 0, 1));
    const {colorPallet} = useColorSchemeContext();
    return <div>
        <YearSelector dateSelected={dateSelected} onDateSelectedChanged={setDateSelected}/>
        <Section>
            {MONTHS_IN_YEAR.map((month, index) => <MonthColumn key={month.number}
                                                               tasks={tasks}
                                                               month={month}
                                                               style={colorPallet}
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
    const {dateSelected, tasks, month, style} = props;
    return <Col xs={4} md={3} lg={2} className={"p-2"}>
        <div className={"rounded-2 mb-3 p-2 text-black"} style={style.monthColumnStyle}>
            <h6 className={"text-center"}>{month.month}</h6>
            <DaysForMonth dateSelected={dateSelected} tasks={tasks} style={style}/>
        </div>
    </Col>
}

function DayForMonth(props) {
    const {title, tasks,style} = props;
    return <div>
        {!tasks.length > 0 ? <strong>{title}</strong> : <TaskNote tasks={tasks} style={style}>
            <div className={"my-1"} style={style.dayForMonth}>
                <strong className={"text-black"}>{title}<span
                    className={"ms-3 text-white"}>{tasks.length < 2 ? tasks.length + " Item" : tasks.length + " Items"}</span></strong>
            </div>
        </TaskNote>}
    </div>


}

function DaysForMonth(props) {
    const {dateSelected, tasks,style} = props;
    const daysInMonth = getDaysInMonth(dateSelected);
    let daysMonthArray = [];
    for (let day = 1; day < daysInMonth + 1; day++) {
        daysMonthArray = [[...daysMonthArray], <DayForMonth key={day * dateSelected.getMonth} title={day} style={style}
                                                            tasks={tasks.filter(task => taskIsCurrentDay(task, day, dateSelected) || taskIsCurrentDayAndIsRepeat(task, day, dateSelected))}/>]
    }
    return <div>
        {daysMonthArray}
    </div>;
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