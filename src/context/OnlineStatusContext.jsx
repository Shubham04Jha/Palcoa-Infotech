import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { sendDataWhenOnlineFailure, sendDataWhenOnlineStart, sendDataWhenOnlineSuccess } from '../redux/user/userSlice';

const OnlineStatusContext = createContext();

export const useOnlineStatusProvider = () => {
    return useContext(OnlineStatusContext);
};

export const OnlineStatusProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isOnline = useOnlineStatus();

    useEffect(() => {
        if (isOnline) {
            const dataToSend = {
                // TODO: DATA TO BE ADDED
            };

            const sendData = async () => {
                dispatch(sendDataWhenOnlineStart());
                try {
                    const response = await fetch('/api/send-data', {
                        method: 'POST',
                        body: JSON.stringify(dataToSend),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    await response.json();
                    dispatch(sendDataWhenOnlineSuccess());
                } catch (error) {
                    dispatch(sendDataWhenOnlineFailure(error.message));
                }
            };

            sendData();
        }
    }, [isOnline, dispatch]);

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {children}
        </OnlineStatusContext.Provider>
    );
};
