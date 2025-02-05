import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const [search, setSearch] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    try {
      e.preventDefault();
      if(search.trim() == "") return;
      navigate(`/search/query=${search}`)

      console.log("Response:", res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      className="relative bg-cover object-contain bg-center h-[600px] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/medical-stestoscope-protective-mask-blue-background-concept-medicine-nurse-hospital-safety-epidemic_164357-1098.jpg?ga=GA1.1.1863103195.1731134780&semt=ais_hybrid')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white p-4 rounded-lg shadow-lg w-full md:w-[50%] max-w-sm flex items-center gap-3"
      >
        <div className="flex-grow">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            {...register("search", { required: "Search field cannot be empty" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search... here?"
          />
          {errors.search && (
            <p className="text-red-500 text-sm mt-1">{errors.search.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-white w-24 py-2 rounded-lg text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchSection;
