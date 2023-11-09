import {Col, Row} from "react-bootstrap";
import {useColorSchemeContext} from "../contexts/colorSchemeContext";
import PropTypes from "prop-types";

export function DayElement(props) {
    const {title, children, style, today} = props;
    const {colorPallet} = useColorSchemeContext();
    return <Col style={style ? style : today ? colorPallet.dayElementToday : colorPallet.dayElementNormal}>
        <div className={'text-center'}>
            {today ? <p style={colorPallet.dayElementMarkToday}>{title}</p> : <p>{title}</p>}
            <div className={'g-0'}>
                {children}
            </div>
        </div>
    </Col>
}

DayElement.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.shape({}),
    today: PropTypes.bool
};
