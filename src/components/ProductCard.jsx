import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const categoryLabels = Object.fromEntries(
  categories.map((c) => [c.id, c.label])
);

export default function ProductCard({ product }) {
  const categoryLabel = categoryLabels[product.category] || product.category;

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        {product.image ? (
          <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        ) : (
          <div
            className="product-card__image-placeholder"
            style={{ background: product.accentGradient }}
          >
            {product.shortName.charAt(0)}
          </div>
        )}
        <span className="product-card__badge">{categoryLabel}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__tagline">{product.tagline}</p>
        <p className="product-card__desc">{product.description}</p>
        <span className="product-card__cta">
          View Details <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
