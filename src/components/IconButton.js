import PropTypes from "prop-types";

export function IconButton(props) {
    const {onClick, children} = props;
    return <a href={'#'}
              onClick={e => {
                  e.preventDefault();
                  onClick();
              }}>
        {children}
    </a>
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.element
}