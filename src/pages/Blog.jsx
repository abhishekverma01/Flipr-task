import JoinNow from '../components/JoinNow';
import Category from './Category';
import BlogList from '../components/BlogList';
import startup from '../assets/Client-First-icons/startup.svg';
import business from '../assets/Client-First-icons/business.svg';
import economy from '../assets/Client-First-icons/economy.svg';
import technology from '../assets/Client-First-icons/technology.svg';
import img from '../assets/Client-First-IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling.svg';


export const defaultCategories = [
  { category: 'Business', imageUrl: business },
  { category: 'Startup', imageUrl: startup },
  { category: 'Economy', imageUrl: economy },
  { category: 'Technology', imageUrl: technology},
];
const Blog = () => (
  <div>
  <div className="p-10 md:p-14 bg-backgroundSoft flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
  <div className="flex-1">
    <p className="text-sm text-gray-500 uppercase">Featured Post</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-2">Step-by-step guide to choosing great font pairs</h2>
    <p className="text-sm text-gray-500 mt-2">By <span className="text-blue-600">John Doe</span> | May 23, 2022</p>
    <p className="text-gray-600 mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <button className="mt-6 px-4 py-2 bg-secondary font-bold">Read More &gt; </button>
  </div>
  <div className="flex-shrink-0 w-full lg:w-96">
    <img className="w-full h-auto object-cover" src={img} alt="Person working at a desk with multiple monitors in a modern office setting" />
  </div>
</div>

    <BlogList/>
    <h2 className='text-2xl font-bold relative pl-10'>All Categories</h2>
   
    <Category  Category={defaultCategories}/>
    <JoinNow/>
  </div>
);

export default Blog;
