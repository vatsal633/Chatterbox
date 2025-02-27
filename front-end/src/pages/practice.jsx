import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const Practice = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div>
          <h1 className="text-4xl mb-5 text-white">Select a Language</h1>
        </div>
        <div className="flex max-[532px]:flex-col gap-3 text-white">
          <button
            onClick={() => navigate(`/${username}/practice/c`)}
            className="bg-[#111317] px-6 text-3xl rounded-md"
          >
            C
          </button>
          <button
            onClick={() => navigate(`/${username}/practice/cpp`)}
            className="bg-[#111317] p-4 text-3xl rounded-md"
          >
            C++
          </button>
          <button
            onClick={() => navigate(`/${username}/practice/python`)}
            className="bg-[#111317] p-4 text-3xl rounded-md"
          >
            Python
          </button>
          <button
            onClick={() => navigate(`/${username}/practice/javascript`)}
            className="bg-[#111317] p-4 text-3xl rounded-md"
          >
            JavaScript
          </button>
        </div>
      </div>
    </>
  );
};

export default Practice;
