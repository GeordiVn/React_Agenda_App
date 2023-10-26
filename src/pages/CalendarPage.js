import {Col, Container, Row} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMaand} from "../components/CalendarMaand";
import {CalenderJaar} from "../components/CalenderJaar";
import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const taskConverter = {
    toFirestore: undefined, fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}


export function CalendarPage() {
    const [layout, setLayout] = useState(<OptionBar/>);
    const query = collection(firestoreDB, 'Task').withConverter(taskConverter);
    const [values, loading, error] = useCollectionData(query);
    if (loading) return <></>;
    return <Container fluid={"md"} className={"p-0  g-0"} >
        <OptionBar>
            <Row className={'g-0'}>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarWeek tasks={values}/>)}
                                  title={'Week'}/>
                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarMaand tasks={values}/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalenderJaar/>)}
                                  title={'Jaar'}/>
                </Col>
            </Row>
        </OptionBar>
        {layout}
    </Container>
}
