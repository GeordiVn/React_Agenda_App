import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CalendarPage} from "./pages/CalendarPage";
import './css/default.css'
import {collection} from "firebase/firestore";
import {firestoreDB} from "./services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const taskConverter = {
    toFirestore: undefined, fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

function App() {
    const query = collection(firestoreDB, 'Task').withConverter(taskConverter);
    const [values, loading] = useCollectionData(query);
    if (loading) return <></>;
    return (
        <div>
            <CalendarPage tasks={values}/>
        </div>
    );
}

export default App;
