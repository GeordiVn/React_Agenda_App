import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection} from 'firebase/firestore';
import {TaskElementWeek} from "./TaskElementWeek";

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
    const [values, loading, error] = useCollectionData(query);
    if (loading) return<></>;
    return <div>
        {values.sort((p1,p2)=> p1.date.seconds-p2.date.seconds).map((task)=> <TaskElementWeek key={task.id} task={task}/>)}
    </div>
}
