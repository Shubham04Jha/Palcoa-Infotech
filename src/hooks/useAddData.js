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
import useOnlineStatus from "./useOnlineStatus";

const useAddData = () => {
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  const handleSubmit = async (formData) => {
    dispatch(sendDataStart());

    const publicKey = sessionStorage.getItem('public_key');
    if (!publicKey) {
      toast.error('Public key is not available. Please try again later or refresh the page.');
      dispatch(sendDataFailure('Public key is not available.'));
      return;
    }
    try {
      const encryptedDataForDB = encryptFormData(formData, publicKey);
      const id = await db.products.add({
        ...encryptedDataForDB,
        public_key: publicKey,
        failed: false,
      });

      if(!isOnline) {
        toast.warning("You are currently offline, data is stored locally and will be uploaded on network retrival")
      }

      dispatch(addDataSuccess({ id, ...encryptedDataForDB }));
    } catch (dbError) {
      dispatch(addDataFailure(dbError.message || "Failed to add data to IndexedDB"));
      toast.error(dbError.message || "Failed to add data to IndexedDB");
    }
    dispatch(sendDataSuccess());
  };

  return {
    handleSubmit,
  };
};

export default useAddData;
