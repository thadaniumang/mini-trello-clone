import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import Toast from "./Toast";

const Alerts = () => {

    const styles = {
        position: 'fixed',
        top: '5px',
        right: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'space-evenly',
        gap: '1rem',
        zIndex: '1000'
    }

    const { toasts } = useContext(ToastContext);
    console.log(toasts);
    console.log(new Date().toLocaleTimeString('en-US'));

    return (
        <div style={styles}>
            {
                toasts.map((toast, index) => {
                    return <Toast key={toast.id} message={toast.message} time={toast.time} id={toast.id} startTime={toast.startTime} />
                })
            }
        </div>
    );
}
 
export default Alerts;