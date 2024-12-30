import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import planimag from "../assets/2999.jpeg";
import { GiCrown } from "react-icons/gi";
import { FiFileText } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { PiChatTextFill } from "react-icons/pi";
import { getAllSubjects } from '../features/Subject/SubjectAction';

const AllNotes = () => {
  const { subject, pagination, loading } = useSelector((state) => state.subject);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  // Fetch initial data
  useEffect(() => {
    dispatch(getAllSubjects({ page: 1 }));
  }, [dispatch]);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        // Only fetch more data if there's a next page and we're not already fetching
        if (pagination?.next && !isFetching) {
          setIsFetching(true);
          dispatch(getAllSubjects({ page: pagination.next }))
            .then(() => setIsFetching(false))
            .catch(() => setIsFetching(false));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pagination, isFetching, dispatch]);

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-blue-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Golden Med Notes</h1>
          <nav className="flex gap-6">
            <a href="#about" className="text-white hover:text-yellow-500">About</a>
            <a href="#plans" className="text-white hover:text-yellow-500">Plans</a>
            <a href="#contact" className="text-white hover:text-yellow-500">Contact</a>
          </nav>
          <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded">Contact Us</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-white text-5xl font-bold">Golden Med Notes</h2>
          <p className="text-yellow-400 mt-4 text-lg">NEET PG Subscription Plans</p>
        </div>
      </section>

      {/* Subscription Plan Section */}
      <section className="py-16 bg-white" id="plans">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <img src={planimag} alt="Plan" className="rounded-lg shadow-lg min-w-2xl" />
          </div>
          <div>
            <h3 className="text-yellow-500 text-xl font-bold">NEET PG Subscription Plans</h3>
            <h1 className="text-blue-800 text-4xl font-bold mt-4">Golden Med Elite Plan</h1>
            <h2 className="text-2xl mt-4">The power of preparation in your hand</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span><GiCrown size={30} /></span>
                <div>
                  <p>Downloadable PDFs</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span><IoIosPeople size={30} /></span>
                <p>Handpicked Mentor Guidance</p>
              </li>
              <li className="flex items-start gap-3">
                <span><FiFileText size={30} /></span>
                <p>Monthly MCQ Tests</p>
              </li>
              <li className="flex items-start gap-3">
                <span><PiChatTextFill size={30} /></span>
                <p>Group Chat Access</p>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-yellow-500 text-3xl font-bold">₹2999</p>
              <button className="bg-blue-800 text-white px-6 py-3 rounded-lg mt-4">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-center text-blue-800 text-2xl font-bold">
            Total {pagination?.count || 0} Subjects - {pagination?.count * 30 || 0} Pages
          </h3>
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Array.isArray(subject.data) && subject.data.length > 0 ? (
                subject.data.map((book, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
                    <img
                      src={book.banner[0]?.secure_url}
                      alt={book.name}
                      className="rounded-lg mb-4"
                    />
                    <h4 className="text-blue-800 text-xl font-bold">{book.name}</h4>
                    <p className="text-gray-600 text-sm mt-2">{book.pages} Pages</p>
                    <p className="text-blue-800 text-lg font-semibold mt-2">₹{book.discountedPrice}</p>
                    <button className="bg-yellow-500 text-blue-800 px-4 py-2 rounded mt-4">Buy Now</button>
                  </div>
                ))
              ) : (
                <div className="text-center col-span-full">No subjects available.</div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllNotes;
