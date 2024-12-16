import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubjects } from "../features/Subject/SubjectAction";

const DetailPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle
  const [globalDuration, setGlobalDuration] = useState(""); // For global duration filter
  const [selectedSpeciality, setSelectedSpeciality] = useState("Overview");

  const dispatch = useDispatch();
  const { subject } = useSelector((state) => state.subject);

  // Fetch subjects data on mount
  useEffect(() => {
    dispatch(getAllSubjects());
  }, [dispatch]);

  const specialties = subject?.data || []; // Use fetched data
  const content = specialties.reduce((acc, speciality) => {
    acc[speciality.name] = {
      title: speciality.name,
      description: `Pages: ${speciality.pages || "N/A"}. Faculty: ${
        speciality.faculty || "N/A"
      }.`,
    };
    return acc;
  }, {});

  const selectMonth = ["1month", "6month"];
  const Month = {
    "1month": {
      rupees: 399,
    },
    "6month": {
      rupees: 1499,
    },
  };

  // Initialize selected options state dynamically based on specialties
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    if (specialties.length) {
      setSelectedOptions(
        specialties.reduce((acc, speciality) => {
          acc[speciality.name] = "1month";
          return acc;
        }, {})
      );
    }
  }, [specialties]);

  const handleSelectChange = (speciality, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [speciality]: value,
    }));
  };

  const handleGlobalDurationChange = (duration) => {
    setGlobalDuration(duration);
    setSelectedOptions((prevState) =>
      specialties.reduce((acc, speciality) => {
        acc[speciality.name] = duration;
        return acc;
      }, {})
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar */}
        <div
          className={`lg:w-1/4 bg-gray-100 border-r lg:block ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold px-4 py-2">Sub Specialties</h2>
          <ul className="space-y-2 px-4">
            {specialties.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer p-2 rounded ${
                  selectedSpeciality === item.name
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-200"
                }`}
                onClick={() => setSelectedSpeciality(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Sidebar Button (for mobile) */}
        <button
          className="lg:hidden p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoIosClose /> : <FaBars />}
        </button>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Video Section */}
          <div className="bg-black text-white p-6 rounded-md h-auto lg:h-[450px]">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              {content[selectedSpeciality]?.title || selectedSpeciality}
            </h1>
            <p className="text-base lg:text-lg">
              {content[selectedSpeciality]?.description ||
                "Details about this specialty will appear here."}
            </p>
          </div>

          {/* Global Filter for Duration */}
          <div className="mt-8">
            <label className="block text-gray-600 text-sm font-medium mb-2">
              Global Duration Filter:
            </label>
            <select
              className="border border-gray-300 rounded-md w-full p-3 text-gray-700 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={globalDuration}
              onChange={(e) => handleGlobalDurationChange(e.target.value)}
            >
              <option value="">Select Duration</option>
              {selectMonth.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Specialties PDF Plans Section */}
          <div className="mt-10 py-14">
            <div className="text-xl lg:text-4xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 px-6 py-4 mb-6 rounded-lg shadow-lg">
              PDF Plans
            </div>
            <div className="flex flex-row flex-wrap gap-6">
              {specialties.map((speciality) => (
                <div
                  key={speciality.id}
                  className="bg-white shadow-lg rounded-md p-6 max-w-[300px]"
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4">
                    Choose Your Plan - {speciality.name}
                  </h3>
<div><img src={speciality.banner.secure_url}/></div>
                  {/* Dropdown for Duration */}
                  <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2">
                      Select Duration
                    </label>
                    <select
                      className="border border-gray-300 rounded-md w-full p-3 text-gray-700 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={selectedOptions[speciality.name]}
                      onChange={(e) =>
                        handleSelectChange(speciality.name, e.target.value)
                      }
                    >
                      {selectMonth.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Display Selected Price */}
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-base lg:text-lg text-gray-700 mb-2">
                      Selected Plan:{" "}
                      <strong className="text-blue-600">
                        {selectedOptions[speciality.name]}
                      </strong>
                    </p>
                    <p className="text-base lg:text-lg text-gray-700">
                      Price:{" "}
                      <strong className="text-green-600">
                        ₹{Month[selectedOptions[speciality.name]]?.rupees || 0}
                      </strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
