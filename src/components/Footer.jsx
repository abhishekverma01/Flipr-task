import { Link } from 'react-router-dom';
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';

const Footer = () => (
  <div className="flex flex-col items-center bg-[#232332] text-white">
    {/* Header Section */}
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-8 px-12">
      <div className="text-2xl font-bold mb-4 md:mb-0">&#123;Finsweet</div>
      <nav className="space-y-2 md:space-y-0 md:space-x-6 list-none flex flex-col md:flex-row items-center">
        <li><Link to="/" className="hover:text-secondary">Home</Link></li>
        <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
        <li><Link to="/about-us" className="hover:text-secondary">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-secondary">Contact us</Link></li>
        <li><Link to="/Privacy-Policy" className="hover:text-secondary">Privacy Policy</Link></li>
      </nav>
    </header>

    {/* Main Content Section */}
    <main className="flex flex-col md:flex-row items-center justify-between w-[90vw] py-10 md:py-16 bg-[#2C2C3B] px-6 md:px-10 text-center md:text-left">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0 md:w-1/2">
        Subscribe to our newsletter to get the latest updates and news
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[40vw] space-y-4 md:space-y-0">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="p-3 outline-none text-black bg-[#2b2b3b] border-2 border-slate-500 w-full md:w-[70%]"
        />
        <button className="bg-secondary text-black font-sans px-6 py-3 md:px-9">
          Subscribe
        </button>
      </div>
    </main>

    {/* Footer Section */}
    <footer className="w-full flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-14 space-y-4 md:space-y-0">
  <div className="text-center md:text-left">
    <p>Finstreet 118 2561 Fintown</p>
    <p>Hello@finsweet.com 020 7993 2905</p>
  </div>
  <div className="flex space-x-7 mt-4 md:mt-0 pr-1">
    <img src={Facebook} alt="Facebook" className="opacity-50  bg-[#fff] rounded-full" />
    <img src={Twitter} alt="Twitter" className="opacity-50 bg-[#fff] rounded-full" />
    <img src={Instagram} alt="Instagram" className="opacity-50 bg-[#fff] rounded-full" />
    <img src={LinkedIn} alt="LinkedIn" className="opacity-50 bg-[#fff] rounded-full" />
  </div>
</footer>

  </div>
);

export default Footer;
