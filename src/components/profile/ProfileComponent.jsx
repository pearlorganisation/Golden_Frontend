import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../features/Auth/AuthaAction';
import { logout } from '../../features/Auth/AuthSlice';

/**--------------profile menue-------------------*/
const ProfileComponent = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const [showDropdown, setShowDropDown] = useState(false)
 const dropdownRef = useRef(null);

 const toggleDropdown = ()=>{
    setShowDropDown(!showDropdown)
 }

    const handleProfile = () => {
        navigate("/profile");
        setShowDropDown(!showDropdown);
    };
    const handleLogout = () => {
        dispatch(logout());
        dispatch(userLogout());
        navigate("/login");
    };

    /**------------------useEffect for closing he dropdown when clicked outside---------------------- */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
      <div className="relative inline-block z-20" ref={dropdownRef}>
          <button
              className="text-red-500 px-6 py-2 border-2 border-[#007E8F] rounded-md"
              onClick={toggleDropdown}
          >
              User
          </button>
          {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <ul className="py-2 text-gray-700 bg-black">
                      <li className="px-4 py-2  hover:text-white text-white  cursor-pointer text-center font-medium">
                          <button
                              className="px-6 py-2 border-2 border-[#007E8F] hover:bg-orange-500 hover:text-white    rounded-md w-full text-red-400"
                              onClick={handleProfile}
                          >
                              Profile
                          </button>
                      </li>
                      <li className="px-4 py-2  cursor-pointer">
                          <button
                              className="px-6 py-2 border-2 border-[#007E8F]  hover:bg-orange-500 hover:text-white    rounded-md w-full text-red-400"
                              onClick={handleLogout}
                          >
                              Logout
                          </button>
                      </li>
                  </ul>
              </div>
          )}
      </div>
  )
}

export default ProfileComponent