import React from "react";
import { CiCirclePlus } from "react-icons/ci";

function SearchAdmin({ handleClickOpen }) {
  return (
    <div className="flex items-center justify-between p-4">
      <h3>List Categories</h3>
      <input className="border px-4 py-2" placeholder="Search" type="text" />
      <button onClick={handleClickOpen} className="bg-green-600 rounded-full">
        <CiCirclePlus className="text-4xl" />
      </button>
    </div>
  );
}

export default SearchAdmin;
