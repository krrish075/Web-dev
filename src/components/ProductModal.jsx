import { useEffect } from 'react';
import { categories } from '../data/products';

const categoryLabels = Object.fromEntries(
  categories.map((c) => [c.id, c.label])
);

export default function ProductModal({ product, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!product) return null;

  const categoryLabel = categoryLabels[product.category] || product.category;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="modal__image-section">
          {product.image ? (
            <img
              className="modal__image"
              src={product.image}
              alt={product.name}
            />
          ) : (
            <div
              className="modal__image-placeholder"
              style={{ background: product.accentGradient }}
            >
              {product.shortName.charAt(0)}
            </div>
          )}
          <div className="modal__image-gradient" />
        </div>

        <div className="modal__body">
          <p className="modal__category" style={{ color: product.color }}>
            {categoryLabel}
          </p>
          <h2 className="modal__title">{product.name}</h2>
          <p className="modal__tagline">{product.tagline}</p>

          <p className="modal__description">{product.description}</p>

          <h3 className="modal__section-title">Key Benefits</h3>
          <ul className="modal__benefits">
            {product.benefits.map((benefit, i) => (
              <li className="modal__benefit" key={i}>
                <span
                  className="modal__benefit-icon"
                  style={{ color: product.color }}
                  aria-hidden="true"
                >
                  ✦
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="modal__ingredients">
            <p className="modal__ingredients-label">Ingredients</p>
            <p className="modal__ingredients-text">{product.ingredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
