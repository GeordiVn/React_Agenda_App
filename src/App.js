import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CalendarPage} from "./pages/CalendarPage";
import './css/default.css'
import {query, GeoPoint, collection} from "firebase/firestore";
import {firestoreDB} from "./services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {TaskManagerProvider} from "./contexts/taskManagerContext";


function ProvidedApp() {
    return (<div>
        <CalendarPage/>
    </div>)
}

function App() {

    return (<TaskManagerProvider>
        <ProvidedApp/>
    </TaskManagerProvider>);
}

export default App;
