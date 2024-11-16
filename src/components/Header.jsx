import React, { useContext } from "react";
import { Context } from "../context/ContextApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const { data, setData } = useContext(Context);

  const notify = () => toast.success('Successfully Updated', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <div>
      <ToastContainer />
      <div>
        <button
          onClick={() => {
            notify();
            setData({
              fullName: "Abubakar",
              age: "17",
              city: "Quetta",
            });
          }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-auto block mb-4"
        >
          Click Me
        </button>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 mt-4">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            Full Name: <span className="text-blue-600">{data.fullName}</span>
          </div>
          <div className="text-lg font-semibold text-gray-800 mb-2">
            Age: <span className="text-blue-600">{data.age}</span>
          </div>
          <div className="text-lg font-semibold text-gray-800">
            City: <span className="text-blue-600">{data.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
