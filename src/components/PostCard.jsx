import React from 'react';

const PostCard = ({ imageUrl, author, date, title, description, onReadMore }) => {
  return (
    <div className="w-full md:w-3/4 lg:w-full bg-white p-4 shadow-md rounded-lg mx-auto">
  <div className="mb-4 -mt-2">
    <h2 className="text-xl sm:text-2xl font-bold">Featured Posts</h2>
  </div>
  
  {/* Image */}
  <img
    src={imageUrl}
    alt={title}
    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover mb-4 rounded-md"
  />

  {/* Author and Date */}
  <div className="flex items-center mb-2">
    <span className="text-purple-600 font-bold">{author}</span>
    <span className="mx-2">|</span>
    <span className="text-gray-500">{date}</span>
  </div>

  {/* Title */}
  <h2 className="text-lg sm:text-xl font-bold mb-2">{title}</h2>
  
  {/* Description */}
  <p className="text-gray-600 mb-4">{description}</p>
  
  {/* Button */}
  <button
    className="bg-secondary px-6 sm:px-8 py-2 font-bold rounded-sm hover:bg-yellow-600 transition"
    onClick={onReadMore}
  >
    Read More &gt;
  </button>
</div>

  );
};

export default PostCard;
