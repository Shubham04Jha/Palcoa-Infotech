import { useState, useEffect } from 'react';

const useOnlineStatus = (onGoOnline) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateOnlineStatus = () => {
            const onlineStatus = navigator.onLine;
            setIsOnline(onlineStatus);
            if (onlineStatus && onGoOnline) {
                onGoOnline();
            }
        };

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, [onGoOnline]);

    return isOnline;
};

export default useOnlineStatus;
