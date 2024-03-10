import React, { createContext, useState } from 'react';

export const AlertContext = createContext({
    alert: { show: false, message: '', type: '' },
    showAlert: () => {}
});
export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ show: false, message: '', type: ''});

    const showAlert = (message, type) => {
        setAlert({ show: true, message, type});
        setTimeout(() => {
            setAlert({ show: false, message: '', type: '' });
        }, 3000);
    };

    return (
        <AlertContext.Provider value={ {alert, showAlert} }>
            {children}
        </AlertContext.Provider>
    );
};
