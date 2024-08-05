import { useDispatch } from 'react-redux';
import {
  signoutSuccess,
} from '../redux/user/userSlice';

const useSignOut = () => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(signoutSuccess());
    toast.success("Signed Out Sucessfully");
  };

  return { handleSignout };
};


export default useSignOut;