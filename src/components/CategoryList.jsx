import { useParams, useNavigate } from 'react-router-dom';
import startup from '../assets/Client-First-icons/startup.svg';
import business from '../assets/Client-First-icons/business.svg';
import economy from '../assets/Client-First-icons/economy.svg';
import technology from '../assets/Client-First-icons/technology.svg';
import twoWomen from '../assets/Client-First-IMAGES/two-women-in-front-of-dry-erase-board.svg';
// eslint-disable-next-line
export const defaultCategories = [
  { category: 'Business', imageUrl: business },
  { category: 'Startup', imageUrl: startup },
  { category: 'Economy', imageUrl: economy },
  { category: 'Technology', imageUrl: technology },
];

const blogData = [
  { title: 'Top 6 Free Website Mockup Tools 2022', category: 'Startup', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Step-by-Step Guide to Choosing Great Font Pairs', category: 'Startup', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Ten free google fonts that you should use', category: 'Startup', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'What did I learn from doing 50+ design sprints', category: 'Startup', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Top 6 Free Website Mockup Tools 2022', category: 'Business', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Step-by-Step Guide to Choosing Great Font Pairs', category: 'Business', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Ten free google fonts that you should use', category: 'Business', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'What did I learn from doing 50+ design sprints', category: 'Business', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Top 6 Free Website Mockup Tools 2022', category: 'Economy', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Step-by-Step Guide to Choosing Great Font Pairs', category: 'Economy', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Ten free google fonts that you should use', category: 'Economy', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'What did I learn from doing 50+ design sprints', category: 'Economy', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Top 6 Free Website Mockup Tools 2022', category: 'Technology', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Step-by-Step Guide to Choosing Great Font Pairs', category: 'Technology', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'Ten free google fonts that you should use', category: 'Technology', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  { title: 'What did I learn from doing 50+ design sprints', category: 'Technology', description: 'Lorem ipsum dolor sit amet.', imgUrl: twoWomen },
  
];
function CategoryList() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  // Filter blogs by selected category
  const filteredBlogs = blogData.filter((blog) => blog.category.toLowerCase() === categoryName?.toLowerCase());

  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white mt-5 max-w-6xl mx-auto">
        <header className="text-center mb-8 bg-backgroundLight py-8 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{categoryName}</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <p className="text-gray-400 mt-1 text-xs md:text-sm">BLOG &gt; {categoryName?.toUpperCase()}</p>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8 px-4">
          {/* Main content - Blog list */}
          <div className="w-full lg:w-2/3">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <div key={index} className="flex mb-8 fle">
                  <img className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover mr-4" src={blog.imgUrl} alt={blog.title} />
                  <div>
                    <p className="text-purple-600 font-bold">{blog.category?.toUpperCase()}</p>
                    <h2 className="text-lg md:text-xl font-bold mt-2">{blog.title}</h2>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">{blog.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No blogs available in this category.</p>
            )}
          </div>

          {/* Sidebar - Categories and Tags */}
          <div className="w-full lg:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {defaultCategories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(category.category)}
                    className="flex items-center text-gray-700 hover:bg-secondary p-3 gap-3 font-bold rounded-sm cursor-pointer"
                  >
                    <img src={category.imageUrl} alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm bg-white" /> {category.category}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">All Tags</h3>
              <div className="flex flex-wrap">
                {['Business', 'Experience', 'Startup', 'Technology', 'Marketing', 'Life'].map((tag) => (
                  <span key={tag} className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
