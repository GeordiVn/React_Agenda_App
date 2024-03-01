import PropTypes from "prop-types";

export function IconButton(props) {
    const {onClick, children} = props;
    return <button className={"p-0 m-0 text-white border-0 bg-transparent"}
                   onClick={e => {
                       e.preventDefault();
                       onClick();
                   }}>
        {children}
    </button>
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.element
}