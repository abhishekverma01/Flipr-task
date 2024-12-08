import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Facebook from '../assets/Client-First-icons/facebook.svg';
import Twitter from '../assets/Client-First-icons/twitter.svg';
import Instagram from '../assets/Client-First-icons/instagram.svg';
import LinkedIn from '../assets/Client-First-icons/linkedin.svg';

function AuthorCard({ AuthorsData }) {
  const navigate = useNavigate();

  const handleAuthorClick = (author) => {
    navigate(`/author`, { state: { author } });
  };

  return (
    <div className="mt-8 flex flex-wrap gap-6 md:grid md:grid-cols-4 grid-cols-1 px-6">
      {AuthorsData.map((author) => (
        <div
          key={author.Name} // Use a unique property for the key
          onClick={() => handleAuthorClick(author)}
          className="p-4 bg-backgroundLight rounded shadow hover:scale-105 flex flex-col justify-center items-center transition transform hover:bg-backgroundLightYellow cursor-pointer flex-wrap sm:w-55"
        >
          <img className="sm:w-28 sm:h-24 h-20 w-20 mb-6" src={author.ImageUrl} alt={author.Name} />
          <h2 className="text-2xl font-semibold text-primary">{author.Name}</h2>
          <p>{author.description}</p>
          <div className="flex space-x-4 mt-4">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      ))}
    </div>
  );
}

AuthorCard.propTypes = {
  AuthorsData: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      ImageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AuthorCard;
