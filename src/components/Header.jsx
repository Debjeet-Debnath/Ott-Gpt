import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOutDropdown = () => {
    setIsClick(!isClick);
  }


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
    
      navigate('/error');
    })
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email, displayName, photoURL} = user;
        dispatch(addUser({
          uid : uid, 
          email: email, 
          displayName: displayName,
          photoURL: photoURL
        }))
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'> 
        <img className='w-44'
        src={LOGO} alt="Netflix_logo" />
        {
          user  && 
           <div className='flex-col cursor-pointer w-16 m-1 justify-end'>
            <div className="w-10 h-10  font-bold text-amber-50 text-[12px]">Welcome {user?.displayName}</div>
          <img onClick={handleSignOutDropdown} className="w-10 h-10" src={user?.photoURL} alt="Avatar Image" />
          { isClick && 
            <div className="bg-gray-900 w-17 h-9 mx-6 rounded-lg hover:bg-gray-200 ">
            <button onClick={handleSignOut} className='p-0.5 cursor-pointer text-white  hover:text-black'>
              Sign Out
            </button>
          </div>
          }
        </div>
        }
    </div>
  )
}

export default Header