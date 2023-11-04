import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CalendarPage} from "./pages/CalendarPage";
import './css/default.css'
import {TaskManagerProvider} from "./contexts/taskManagerContext";
import {ColorSchemeProvider} from "./contexts/colorSchemeContext";


function ProvidedApp() {
    return (<div>
        <ColorSchemeProvider>
            <CalendarPage/>
        </ColorSchemeProvider>

    </div>)
}

function App() {

    return (<TaskManagerProvider>
        <ProvidedApp/>
    </TaskManagerProvider>);
}

export default App;
