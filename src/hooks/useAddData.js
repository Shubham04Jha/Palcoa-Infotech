import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  addDataFailure,
  addDataStart,
  addDataSuccess,
  sendDataStart,
  sendDataSuccess,
  sendDataFailure,
} from "../redux/user/userSlice";
import { db } from "../database/dexie";
import { encryptFormData } from "../utils/encrypt";

const useAddData = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    dispatch(sendDataStart());

    const publicKey = sessionStorage.getItem('public_key');
    if (!publicKey) {
      toast.error('Public key is not available. Please try again later or refresh the page.');
      dispatch(sendDataFailure('Public key is not available.'));
      return;
    }
    try {
      const encryptedData = encryptFormData(formData, publicKey);

      // simulated error
      throw new Error("Simulated send error");
      console.log("Sending encrypted data", encryptedData);
      dispatch(sendDataSuccess());
    } catch (sendError) {
      dispatch(sendDataFailure(sendError.message || "Failed to send data"));
      toast.error(sendError.message || "Failed to send data");

      try {
        const encryptedDataForDB = encryptFormData(formData, publicKey);
        const id = await db.products.add({
          ...encryptedDataForDB,
          public_key: publicKey,
          failed: false,
        });
        dispatch(addDataSuccess({ id, ...encryptedDataForDB }));
      } catch (dbError) {
        dispatch(addDataFailure(dbError.message || "Failed to add data to IndexedDB"));
        toast.error(dbError.message || "Failed to add data to IndexedDB");
      }
    }
  };

  return {
    handleSubmit,
  };
};

export default useAddData;
