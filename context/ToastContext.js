import { createContext, useState } from "react";

const ToastContext = createContext({
    toasts: [],
    addToast: () => {},
    removeToast: () => {}
});

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        setToasts([...toasts, toast]);
    };

    const removeToast = (id) => {
        setToasts(toasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export { ToastContext, ToastProvider };
