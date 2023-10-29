import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CalendarPage} from "./pages/CalendarPage";
import './css/default.css'
import {query,GeoPoint,collection} from "firebase/firestore";
import {firestoreDB} from "./services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const taskConverter = {
    toFirestore: function (dataInApp) {
        return {
            title: dataInApp.title,
            date: dataInApp.date,
            description: dataInApp.description,
            location: new GeoPoint(dataInApp.location._lat,dataInApp.location._long),
            repeat: dataInApp.repeat,
            priority: dataInApp.priority
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
}

function App() {
    const collectionRef = collection(firestoreDB, 'tasks').withConverter(taskConverter);
    const queryRef = query(collectionRef);
    const [values, loading] = useCollectionData(queryRef);
    if (loading) return <></>;
    return (
        <div>
            <CalendarPage collectionRef={collectionRef} tasks={values}/>
        </div>
    );
}

export default App;
