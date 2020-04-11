import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm px-3">
        <div className="flex items-center border-b border-b-2 border-pink-600 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search image..."
          />
          <button
            className="flex-shrink-0 bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 
            text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
            <a href="https://www.jondarlingdev.com"></a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
