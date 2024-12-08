import image from "../assets/Client-First-IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg";
import img from "../assets/Client-First-IMAGES/Image.svg";
import startup from "../assets/Client-First-icons/startup.svg";
import JoinNow from "../components/JoinNow";
import WhatToReadNext from "../components/WhatToReadNext";
function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col mb-4 mt-20 w-full lg:w-2/4 mx-auto">
        <div className="flex items-center mb-4">
          <img
            src={img}
            alt="Profile picture of the author"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="text-blue-600 font-bold">Andrew Jonson</p>
            <p className="text-gray-500 text-sm md:text-base">Posted on 27th January 2022</p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="text-purple-600 mb-6 flex items-center">
            <img src={startup} alt="startup image" className="w-8 h-8 mr-2" /> Startup
          </p>
        </div>
      </div>

      <img
        src={image}
        alt="A group of people working together in an office"
        className="w-full mb-6"
      />

      <div className="px-4 sm:px-8 md:px-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h1 className="text-2xl font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <WhatToReadNext />
      <JoinNow />
    </div>
  );
}

export default BlogPost;
