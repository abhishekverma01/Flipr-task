import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Category({ Category }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 mx-12">
      {Category.map(({ category, imageUrl }) => (
        <div
          key={category}
          className="p-4 bg-backgroundLight rounded shadow hover:scale-105 transition transform hover:bg-secondary cursor-pointer"
          onClick={() => handleCategoryClick(category)}
        >
          <img src={imageUrl} alt={category} className="w-12 h-12 sm:w-24 sm:h-24 bg-white object-cover rounded" />
          <h2 className="text-2xl font-semibold text-primary mt-2">{category}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      ))}
    </div>
  );
}

Category.propTypes = {
  Category: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Category;
