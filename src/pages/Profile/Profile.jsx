import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../features/Auth/AuthaAction";
import { User, Mail, Phone, CheckCircle } from "lucide-react";
import { getPurchase } from "../../features/Previous_Purchase/purchaseAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo, isUserLoggedIn } = useSelector((state) => state.auth);
  const { purchaseData, isLoading, isSuccess } = useSelector(
    (state) => state.purchases
  );

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getPurchase({ email: userInfo?.email }));
    }
  }, [isUserLoggedIn, dispatch]);

  if (!isUserLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg text-gray-600">
          Please log in to view your profile
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Profile Information
          </h1>
        </div>

        <div className="p-6 space-y-6">
          {/* Name Section */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex-shrink-0">
              <User className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Name</p>
              <p className="text-sm font-medium text-gray-800">
                {userInfo?.name}
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-xs font-medium text-gray-800 text-wrap">
                {userInfo?.email}
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-lg font-medium text-gray-800">
                {userInfo?.phoneNumber}
              </p>
            </div>
          </div>

          {/* Verification Status */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <div className="flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Verification Status</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  userInfo?.isVerified
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {userInfo?.isVerified ? "Verified" : "Not Verified"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Purchase Section */}
      <div className="mt-8">
        <h1 className="text-2xl text-center font-medium">
          Your Previous Purchases
        </h1>
        <div className="mt-4 space-y-4">
          {Array.isArray(purchaseData.data) &&
            purchaseData?.data?.map((purchase) => (
              <div
                key={purchase._id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start flex-wrap">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {purchase.title}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Order ID: {purchase.orderId}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Customer: {purchase.name}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Email: {purchase.email}
                    </p>
                    <p className="text-gray-600  text-xs md:text-sm">
                      Phone: {purchase.mobileNumber}
                    </p>
                  </div>

                  <div className="space-y-2 text-right mt-4 sm:mt-0">
                    <p className="text-2xl font-bold text-gray-800">
                      ₹{purchase.totalPrice}
                    </p>
                    <p
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                                        ${
                                          purchase.orderStatus === "Pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : purchase.orderStatus ===
                                              "Completed"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-gray-100 text-gray-800"
                                        }`}
                    >
                      {purchase.orderStatus}
                    </p>
                    <p
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ml-12
                                        ${
                                          purchase.paymentStatus === "Unpaid"
                                            ? "bg-red-100 text-red-800"
                                            : purchase.paymentStatus === "Paid"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-gray-100 text-gray-800"
                                        }`}
                    >
                      {purchase.paymentStatus}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(purchase.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
