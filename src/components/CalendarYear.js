import {Section} from "./Section";
import {OptionBar} from "./OptionBar";
import {SelectionBar} from "./SelectionBar";
import {useState} from "react";
import {Col} from "react-bootstrap";
import {getDaysInMonth} from "date-fns";

export function CalendarYear(props) {
    const [dateSelected, setDateSelected] = useState(new Date());
    return <div>
        <YearSelector dateSelected={dateSelected}/>
        <Section>
            {MONTHS_IN_YEAR.map((month, index) => <MonthColumn key={month.number} month={month.month}
                                                               dateSelected={dateSelected.setMonth(month.number)}/>)}
        </Section>
    </div>
}

function YearSelector(props) {
    const {dateSelected} = props;
    return <SelectionBar>
        <p style={{color: 'white'}}>{dateSelected.toLocaleDateString('nl-BE')}</p>
    </SelectionBar>
}

function MonthColumn(props) {
    const {dateSelected, month} = props;
    const daysInMonth = getDaysInMonth(dateSelected)
    return <Col xs={2} className={"p-2"}>
        <div className={"rounded-2 mb-3 p-2 text-black"} style={{backgroundColor: '#FCE09B'}}>
            <h6 className={"text-center"}>{month}</h6>
            {generateDaysForMonth(daysInMonth, month)}
        </div>
    </Col>
}

function DayForMonth(props) {
    const {title} = props;
    return <div>
        <p>{title}</p>
    </div>
}

function generateDaysForMonth(daysInMonth) {
    let daysMonthArray = [];
    for (let i = 1; i < daysInMonth + 1; i++) {
        daysMonthArray = [[...daysMonthArray], <DayForMonth title={i}/>]
        console.table(daysMonthArray);
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