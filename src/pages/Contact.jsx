
function Contact() {
  return (
    <div className="max-w-lg mx-auto p-6">
    <h2 className="text-center text-sm font-bold">CONTACT US</h2>
    <h1 className="text-center text-2xl font-bold text-gray-800 mt-2">Lets Start a Conversation</h1>
    <p className="text-center text-gray-600 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
    <div className="bg-purple-700 text-white p-6 mt-6">
      <div className="flex flex-col sm:flex-row justify-between sm:space-x-6">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-sm font-semibold">Working hours</h3>
          <p className="mt-2">
            <span className="block font-bold">Monday To Friday</span>
            <span className="block">9:00 AM to 8:00 PM</span>
            <span className="block text-sm">Our Support Team is available 24/7</span>
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contact Us</h3>
          <p className="mt-2">
            <span className="block font-bold">020 7993 2905</span>
            <span className="block">hello@finsweet.com</span>
          </p>
        </div>
      </div>
    </div>
    <form className="mt-6 space-y-4">
      <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300" />
      <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300" />
      <select className="w-full p-3 border border-gray-300">
        <option>Query Related</option>
      </select>
      <textarea placeholder="Message" className="w-full p-3 border border-gray-300 h-32"></textarea>
      <button type="submit" className="w-full p-3 bg-secondary text-black font-semibold">
        Send Message
      </button>
    </form>
  </div>
  
  )
}

export default Contact