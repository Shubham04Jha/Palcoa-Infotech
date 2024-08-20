import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { getPublicKeyFailure, getPublicKeyStart, getPublicKeySuccess } from '../redux/user/userSlice';

const useGetPublicKey = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetPublicKey = async (formData) => {
    dispatch(getPublicKeyStart());
    try {
      const res = await fetch('https://palcoa-infotech-backend.vercel.app/form', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'An error occurred');
        dispatch(getPublicKeyFailure(data.message || 'An error occurred'));
        return;
      }

      if (data.success === false) {
        toast.error(data.message || 'Authentication failed');
        dispatch(getPublicKeyFailure(data.message || 'Authentication failed'));
      } else {
        sessionStorage.setItem('public_key' , data.public_key);
        console.log(data); 
        dispatch(getPublicKeySuccess(data));
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred');
      dispatch(getPublicKeyFailure(error.message || 'An unexpected error occurred'));
    }
  };

  return {
    handleGetPublicKey,
  };
};

export default useGetPublicKey;
