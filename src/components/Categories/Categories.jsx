import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  return (
    <div className="flex container mx-auto">
      <div role="tablist" className="tabs tabs-boxed flex flex-col ">
        {categories.map(category => (
          <NavLink
            to={`category/${category.category}`}
            key={category.id}
            role="tab"
            className={({ isActive }) =>
              `tab  ${isActive ? ' bg-purple-500 text-white' : ''}`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
