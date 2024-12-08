import { Link } from 'react-router-dom';
import img1 from '../assets/Client-First-IMAGES/photo-of-people-doing-handshakes.svg';
import img2 from '../assets/Client-First-IMAGES/photo-of-people-walking-on-hallway-3182811.svg';
import img3 from '../assets/Client-First-IMAGES/photo-of-woman-looking-at-man-3183173.svg';
import img4 from '../assets/Client-First-IMAGES/two-women-in-front-of-dry-erase-board.svg';

const posts = [
    { category: "STARTUP", title: "Design tips for designers that cover everything you need", description: "Duis aute irure dolor in reprehenderit...", image: img4, alt: "A group of designers discussing a project in an office setting" },
    { category: "BUSINESS", title: "How to build rapport with your web design clients", description: "Duis aute irure dolor in reprehenderit...", image: img1, alt: "A team of business professionals having a meeting" },
    { category: "STARTUP", title: "Logo design trends to avoid in 2022", description: "Duis aute irure dolor in reprehenderit...", image: img3, alt: "A group of people discussing logo designs" },
    { category: "TECHNOLOGY", title: "8 Figma design systems you can download for free today", description: "Duis aute irure dolor in reprehenderit...", image: img2, alt: "Two people discussing a project on a tablet" },
    { category: "ECONOMY", title: "Font sizes in UI design: The complete guide to follow", description: "Duis aute irure dolor in reprehenderit...", image: img4, alt: "A designer presenting a project to a client" }
];

function BlogList() {
    return (
        <div className="p-4 mx-5">
  <h1 className="text-2xl sm:text-3xl font-semibold mb-6">All posts</h1>
  <div className="space-y-8">
    {posts.map((post, index) => (
      <Link key={index} to="/blogpost">
        <div className="flex flex-col sm:flex-row items-center space-x-4 cursor-pointer my-10">
          <img className="w-full sm:w-96 h-auto object-cover mb-4 sm:mb-0" src={post.image} alt={post.alt} />
          <div className="w-full sm:w-2/3">
            <p className="text-xl sm:text-2xl text-indigo-600 font-semibold">{post.category}</p>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  <div className="flex gap-5 justify-center items-center mt-8">
    <button className="text-gray-600">&lt; Prev</button>
    <button className="text-gray-600 font-bold">Next &gt;</button>
  </div>
</div>

    );
}

export default BlogList;
