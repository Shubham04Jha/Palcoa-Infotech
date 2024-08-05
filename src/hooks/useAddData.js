import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addDataFailure,
  addDataStart,
  addDataSuccess,
  sendDataStart,
  sendDataSuccess,
  sendDataFailure,
} from "../redux/user/userSlice";
import { db } from "../database/dexie";
import { toast } from "sonner";

const useAddData = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (formData) => {
    dispatch(sendDataStart()); 
    
    try {
      throw new Error("Simulated send error");
      console.log("Sending data", formData);
      dispatch(sendDataSuccess()); 

    } catch (sendError) {
      dispatch(sendDataFailure(sendError.message || "Failed to send data")); 
      dispatch(addDataStart()); 
      toast.error(sendError.message);
      try {
        const id = await db.products.add({
          productName: formData.productName,
          price: formData.price,
          description: formData.description,
          category: formData.category,
          stock: formData.stock,
          failed: false, 
        });
        dispatch(addDataSuccess({ id, ...formData }));
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
