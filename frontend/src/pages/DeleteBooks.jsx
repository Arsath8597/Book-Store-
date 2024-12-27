import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spring from "../components/spring";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigation("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("See the console");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <BackButton />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Delete Book
        </h1>

        {loading && <Spring />}

        <div className="text-center space-y-6">
          <h3 className="text-xl font-medium text-gray-700">
            Are you sure you want to delete this book?
          </h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Yes, Delete it
            </button>
            <button
              onClick={() => navigation("/")}
              className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBooks;
