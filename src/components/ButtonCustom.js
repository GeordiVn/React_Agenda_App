import {Col} from "react-bootstrap";

export function ButtonCustom(props) {
    const {title, onClick} = props;
    return <button onClick={() => onClick()} style={{
        backgroundColor: '#FCE09B',
        marginRight:'1.5rem',
        color: 'black',
        border: 'none',
        borderRadius: '10px',
        padding: '5px'
    }}>{title}</button>

}
