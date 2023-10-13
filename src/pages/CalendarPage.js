import {Container} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {OptionButton} from "../components/OptionButton";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMaand} from "../components/CalendarMaand";
import {CalenderJaar} from "../components/CalenderJaar";

export function CalendarPage(props) {
const [layout,setLayout] = useState(<OptionBar/>);
    return <Container>
        <OptionBar>
            <OptionButton onLayoutChanged={setLayout} layout={<CalendarWeek/>} title={'Week'}/>
            <OptionButton onLayoutChanged={setLayout} layour={<CalendarMaand/>} title={'Maand'}/>
            <OptionButton onLayoutChanged={setLayout} layout={<CalenderJaar/>} title={'Jaar'}/>
        </OptionBar>
        {layout}
    </Container>
}
