import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { sendDataWhenOnlineFailure, sendDataWhenOnlineStart, sendDataWhenOnlineSuccess } from '../redux/user/userSlice';
import { db } from '../database/dexie';
import { useLiveQuery } from 'dexie-react-hooks';

const OnlineStatusContext = createContext();

export const useOnlineStatusProvider = () => {
    return useContext(OnlineStatusContext);
};

export const OnlineStatusProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isOnline = useOnlineStatus();
    const products = useLiveQuery(() => db.products.toArray());

    useEffect(() => {
        if (isOnline && products && products.length > 0) {
            const dataToSend = {
                data: products,
            };

            const sendData = async () => {
                dispatch(sendDataWhenOnlineStart());
                try {
                    const response = await fetch('http://localhost:3000/send', {
                        method: 'POST',
                        body: JSON.stringify(dataToSend),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    console.log(dataToSend);
                    console.log("Status code:", response.status);

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    await response.json();

                    if (response.status === 201) {
                        console.log("Received status 201, deleting products");
                        await db.products.clear();
                    }

                    dispatch(sendDataWhenOnlineSuccess());
                } catch (error) {
                    dispatch(sendDataWhenOnlineFailure(error.message));
                    console.error("Error sending data:", error);
                }
            };

            sendData();
        }
    }, [isOnline, products, dispatch]);

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {children}
        </OnlineStatusContext.Provider>
    );
};
