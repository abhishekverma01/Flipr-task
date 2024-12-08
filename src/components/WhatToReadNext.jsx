import React from 'react';
import img from '../assets/Client-First-IMAGES/two-women-in-front-of-dry-erase-board.svg';
import img1 from '../assets/Client-First-IMAGES/photo-of-people-doing-handshakes.svg';
import img2 from '../assets/Client-First-IMAGES/photo-of-woman-looking-at-man-3183173.svg';

const recommendedArticles = [
  {
    imgSrc: img,
    imgAlt: "People discussing in a meeting room",
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    imgSrc: img1,
    imgAlt: "Group of people working on laptops around a table",
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    imgSrc: img2,
    imgAlt: "Two people having a discussion in an office",
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
];

function WhatToReadNext() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">What to Read Next</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedArticles.map((article, index) => (
          <div key={index} className="border p-4">
            <img src={article.imgSrc} alt={article.imgAlt} className="w-full mb-4"/>
            <p className="text-sm text-gray-500 mb-2">
              By <span className="text-blue-600">{article.author}</span> | {article.date}
            </p>
            <h2 className="text-lg font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatToReadNext;
