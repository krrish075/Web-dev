import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/products?category=${category.id}`} className="category-card">
      <div className="category-card__images">
        {category.images.length > 0 ? (
          category.images.slice(0, 4).map((img, i) => (
            <img
              key={i}
              className="category-card__img"
              src={img}
              alt={`${category.label} product ${i + 1}`}
              loading="lazy"
            />
          ))
        ) : (
          <>
            <div className="category-card__img-placeholder">{category.icon}</div>
            <div className="category-card__img-placeholder">{category.icon}</div>
            <div className="category-card__img-placeholder">{category.icon}</div>
            <div className="category-card__img-placeholder">{category.icon}</div>
          </>
        )}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__name">{category.label}</h3>
        <p className="category-card__desc">{category.description}</p>
        <span className="category-card__link">Explore More →</span>
      </div>
    </Link>
  );
}
