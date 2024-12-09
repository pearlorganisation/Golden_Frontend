import axios from "axios";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("Overview");

  // fetched subjects from API

  const [isLoading, setIsLoading] = useState(false);

  const [notes, setNotes] = useState(null);

  const [subjects, setSubjects] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/notes`)
      .then((res) => {
        setNotes(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log("notes", notes);
  }, [notes]);

  console.log(notes, "my notes");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/subject`)
      .then((res) => {
        setSubjects(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("subjects", subjects);
  }, [subjects]);

  console.log(subjects, "my subjects");

  const specialties = [
    "Overview",
    "Miller's Series",
    "Anesthesia Machine and Work",
    "Basic and Advanced Airway",
    "Basics of Anesthesia",
    "Monitoring in Anesthesia",
    "Clinical Anesthesia",
    "Perioperative Management",
    "Cardiac Anesthesia",
    "Thoracic Anesthesia",
    "Neuroanesthesia",
    "Obstetric Anesthesia",
    "Pediatric Anesthesia",
    "Onco Anesthesia",
  ];

  const content = {
    Overview: {
      title: "Anesthesia",
      description: `
          Anesthesia Package covers 20 specialties into a single package at a discounted price. It combines all aspects from basic to advanced lectures in anesthesia including machines, physics, pharmacology, anatomy, physiology, monitoring, mechanical ventilation, and more. 
          The category contains 748 video lectures, 20 sub-specialties.`,
      videoCount: 748,
      subSpecialties: 20,
    },
    "Miller's Series": {
      title: "Anesthesia 2",
      description: `
      Anesthesia Package covers 20 specialties into a single package at a discounted price. It combines all aspects from basic to advanced lectures in anesthesia including machines, 
     `,
      videoCount: 748,
      subSpecialties: 20,
    },
    // Ad
  };
  const [selectedOption, setSelectedOption] = useState("1month"); // Default selected option

  const selectMonth = ["1month", "6month"];
  const Month = {
    "1month": {
      rupees: 399,
    },
    "6month": {
      rupees: 1500,
    },
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        {/*
          {specialties.map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 rounded ${
                selectedSpeciality === item
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setSelectedSpeciality(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div> */}

        <div className="w-1/4 bg-gray-100 border-r">
          <h2 className="text-xl font-bold px-4 py-2">Sub Specialities</h2>
          <ul className="space-y-2 px-4">
            {specialties.map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 rounded ${
                  selectedSpeciality === item
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-200"
                }`}
                onClick={() => setSelectedSpeciality(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Content Area */}
        <div className="w-3/4">
          <div className=" bg-black text-white p-6 h-[450px] ">
            <h1 className="text-3xl font-bold mb-4">
              {content[selectedSpeciality]?.title || selectedSpeciality}
            </h1>
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Specialty"
                className="w-48 h-32 rounded-lg shadow-lg mr-4"
              />
              <div>
                <p className="text-lg mb-2">
                  {content[selectedSpeciality]?.description ||
                    "Details about this specialty will appear here."}
                </p>
                <div className="flex items-center gap-4">
                  <button className="bg-yellow-400 text-black py-2 px-4 rounded font-bold">
                    Purchase this category
                  </button>
                  <button className="bg-green-500 py-2 px-4 rounded font-bold">
                    Share
                  </button>
                </div>
              </div>
            </div>
            <p className="text-yellow-300 font-bold">
              The category contains{" "}
              {content[selectedSpeciality]?.videoCount || "N/A"} video lectures,{" "}
              {content[selectedSpeciality]?.subSpecialties || "N/A"}{" "}
              sub-specialties.
            </p>
          </div>
          <div className="ring ring-gray-50 px-4 ">
            <div className="text-3xl text-[#333333]">PDf</div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Select Duration</h3>
              {/* Dropdown */}
              <select
                className="border rounded w-32 p-2 text-lg"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {selectMonth.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* Display Selected Price */}
              <div className="mt-4">
                <p className="text-lg">
                  Selected Plan: <strong>{selectedOption}</strong>
                </p>
                <p className="text-lg">
                  Price: <strong>₹{Month[selectedOption].rupees}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
