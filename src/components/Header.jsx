import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';


const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOutDropdown = () => {
    setIsClick(!isClick);
  }


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.log(error.message + " - "+ error.code);
      navigate('/error');
    })
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'> 
        <img className='w-44'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_logo" />
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