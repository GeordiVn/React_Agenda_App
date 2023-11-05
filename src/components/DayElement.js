import {Col, Row} from "react-bootstrap";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";

export function DayElement(props) {
    const {title, children, style, today} = props;
    const {colorPallet} = useColorSchemeContext();
    return <Col style={style ? style : today? colorPallet.dayElementToday:colorPallet.dayElementNormal}>
        <div className={'text-center'}>
            {today ? <p style={colorPallet.dayElementMarkToday}>{title}</p> : <p>{title}</p>}
            <div className={'g-0'}>
                {children}
            </div>
        </div>
    </Col>
}
