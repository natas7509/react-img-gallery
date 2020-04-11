import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded text-center overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="text-pink-600 text-xl mb-2">Photo by {image.user}</div>

        <ul className="text-gray-700">
          <li>
            <strong>Views:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
          <li>
            <strong>Favorites:</strong> {image.favorites}
          </li>
          <li>
            <strong>Comments:</strong> {image.comments}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded px-4 py-1 text-sm font-semibold text-gray-700 mr-3 mb-2"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
