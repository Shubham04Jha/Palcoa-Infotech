import { useDispatch } from "react-redux";
import { toast } from "sonner";
import CryptoJS from "crypto-js";
import {
  addDataFailure,
  addDataStart,
  addDataSuccess,
  sendDataStart,
  sendDataSuccess,
  sendDataFailure,
} from "../redux/user/userSlice";
import { db } from "../database/dexie";

const SECRET_KEY = 'your-secret-key';

const encryptValue = (value, key) => {
  return CryptoJS.AES.encrypt(value, key).toString();
};

const encryptFormData = (formData, key) => {
  const encryptedData = {};
  for (const [fieldKey, value] of Object.entries(formData)) {
    if (fieldKey === 'productName' || fieldKey === 'description') {
      encryptedData[fieldKey] = value;
    } else {
      encryptedData[fieldKey] = encryptValue(value, key);
    }
  }
  return encryptedData;
};

const useAddData = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    dispatch(sendDataStart());

    try {
      // Simulate a sending error
      throw new Error("Simulated send error")

      const encryptedData = encryptFormData(formData, SECRET_KEY);
      console.log("Sending encrypted data", encryptedData);
      dispatch(sendDataSuccess());
    } catch (sendError) {
      dispatch(sendDataFailure(sendError.message || "Failed to send data"));
      dispatch(addDataStart());
      toast.error(sendError.message);

      try {
        const encryptedDataForDB = encryptFormData(formData, SECRET_KEY);
        const id = await db.products.add({
          ...encryptedDataForDB,
          failed: false,
        });
        dispatch(addDataSuccess({ id, ...encryptedDataForDB }));
      } catch (dbError) {
        dispatch(addDataFailure(dbError.message || "Failed to add data to IndexedDB"));
        toast.error(dbError.message);
      }
    }
  };

  return {
    handleSubmit,
  };
};

export default useAddData;
