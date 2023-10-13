import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from 'firebase/firestore';
import {TaskElementWeek} from "./TaskElementWeek";
import {endOfWeek, startOfWeek} from "date-fns";
import {useState} from "react";



const taskConverter =
    {
        toFirestore: undefined,
        fromFirestore: function (snapshot, options) {
            const data = snapshot.data(options);
            return {...data, id: snapshot.id}
        }
    }

export function CalendarWeek() {
    const query = collection(firestoreDB, 'Task').withConverter(taskConverter);
    const [weekRange, setWeekRange] = useState({
        start: startOfWeek(new Date(), {weekStartsOn: 1},),
        end: endOfWeek(new Date(), {weekStartsOn: 1})
    });
    const [values, loading, error] = useCollectionData(query);
    if (loading) return <></>;
    return <div>
        <WeekSelector weekRange={weekRange} onWeekRangeChanged={setWeekRange}/>
        {[...values].sort((p1, p2) => p1.date.seconds - p2.date.seconds)
            .filter((p1) => p1.date.toDate() >= weekRange.start && p1.date.toDate() <= weekRange.end)
            .map((task) => <TaskElementWeek key={task.id} task={task}/>)}
    </div>
}




function WeekSelector(props) {
    const {weekRange, onWeekRangeChanged} = props;

    return <div>
        <button onClick={e => onWeekRangeChanged({
            start: startOfWeek(weekRange.start.setDate(weekRange.start.getDate() - 7), {weekStartsOn: 1},),
            end: endOfWeek(weekRange.end.setDate(weekRange.end.getDate() - 7), {weekStartsOn: 1})
        })}>Prev
        </button>
        <button onClick={e => onWeekRangeChanged({
            start: startOfWeek(weekRange.start.setDate(weekRange.start.getDate() + 7), {weekStartsOn: 1},),
            end: endOfWeek(weekRange.end.setDate(weekRange.end.getDate() + 7), {weekStartsOn: 1})
        })}>Next
        </button>
        <p>{weekRange.start + ' ' + weekRange.end}</p>
    </div>
}
