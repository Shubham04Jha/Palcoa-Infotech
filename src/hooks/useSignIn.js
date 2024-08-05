import { useDispatch } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (formData) => {
    dispatch(signInStart());
      navigate('/dashboard');
      dispatch(signInSuccess(formData));
  };

  return {
    handleSubmit,
  };
};

export default useSignIn;
