import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="w-full md:w-2/3 lg:w-full ml-0 md:ml-4">
      <div className="flex  justify-between items-start md:items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">All Posts</h2>
        <a href="#" className="text-purple-600 hover:underline mt-2 md:mt-0">View All</a>
      </div>

      {posts.map((post, index) => (
        <div key={index} className={`mb-4 ${index === 1 ? 'bg-yellow-100 p-4 rounded-md' : ''}`}>
          <div className="flex items-center mb-2">
            <span className="text-purple-600 font-bold">{post.author}</span>
            <span className="mx-2">|</span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-lg font-bold">{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PostList;
