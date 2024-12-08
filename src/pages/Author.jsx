import img from "../assets/Client-First-IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg";
import shape1 from "../assets/Client-First-IMAGES/shape-1.svg";
import shape from "../assets/Client-First-IMAGES/shape.svg";
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';
import mirrorHigh from "../assets/Client-First-IMAGES/stained-glass-high-rise-building.svg";
import manBlackCrew from "../assets/Client-First-IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt.svg";

function Author() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="bg-[#F4F4F4] p-6 shadow-md flex items-center space-x-6 flex-col sm:flex-row">
        <img
          src={img}
          alt="Profile picture of a smiling person wearing sunglasses"
          className="w-auto h-52 sm:h-52 sm:w-52 object-cover"
        />
        <div className="mt-4 sm:mt-0">
        <h1 className="text-3xl font-bold">Hey there, I&apos;m Andrew Johnson and welcome to my Blog</h1>
        <p className="text-gray-600 mt-2 sm:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
          </p>
          <div className="social-links mt-4 flex gap-5 justify-center sm:justify-start">
            <a href="#"><img src={Facebook} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src={Twitter} alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src={Instagram} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" /></a>
          </div>
        </div>
      </header>

      <div className="flex justify-center relative">
        <img 
          src={shape} 
          alt="Shape" 
        />
        <img 
          src={shape1} 
          alt="Shape 1" 
          className="md:w-72 w-28"
        />
      </div>

      <main className="mt-12">
        <h2 className="text-2xl font-bold mb-6">My Posts</h2>
        <div className="space-y-12">
          <article className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
            <img
              src={mirrorHigh}
              alt="Abstract image with geometric shapes"
              className="w-full sm:w-52 h-52 object-cover"
            />
            <div className="flex-1">
              <span className="text-purple-500 font-bold">BUSINESS</span>
              <h3 className="text-xl font-bold mt-2">Font sizes in UI design: The complete guide to follow</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </article>

          <article className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0">
            <img
              src={manBlackCrew}
              alt="Group of people working together in an office"
              className="w-full sm:w-52 h-52 object-cover"
            />
            <div className="flex-1">
              <span className="text-blue-500 font-bold">ECONOMY</span>
              <h3 className="text-xl font-bold mt-2">How to build rapport with your web design clients</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Author;