import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import CategoryList from './components/CategoryList';  // Updated import for CategoryList
import Author from './pages/Author';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogPost from './pages/BlogPost';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

AOS.init();


  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogpost" element={<BlogPost />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/category/:categoryName" element={<CategoryList />} /> 
            <Route path="/author" element={<Author />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
