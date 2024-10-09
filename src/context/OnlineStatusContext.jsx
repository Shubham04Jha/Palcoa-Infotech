import React, { createContext, useContext, useEffect } from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { db } from '../database/dexie';
import { useLiveQuery } from 'dexie-react-hooks';
import useSendData from '../hooks/useSendData';

const OnlineStatusContext = createContext();

export const useOnlineStatusProvider = () => {
    return useContext(OnlineStatusContext);
};

export const OnlineStatusProvider = ({ children }) => {
    const isOnline = useOnlineStatus();
    const products = useLiveQuery(() => db.products.toArray());
    const sendData = useSendData(isOnline, products);

    useEffect(() => {
        sendData();
    }, [isOnline, products, sendData]);

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {children}
        </OnlineStatusContext.Provider>
    );
};
