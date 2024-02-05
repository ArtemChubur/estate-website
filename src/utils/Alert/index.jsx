import {toast} from "react-toastify";
import Alert from "../../components/Alert";

const showSuccess = (title, message) => {
    toast(
        <Alert
            title={title}
            message={message}
        />
    )
}


export  {
    showSuccess
}