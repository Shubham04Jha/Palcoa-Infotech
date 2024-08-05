import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDataFailure, addDataStart, addDataSuccess } from "../redux/user/userSlice";
import { db } from "../database/dexie";

const useAddData = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (formData) => {
        dispatch(addDataStart());
        try {
            const id = await db.products.add({
                productName: formData.productName,
                price: formData.price,
                description: formData.description,
                category: formData.category,
                stock: formData.stock,
                failed: false 
            });
            dispatch(addDataSuccess({ id, ...formData }));
        } catch (error) {
            dispatch(addDataFailure(error.message || 'Failed to add data'));
        }
    };

    return {
        handleSubmit,
    };
};

export default useAddData;
