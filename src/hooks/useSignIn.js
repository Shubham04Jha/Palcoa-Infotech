import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    dispatch(signInStart());
    try {
      const res = await fetch('https://palcoa-infotech-backend.vercel.app/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || 'An error occurred');
        dispatch(signInFailure(errorData.message || 'An error occurred'));
        return;
      }

      const data = await res.json();

      if (data.success === false) {
        toast.error(data.message || 'Authentication failed');
        dispatch(signInFailure(data.message || 'Authentication failed'));
      } else {
        navigate('/dashboard');
        console.log(data);
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      toast.error(error.message || 'An unexpected error occurred');
      dispatch(signInFailure(error.message || 'An unexpected error occurred'));
    }
  };

  return {
    handleSubmit,
  };
};

export default useSignIn;
