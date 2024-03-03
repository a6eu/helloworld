import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ show: false, message: '' });

    const showAlert = (message) => {
        setAlert({ show: true, message });
        setTimeout(() => {
            setAlert({ show: false, message: '' });
        }, 3000);
    };

    return (
        <AlertContext.Provider value={ {alert, showAlert} }>
            {children}
        </AlertContext.Provider>
    );
};
