import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../context/ToastContext';

const Toast = ({ message, time = 5000, id, startTime }) => {

    const divStyles = {
        backgroundColor: 'white',
        border: '2px solid #f5f5f5',
        borderRadius: '5px',
        padding: '5px 10px',
        zIndex: 1000,
    }

    const [show, setShow] = useState(true);
    const { removeToast } = useContext(ToastContext);

    const remaining = time - (Date.now() - startTime);

    useEffect(() => {

        const close = () => {
            setShow(false);
            removeToast(id);
        }

        if (remaining <= 0) {
            close();
        } else {
            const timeOut = setTimeout(close, remaining);
            return () => clearTimeout(timeOut);
        }

    }, [remaining, removeToast, id]);

    return show && (
        <div style={divStyles}> 
            <p>{message}</p>
        </div>
    );
}
 
export default Toast;