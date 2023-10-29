import {Col, Row} from "react-bootstrap";

export function DayElement(props) {
    const {title, children, style,today} = props;

    return <Col style={style ? style : {
        backgroundColor: '#FCE09B',
        color: today ? 'white':'black',
        borderRadius: '10px',
        marginBottom: '5px',
        marginRight: '5px',
        height: '150px',
        overflowY:'scroll'
    }}>
        <div className={'text-center'}>
            {today?<p style={{backgroundColor:'#B2533E'}}>{title}</p> :<p>{title}</p>}
            <div className={'g-0'}>
                {children}
            </div>
        </div>
    </Col>
}
