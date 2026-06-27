import { useParams, Navigate, Link } from 'react-router-dom';
import { products, categories } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const categoryLabel = categories.find(c => c.id === product.category)?.label || product.category;

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">{product.shortName}</h1>
          <div className="page-header__breadcrumb">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {product.shortName}
          </div>
        </div>
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="product-detail">
            <div className="product-detail__image-wrap">
              {product.image ? (
                <img
                  className="product-detail__image"
                  src={product.image}
                  alt={product.name}
                />
              ) : (
                <div
                  className="product-detail__image-placeholder"
                  style={{ background: product.accentGradient }}
                >
                  {product.shortName.charAt(0)}
                </div>
              )}
            </div>

            <div>
              <p className="product-detail__category">{categoryLabel}</p>
              <h2 className="product-detail__name">{product.name}</h2>
              <p className="product-detail__tagline">{product.tagline}</p>

              <p className="product-detail__description">{product.description}</p>

              <h3 className="product-detail__section-title">Key Benefits</h3>
              <div className="product-detail__benefits">
                {product.benefits.map((benefit, i) => (
                  <div className="product-detail__benefit" key={i}>
                    <span className="product-detail__benefit-check">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>

              <div className="product-detail__ingredients">
                <p className="product-detail__ingredients-label">Ingredients</p>
                <p className="product-detail__ingredients-text">{product.ingredients}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
