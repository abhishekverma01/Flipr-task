import right from "../assets/Client-First-icons/right-arrow.svg";
import left from "../assets/Client-First-icons/left-arrow.svg";
import profileImg from "../assets/Client-First-IMAGES/Image.svg";
function Section2() {
  return (
    <div className="flex w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-[#fdf6e4] p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg w-full flex flex-col lg:flex-row my-10">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Section */}
          <div className="lg:p-16 p-6 lg:border-r border-gray-300 w-full lg:w-2/3 mb-6 lg:mb-0">
            <h4 className="text-sm text-gray-600 mb-2">TESTIMONIALS</h4>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:w-56">
              What people say about our blog
            </h2>
            <p className="text-gray-600 lg:w-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:p-16 p-6 w-full">
            <p className="text-base sm:text-lg lg:text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center mt-4 space-y-4 sm:space-y-0">
              {/* Profile Info */}
              <div className="flex items-center">
                <img
                  src={profileImg}
                  alt="Profile picture of Jonathan Vallem"
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mr-4"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base lg:text-lg">
                    Jonathan Vallem
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                    New York, USA
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <img
                  src={left}
                  alt=""
                  className="w-10 h-10 p-2 rounded-full bg-gray-500 sm:w-10 sm:h-10 md:w-12 md:h-12 "
                />
                <img
                  src={right}
                  alt=""
                  className="w-10 h-10 p-2 rounded-full bg-black sm:w-10 sm:h-10 md:w-14 md:h-14 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
