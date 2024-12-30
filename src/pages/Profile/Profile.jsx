import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../features/Auth/AuthaAction'
import { User, Mail, Phone, CheckCircle } from 'lucide-react'

const Profile = () => {
    const dispatch = useDispatch();
    const { userInfo, isUserLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        if (isUserLoggedIn && userInfo.length === 0) {
            dispatch(getUserProfile());
        }
    }, [isUserLoggedIn, dispatch]);

    if (!isUserLoggedIn) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <p className="text-lg text-gray-600">Please log in to view your profile</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-bold text-center text-gray-800">Profile Information</h1>
                </div>

                <div className="p-6 space-y-6">
                    {/* Name Section */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                            <User className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="text-lg font-medium text-gray-800">{userInfo.name}</p>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                            <Mail className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-lg font-medium text-gray-800">{userInfo.email}</p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                            <Phone className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p className="text-lg font-medium text-gray-800">{userInfo.phoneNumber}</p>
                        </div>
                    </div>

                    {/* Verification Status */}
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Verification Status</p>
                            <span
                                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${userInfo.isVerified
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}
                            >
                                {userInfo.isVerified ? 'Verified' : 'Not Verified'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile