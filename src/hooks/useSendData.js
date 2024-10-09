import { useDispatch } from 'react-redux';
import { sendDataWhenOnlineFailure, sendDataWhenOnlineStart, sendDataWhenOnlineSuccess } from '../redux/user/userSlice';
import { db } from '../database/dexie';
import { toast } from 'sonner';

const useSendData = (isOnline, products) => {
    const dispatch = useDispatch();

    const sendData = async () => {
        if (isOnline && products && products.length > 0) {
            const dataToSend = {
                data: products,
            };

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
                    toast.success("Data sent to server successfully")
                    await db.products.clear();
                }

                dispatch(sendDataWhenOnlineSuccess());
            } catch (error) {
                dispatch(sendDataWhenOnlineFailure(error.message));
                console.error("Error sending data:", error);
                throw error;
            }
        }
    };

    return sendData;
};

export default useSendData;
