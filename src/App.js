import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CalendarPage} from "./pages/CalendarPage";
import './css/default.css'
import {TaskManagerProvider} from "./contexts/taskManagerContext";
import {ColorSchemeProvider} from "./contexts/colorSchemeContext";
import 'react-toastify/dist/ReactToastify.css';


function ProvidedApp() {
    return (<div>
        <CalendarPage/>
    </div>)
}

function App() {

    return (
        <ColorSchemeProvider>
            <TaskManagerProvider>
                <ProvidedApp/>
            </TaskManagerProvider>
        </ColorSchemeProvider>
    );
}

export default App;
