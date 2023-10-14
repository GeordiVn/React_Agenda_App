export function SelectionBar(props) {
    const {children} = props;
    return <div style={{
        backgroundColor: '#B2533E',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        padding: '10px'
    }}>
        {children}
    </div>
}
