import { products } from '../data/products';

export default function Gallery() {
  const images = products.map(p => p.image).filter(img => img !== null);
  
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">Gallery</h1>
          <div className="page-header__breadcrumb">
            <a href="/">Home</a> / Gallery
          </div>
        </div>
      </div>
      
      <section className="section section--white">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img} alt={`Gallery item ${i+1}`} loading="lazy" />
                <div className="gallery-item__overlay">PAAMAA</div>
              </div>
            ))}
          </div>
          
          {images.length === 0 && (
             <div style={{textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)'}}>
               No images available in gallery.
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
