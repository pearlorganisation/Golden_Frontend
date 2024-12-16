import React, { useEffect, useState } from "react";
import { getUserProfile } from "../features/Auth/AuthaAction.js";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);

  const { userInfo, loading, error } = useSelector((state) => state.auth);

  // Fetch user profile once component mounts and userInfo is available
  useEffect(() => {
    if (!userInfo) {
      dispatch(getUserProfile());
    } else {
      setProfile(userInfo?.user); // Set profile only after userInfo is fetched
    }
  }, [dispatch, userInfo]);

//   if (loading) {
//     return <div className="text-center text-xl">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-xl text-red-600">{error}</div>;
//   }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 bg-blue-500 text-white">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <button className="bg-blue-700 px-4 py-2 rounded-md">Edit Profile</button>
        </div>

        {profile && (
          <div className="p-6">
            <div className="flex items-center space-x-6">
              <div>
                <h3 className="text-2xl font-bold">{profile?.name}</h3>
                <p className="text-xl text-gray-500">{profile?.email}</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700">Additional Information</h4>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Username:</strong> {profile?.username}
                </li>
                {/* Add any other information you want */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
