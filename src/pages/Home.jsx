import Section from "../components/Section";
import Features from "../components/Features";
import Category from "./Category";
import Section1 from "../components/Section1";
import JoinNow from "../components/JoinNow";
import Section2 from "../components/Section2";
import startup from "../assets/Client-First-icons/startup.svg";
import business from "../assets/Client-First-icons/business.svg";
import economy from "../assets/Client-First-icons/economy.svg";
import technology from "../assets/Client-First-icons/technology.svg";
import AuthorCard from "../components/AuthorCard";
import Bloger1 from "../assets/Client-First-IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg";
import Bloger2 from "../assets/Client-First-IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg";
import Bloger3 from "../assets/Client-First-IMAGES/fashion-woman-cute-shoes-.svg";
import Bloger4 from "../assets/Client-First-IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg";
import Logo1 from "../assets/Client-First-IMAGES/Logo 1.svg";
import Logo2 from "../assets/Client-First-IMAGES/Logo 2.svg";
import Logo3 from "../assets/Client-First-IMAGES/Logo 3.svg";
import Logo4 from "../assets/Client-First-IMAGES/Logo 4.svg";
import Logo5 from "../assets/Client-First-IMAGES/Logo 5.svg";
import BgImage from "../assets/Client-First-IMAGES/bgImageOfHomePage.svg";

export const defaultCategories = [
  { category: "Business", imageUrl: business },
  { category: "Startup", imageUrl: startup },
  { category: "Economy", imageUrl: economy },
  { category: "Technology", imageUrl: technology },
];

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
];

const Home = () => (
  
  <>
    <Section />
    <Features />
    <Section1 />

    <h2 className="text-2xl font-bold text-center mt-10">Choose A Category</h2>
    <div className="px-4 sm:px-6 lg:px-8">
      <Category Category={defaultCategories} />
    </div>

    {/* section */}
    <section data-aos="fade-up" className="px-6 mt-12 sm:mt-24 sm:px-16">
        <div className="relative w-full">
          <img className=" sm:w-[70%] mb-8 sm:mb-0" src={BgImage} alt="" />
          <div className="sm:absolute sm:bottom-0 sm:w-[40%] right-0 bg-white sm:p-20 shadow-sm flex flex-col gap-3">
            <h1>WHY WE STARTED</h1>
            <h2 className="text-xl font-semibold sm:text-3xl">It started out as a simple idea and evolved into our passion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas aperiam non amet sint vitae modi! Incidunt consequatur dicta voluptatibus?</p>
            <div className="mt-2">
              {/* <Button text="Discover Our Story >" onClickHandler={() => navigate("/about-us")} /> */}
            </div>
          </div>
        </div>
      </section>

    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-center text-2xl font-bold">Authors List</h2>
      <AuthorCard AuthorsData={Authors} />
    </div>

    <div className="flex px-8 md:pl-14 flex-col sm:flex-row md:flex-row gap-5 sm:gap-0 md:gap-2 lg:gap-12 mt-14 mb-6">
      <div className="">
        <p className="text-gray-400 font-bold text-1xl">We Are</p>
        <h4 className="text-2xl font-bold">Featured in</h4>
      </div>
      <div className="flex items-center md:items-end md:pb-2 flex-wrap gap-4 md:gap-0 sm:gap-0 sm:justify-between flex-wrap sm:w-[80%] w-[100%]">
      <img src={Logo1} alt="Logo1" className="sm:w-[15%] w-[90px]" />
      <img src={Logo2} alt="Logo2" className="sm:w-[15%] w-[90px]" />
      <img src={Logo3} alt="Logo3" className="sm:w-[15%] w-[90px]" />
      <img src={Logo4} alt="Logo4" className="sm:w-[15%] w-[90px]" />
      <img src={Logo5} alt="Logo5" className="sm:w-[15%] w-[90px]" />
      </div>
    </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <Section2 />
    </div>

    <div className="px-4 sm:px-6 lg:px-8">
      <JoinNow />
    </div>
  </>
);

export default Home;
