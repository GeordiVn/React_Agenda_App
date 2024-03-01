import PropTypes from "prop-types";

export function SelectionBar(props) {
    const {children, customStyle} = props;
    return <div style={customStyle.selectionBar}>
        {children}
    </div>
}

SelectionBar.propTypes = {
    children: PropTypes.any,
    customStyle: PropTypes.object
};