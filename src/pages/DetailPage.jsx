  import React, { useEffect, useState } from "react";
  import { FaBars } from "react-icons/fa";
  import { IoIosClose } from "react-icons/io";
  import { useDispatch, useSelector } from "react-redux";
  // import { getAllSubjects } from "../features/Subject/SubjectAction";
  import { getAllnotes } from "../features/notes/notesAction";
import { Pagination } from "../components/pagination/pagination";

  const DetailPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [globalDuration, setGlobalDuration] = useState("");
    const [selectedSpeciality, setSelectedSpeciality] = useState("Overview");

  //   [{
  //     "subjects": [
  //       {
  //         "subject": "Biochem",
  //         "pages": 25,
  //         "faculty": ["Zainab ma'am (Cerebellum)", "Smily ma'am (Cerebellum)"]
  //       },
  //       {
  //         "subject": "Physiology",
  //         "pages": 30,
  //         "faculty": ["Soumen sir (Prepladder)", "Krishna Kumar sir (Marrow)"]
  //       },
  //       {
  //         "subject": "Pathology",
  //         "pages": 39,
  //         "faculty": ["Sparsh sir (Cerebellum)", "Preeti ma'am (Prepladder)"]
  //       },
  //       {
  //         "subject": "Micro",
  //         "pages": 32,
  //         "faculty": ["Sonu Panwar sir (Prev Prepladder)", "Preeti ma'am (Prepladder)"]
  //       },
  //       {
  //         "subject": "Pharma",
  //         "pages": 37,
  //         "faculty": ["Govind Garg sir (Cerebellum)", "Nikita ma'am", "Zainab ma'am"]
  //       },
  //       {
  //         "subject": "Forensic",
  //         "pages": 20,
  //         "faculty": ["JP sir (Marrow)", "Nikita ma'am"]
  //       },
  //       {
  //         "subject": "ENT",
  //         "pages": 22,
  //         "faculty": ["Manisha Budhiraja (Marrow)"]
  //       },
  //       {
  //         "subject": "Ophthal",
  //         "pages": 21,
  //         "faculty": ["Ruchi Rai"]
  //       },
  //       {
  //         "subject": "PSM",
  //         "pages": 50,
  //         "faculty": ["Vivek Jain (Cerebellum)", "Neha Taneja (Prepladder)"]
  //       },
  //       {
  //         "subject": "Medicine",
  //         "pages": 107,
  //         "faculty": ["Deepak Marwah (Prepladder)", "Zainab ma'am"]
  //       },
  //       {
  //         "subject": "Surgery",
  //         "pages": 92,
  //         "faculty": ["Prithesh Singh (Prepladder)", "Rohan sir (Marrow)"]
  //       },
  //       {
  //         "subject": "OBG",
  //         "pages": 58,
  //         "faculty": ["Sakshi ma'am (Marrow)", "Prassan Viji (Prepladder)"]
  //       },
  //       {
  //         "subject": "Anesthesia",
  //         "pages": 14,
  //         "faculty": ["Swati ma'am (Prev Prepladder)"]
  //       },
  //       {
  //         "subject": "Derm",
  //         "pages": 20,
  //         "faculty": ["Chestna Agarwal (DAMS)", "Zainab ma'am"]
  //       },
  //       {
  //         "subject": "Ortho",
  //         "pages": 48,
  //         "faculty": ["Apurv sir (Cerebellum)"]
  //       },
  //       {
  //         "subject": "Psychiatry",
  //         "pages": 17,
  //         "faculty": ["Praveen sir (Cerebellum)"]
  //       }
  //     ],
  //     "totalSubjects": 16,
  //     "totalPages": 632
  //   }
  // ]  


    const dispatch = useDispatch();
    const { notes, pagination } = useSelector((state) => state.notes);
    console.log(pagination,"page")
    const [page, setPage] = useState(0);

  const totalPages = Math.ceil((pagination?.count || 1) / (pagination?.limit || 1));

  const handlePageChange = (newPage) => {
    if (newPage >0 && newPage <=totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    dispatch(getAllnotes({ page }));
  }, [dispatch, page]);


    const specialties = notes || [];
    const content = specialties.reduce((acc, speciality) => {
      acc[speciality.name] = {
        title: speciality.name,
        description: `Pages: ${speciality.pages || "N/A"}. Faculty: ${
          speciality.faculty.map(f=> f.name) || "N/A"
        }.`,
      };
      return acc;
    }, {});

    const selectMonth = ["1month", "6month"];
    const Month = {
      "1month": { rupees: 399 },
      "6month": { rupees: 1499 },
    };

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
      setSelectedOptions(() =>
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

        {/* Sidebar Toggle Button */}
        <button
          className="lg:hidden p-2 bg-blue-500 text-white fixed top-4 left-4 z-50 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoIosClose /> : <FaBars />}
        </button>

        {/* Content Section */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Specialty Overview */}
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
                  {speciality?.banner?.secure_url && (
                    <div>
                      <img
                        src={speciality.banner.secure_url}
                        alt={speciality.name}
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                    </div>
                  )}
                  <h1></h1>

                  {/* Dropdown for Duration
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
                  </div> */}

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
                        ₹
                        {Month[selectedOptions[speciality.name]]?.rupees || 0}
                      </strong>
                    </p>
                    <p className="text-base lg:text-lg text-gray-700">
                    Discounted Price:   
                    <strong className="text-green-600">{speciality.discountedPrice}</strong></p>
                  </div>
                  <button
    className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-green-500 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center mt-4 w-full "
  >
    <span className="mr-2">Buy Now</span>
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>


                </div>
                
              ))}
            </div>
          </div>
            <div>         <Pagination  paginate={pagination }  currentPage={page}     totalPages={totalPages} handlePageClick={handlePageChange} /></div>
        </div>
      
      </div>
    
         </>
    );
  };

  export default DetailPage;
