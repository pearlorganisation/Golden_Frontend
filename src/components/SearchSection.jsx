import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      if (data.search.trim() == "") return;
      navigate(`/search?query=${data.search}`);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      className="relative bg-cover object-contain bg-center h-[300px]  lg:h-[600px] flex items-center justify-center px-4"
      style={{
        backgroundImage: `url('https://5.imimg.com/data5/SELLER/Default/2023/9/343504636/WM/ZR/OQ/27729467/medical-books-printing-services-500x500.jpg')`,
      }}
    >
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white p-4 rounded-lg shadow-lg md:w-[50%] w-[80%] flex items-center gap-3"
      >
        <div className="flex-row">
          <input
            type="text"
            // value={search}

            {...register("search", {
              required: "Search field cannot be empty",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Subject ?"
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
