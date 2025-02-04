import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeSubject = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.notes);

  console.log(notes);
  return (
    <div className=" bg-black text-white">
      <h1 className="text-5xl flex justify-center items-center">
        {" "}
        Our Subjects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 container mx-auto my-10 px-4">
        {Array.isArray(notes) &&
          notes?.slice(0, 6).map((note) => (
            <div className="" key={note._id}>
              <img
                src={note?.subject?.banner[0]?.secure_url}
                className="lg:h-64"
              />
              <h1> {note.name}</h1>
            </div>
          ))}
      </div>

      <div className="flex justify-end items-center px-10 py-2">
        <Link to={`/notes`} className="px-4 py-2 bg-yellow-700 rounded-md">
          {" "}
          View All{" "}
        </Link>
      </div>
    </div>
  );
};

export default HomeSubject;
