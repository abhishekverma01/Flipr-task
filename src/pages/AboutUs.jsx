import AuthorCard from "../components/AuthorCard";
import JoinNow from "../components/JoinNow";
import Bloger1 from "../assets/Client-First-IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import Bloger2 from "../assets/Client-First-IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import Bloger3 from "../assets/Client-First-IMAGES/fashion-woman-cute-shoes-.svg";
import Bloger4 from "../assets/Client-First-IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import Bloger5 from "../assets/Client-First-IMAGES/man -with-eyeglasses.svg";
import Bloger6 from "../assets/Client-First-IMAGES/woman-in-blue-shirt.svg";
import Bloger7 from "../assets/Client-First-IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-.svg";
import Bloger8 from "../assets/Client-First-IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg";
import bgImg from "../assets/Client-First-IMAGES/bgImageOfHomePage.svg";
import shape1 from "../assets/Client-First-IMAGES/shape-1.svg";
import shape from "../assets/Client-First-IMAGES/shape.svg";
import handShake from "../assets/Client-First-IMAGES/ground-group-growth-hands-461049.svg";
import yellowShape from "../assets/Client-First-IMAGES/shapes.svg";
import threePersons from "../assets/Client-First-IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other.svg";
import circle from "../assets/Client-First-IMAGES/circle.svg";

function AboutUs() {
  const Authors = [
    {
      Name: "Floyd Miles",
      ImageUrl: Bloger1,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Dianne Russell",
      ImageUrl: Bloger2,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Jenny Wilson",
      ImageUrl: Bloger3,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Lestie Alexander",
      ImageUrl: Bloger4,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Guy Hawkins",
      ImageUrl: Bloger5,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Eleanor Pena",
      ImageUrl: Bloger6,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Robert Fox",
      ImageUrl: Bloger7,
      description: "lorem ipsum dolor",
    },
    {
      Name: "Lacob Jones",
      ImageUrl: Bloger8,
      description: "lorem ipsum dolor",
    },
  ];
  return (
    <div>
      <div className="bg-white">
        <section className="text-center sm:px-24 sm:pt-24 flex flex-col sm:flex-row">
          <div className="sm:w-2/3 sm:px-20 sm:relative pt-20 px-4 top-20 sm:shadow-lg sm:h-[40vh] z-[1] bg-white">
            <h2 className="text-gray-500 uppercase mb-2 ">About Us</h2>
            <h1 className="sm:text-4xl text-2xl font-bold mb-4">
              We are a team of content writers who share their learnings
            </h1>
          </div>
          <p className="text-gray-600 sm:w-1/2 w-[70%] pb-12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </section>
        <section className="relative sm:px-10 px-4">
          <img
            src={bgImg}
            alt="Group of people with a scenic background"
            className="w-full h-[90vh] object-cover"
          />
          <div className="relative md:bottom-[123px] bottom-28 md:left-36 md:w-1/2 flex justify-center items-center bg-secondary">
            <div className="  p-4 text-center">
              <h3 className="sm:text-4xl text-2xl font-bold">12+</h3>
              <p className="text-xs sm:text-lg">Blogs Published</p>
            </div>
            <div className=" p-4 text-center">
              <h3 className="sm:text-4xl text-2xl font-bold">18K+</h3>
              <p className="text-xs sm:text-lg">Views on Finservet</p>
            </div>
            <div className=" p-4 text-center">
              <h3 className="sm:text-4xl text-2xl font-bold">30K+</h3>
              <p className="text-xs sm:text-lg">Total active Users</p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:bottom-[123px] justify-center relative pl-24 md:pl-40 sm:relative md:right-2 right-8 bottom-28 ">
            <img 
              src={shape} 
              alt="Shape" 
            />
            <img 
              src={shape1} 
              alt="Shape 1" 
              className="md:w-72 w-16"
            />
          </div>
          
        </section>

        {/* <!-- Mission and Vision Sections --> */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-12">
          <div className="bg-gray-100 p-6 sm:p-8 rounded shadow-lg">
            <h2 className="text-gray-500 uppercase mb-2">Our Mission</h2>
            <h3 className="text-2xl font-bold mb-4">
              Creating valuable content for creatives all around the world
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing in tellus.
            </p>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 rounded shadow-lg">
            <h2 className="text-gray-500 uppercase mb-2">Our Vision</h2>
            <h3 className="text-2xl font-bold mb-4">
              A platform that empowers individuals to improve
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing in tellus.
            </p>
          </div>
        </section>

        {/* <!-- Team Section --> */}
        <div className="flex items-center justify-center my-10 bg-white px-6 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center">
            <div className="w-full sm:w-1/2 pr-6 sm:pr-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our team of creatives
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="w-full sm:w-1/2 relative mt-6 sm:mt-0">
              <img
                src={handShake}
                alt="Team working together"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 -translate-x-1/2 w-20 h-20">
                <img
                  src={yellowShape}
                  alt="yellow shape decoration"
                  className="w-full h-full sm:block hidden"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Why We Started Section --> */}
        <div className="flex items-center justify-center mb-10 bg-white px-6 sm:px-12">
          <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-1/2 relative">
              <img
                src={threePersons}
                alt="People collaborating"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute top-full left-28 z-10 transform -translate-y-1/2 -translate-x-1/2 w-20 h-20">
                <img
                  src={circle}
                  alt="circle shape decoration"
                  className="w-full h-full sm:block hidden"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 pl-6 sm:pl-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why we started this Blog
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <h2 className="text-center text-2xl font-bold">Authors List</h2>
          <AuthorCard AuthorsData={Authors} />
        </div>
        <JoinNow />
      </div>
    </div>
  );
}

export default AboutUs;
