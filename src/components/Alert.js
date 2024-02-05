const Alert = (props) => {

    const {
        title,
        message
    } = props

    return (
        <div>
            <h4>{title}</h4>
            <p>{message}</p>
        </div>
    );
};

export default Alert;