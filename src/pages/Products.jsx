import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Our Products</h1>
          <div className="page-header__breadcrumb">
            <a href="/">Home</a> / Products
          </div>
        </div>
      </div>
      
      <section className="section section--white">
        <div className="container">
          {/* Category Filters */}
          <div className="filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span aria-hidden="true">{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid" key={activeCategory}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
             <div style={{textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)'}}>
               No products found in this category.
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
