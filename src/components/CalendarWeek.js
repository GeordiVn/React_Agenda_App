import {TaskElementWeek} from "./TaskElementWeek";
import {endOfWeek, startOfWeek} from "date-fns";
import {useState} from "react";
import {ButtonCustom} from "./ButtonCustom";
import {SelectionBar} from "./SelectionBar";
import PropTypes from "prop-types";
import {useTaskManagerContext} from "../contexts/taskManagerContext";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";


export function CalendarWeek() {
    const {tasks} = useTaskManagerContext();
    const {colorPallet} = useColorSchemeContext();
    const [weekRange, setWeekRange] = useState({
        start: startOfWeek(new Date(), {weekStartsOn: 1},), end: endOfWeek(new Date(), {weekStartsOn: 1})
    });

    return <div>
        <WeekSelector weekRange={weekRange} onWeekRangeChanged={setWeekRange} customStyle={colorPallet}/>
        {[...tasks].sort((p1, p2) => p1.date.seconds - p2.date.seconds)
            .filter((p1) => p1.date.toDate() >= weekRange.start && p1.date.toDate() <= weekRange.end)
            .map((task) => <TaskElementWeek key={task.id} task={task} customStyle={colorPallet}/>)}
    </div>
}

function WeekSelector(props) {
    const {weekRange, onWeekRangeChanged , customStyle} = props;

    return <SelectionBar customStyle={customStyle}>
        <ButtonCustom title={'Vorige week'} onClick={e => onWeekRangeChanged({
            start: startOfWeek(weekRange.start.setDate(weekRange.start.getDate() - 7), {weekStartsOn: 1},),
            end: endOfWeek(weekRange.end.setDate(weekRange.end.getDate() - 7), {weekStartsOn: 1})
        })}>
        </ButtonCustom>
        <ButtonCustom title={'Volgende week'} onClick={e => onWeekRangeChanged({
            start: startOfWeek(weekRange.start.setDate(weekRange.start.getDate() + 7), {weekStartsOn: 1},),
            end: endOfWeek(weekRange.end.setDate(weekRange.end.getDate() + 7), {weekStartsOn: 1})
        })}>
        </ButtonCustom>
        <ButtonCustom title={'Deze week'} onClick={e => onWeekRangeChanged({
            start: startOfWeek(new Date(), {weekStartsOn: 1},), end: endOfWeek(new Date(), {weekStartsOn: 1})
        })}>
        </ButtonCustom>
        <div className={"text-center"}>
            <h5 style={{color: 'white'}}>Van {weekRange.start.toLocaleDateString('nl-BE')} tot {weekRange.end.toLocaleDateString('nl-BE')}</h5>
        </div>

    </SelectionBar>
}

CalendarWeek.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({_lat: PropTypes.number, _long: PropTypes.number}),
        priority: PropTypes.number,
        date: PropTypes.object
    })
};

WeekSelector.propTypes = {
    weekRange: PropTypes.shape({
        start: PropTypes.object,
        end: PropTypes.object
    }),
    onWeekRangeChanged: PropTypes.func
}