import {Col, Row} from "react-bootstrap";

export function DayElement(props) {
    const {title, children, style} = props;

    return <Col style={style ? style : {
        backgroundColor: '#FCE09B',
        color: 'black',
        borderRadius: '10px',
        marginBottom: '5px',
        marginRight: '5px',
        height: '100px',
        overflowY:'scroll'
    }}>
        <div className={'text-center'}>
            <p>{title}</p>
            <div className={'g-0'}>
                {children}
            </div>
        </div>
    </Col>
}
