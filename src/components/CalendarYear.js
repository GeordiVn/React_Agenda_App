import {Section} from "./Section";
import {SelectionBar} from "./SelectionBar";
import {useState} from "react";
import {Col} from "react-bootstrap";
import {addYears, getDaysInMonth} from "date-fns";

import {ButtonCustom} from "./ButtonCustom";

export function CalendarYear(props) {
    const {tasks} = props;
    const [dateSelected, setDateSelected] = useState(new Date());
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
    const {title, tasks} = props;
    //console.log(tasks);
    return <div className={"rounded-2 mb-1 "}
                style={tasks ? {backgroundColor: '#B5CB99'} : {backgroundColor: '#FCE09B'}}>
        <strong className={"ms-1"}>{title} {tasks.length > 0 ?
            <span className={"text-white"}>Tasks:{tasks.length}</span> : ''}</strong>

    </div>
}

function generateDaysForMonth(dateSelected, tasks, month) {
    const daysInMonth = getDaysInMonth(dateSelected);
    let daysMonthArray = [];
    console.log(tasks.map(task => task.date.toDate().getFullYear() + "-----"));
    for (let i = 1; i < daysInMonth + 1; i++) {
        daysMonthArray = [[...daysMonthArray], <DayForMonth title={i}
                                                            tasks={tasks.filter(task => task.date.toDate().getMonth() === new Date(dateSelected).getMonth() && task.date.toDate().getDate() === i && task.date.toDate().getFullYear() === new Date(dateSelected).getFullYear())}/>]
    }
    return daysMonthArray;
}


const MONTHS_IN_YEAR = [{number: 0, month: "januari"}, {number: 1, month: "februari"}, {
    number: 2, month: "maart"
}, {number: 3, month: "april"}, {number: 4, month: "mei"}, {number: 5, month: "juni"}, {
    number: 6, month: "juli"
}, {number: 7, month: "augustus"}, {number: 8, month: "september"}, {number: 9, month: "oktober"}, {
    number: 10, month: "november"
}, {number: 11, month: "december"},

]