import {Col, Container, Row} from "react-bootstrap";
import {OptionBar} from "../components/OptionBar";
import {ButtonCustom} from "../components/ButtonCustom.js";
import {useState} from "react";
import {CalendarWeek} from "../components/CalendarWeek";
import {CalendarMonth} from "../components/CalendarMonth";
import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {CalendarYear} from "../components/CalendarYear";


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
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarMonth tasks={values}/>)}
                                  title={'Maand'}/>

                </Col>
                <Col xs={"auto"}>
                    <ButtonCustom onLayoutChanged={setLayout} onClick={() => setLayout(<CalendarYear/>)}
                                  title={'Jaar'}/>
                </Col>
            </Row>
        </OptionBar>
        {layout}
    </Container>
}
