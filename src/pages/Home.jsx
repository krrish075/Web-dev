import { Link } from 'react-router-dom';
import { products } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const homeCategories = [
    {
      id: 'beverages',
      label: 'Tea Collection',
      description: 'Premium blends for a refreshing and energetic you.',
      icon: '☕',
      images: [`${import.meta.env.BASE_URL}images/ctc-tea.jpeg`]
    },
    {
      id: 'oral-care',
      label: 'Oral Care',
      description: 'Powerful herbal protection for stronger teeth & gums.',
      icon: '🦷',
      images: [`${import.meta.env.BASE_URL}images/toothpaste.jpeg`]
    },
    {
      id: 'soaps',
      label: 'Personal Care',
      description: 'Natural care for soft, glowing and healthy skin.',
      icon: '🌿',
      images: [`${import.meta.env.BASE_URL}images/haldi-soap.jpeg`, `${import.meta.env.BASE_URL}images/aloe-soap.jpeg`]
    },
    {
      id: 'hygiene',
      label: 'Home Care',
      description: 'Clean, safe & effective products for your home.',
      icon: '🏠',
      images: [`${import.meta.env.BASE_URL}images/toilet-cleaner.jpeg`, `${import.meta.env.BASE_URL}images/handwash.jpeg`]
    }
  ];

  const testimonials = [
    {
      text: "We use PAAMAA products in our daily life. 100% natural and very effective.",
      name: "Rohit Sharma",
      location: "New Delhi"
    },
    {
      text: "The tea is awesome and the toothpaste is very effective. Highly recommended!",
      name: "Priya Verma",
      location: "Mumbai"
    },
    {
      text: "Natural, safe and perfect for our whole family. PAAMAA is our family choice.",
      name: "Anjali Mehta",
      location: "Bangalore"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__decor" />
        <div className="hero__inner">
          <div>
            <div className="hero__welcome">
              <span className="hero__welcome-leaf">🌿</span> WELCOME TO PAAMAA
            </div>
            <h1 className="hero__title">
              Trusted Daily<br />
              <span className="hero__title-highlight">Essentials for</span><br />
              Every Home
            </h1>
            <p className="hero__subtitle">
              From herbal personal care to premium tea collections, PAAMAA brings quality, purity, and trust to every household.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary">
                Explore Products ➔
              </Link>
              <Link to="/distributors" className="btn btn--outline btn--icon">
                <span aria-hidden="true">👥</span> Become a Distributor
              </Link>
            </div>
            
            <div className="hero__trust-badges">
              <div className="hero__badge">
                <div className="hero__badge-icon">🌿</div>
                <div>Natural<br />Ingredients</div>
              </div>
              <div className="hero__badge">
                <div className="hero__badge-icon">✓</div>
                <div>Quality<br />Assured</div>
              </div>
              <div className="hero__badge">
                <div className="hero__badge-icon">₹</div>
                <div>Affordable<br />Excellence</div>
              </div>
              <div className="hero__badge">
                <div className="hero__badge-icon">👨‍👩‍👧‍👦</div>
                <div>Trusted by<br />Families</div>
              </div>
            </div>
          </div>
          
          <div className="hero__images">
            <div className="hero__product-collage">
              <img src={`${import.meta.env.BASE_URL}images/ctc-tea.jpeg`} alt="Tea" className="hero__product-img" />
              <img src={`${import.meta.env.BASE_URL}images/toothpaste.jpeg`} alt="Toothpaste" className="hero__product-img" />
              <img src={`${import.meta.env.BASE_URL}images/haldi-soap.jpeg`} alt="Soap" className="hero__product-img" />
              <img src={`${import.meta.env.BASE_URL}images/toilet-cleaner.jpeg`} alt="Cleaner" className="hero__product-img hero__product-img--large" />
              <img src={`${import.meta.env.BASE_URL}images/handwash.jpeg`} alt="Handwash" className="hero__product-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <div className="section__ornament">OUR PRODUCT CATEGORIES</div>
          </div>
          <div className="categories-grid">
            {homeCategories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section--cream">
        <div className="container">
          <div className="section__header">
            <div className="section__ornament">OUR FEATURED PRODUCTS</div>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PAAMAA */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <div className="section__ornament">WHY CHOOSE PAAMAA</div>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card__icon">🌿</div>
              <h3 className="why-card__title">Natural Ingredients</h3>
              <p className="why-card__text">Carefully selected herbs and natural components.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">✓</div>
              <h3 className="why-card__title">Quality Assured</h3>
              <p className="why-card__text">Strict quality checks at every stage.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">₹</div>
              <h3 className="why-card__title">Affordable Excellence</h3>
              <p className="why-card__text">Premium quality products at fair prices.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">👨‍👩‍👧‍👦</div>
              <h3 className="why-card__title">Trusted by Families</h3>
              <p className="why-card__text">Loved and trusted by thousands of happy families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section--cream">
        <div className="container">
          <div className="story">
            <div className="story__image-wrap">
              <div className="story__image-placeholder">🌿</div>
            </div>
            <div>
              <span className="section__label">OUR STORY</span>
              <h2 className="story__title">
                A Promise of Purity<br />and Trust <span className="story__title-icon">🌿</span>
              </h2>
              <p className="story__text">
                PAAMAA was born with a simple belief – every home deserves pure, safe and effective daily essentials. 
                <br /><br />
                We combine the goodness of nature with modern innovation to bring products you can trust, every single day.
              </p>
              
              <div className="story__values">
                <div className="story__value">
                  <span className="story__value-icon">✓</span> 100% Natural
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> Ayurvedic Goodness
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> Made with Care
                </div>
                <div className="story__value">
                  <span className="story__value-icon">✓</span> For the Whole Family
                </div>
              </div>
              
              <Link to="/about" className="btn btn--primary">
                Know More About Us ➔
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <div className="section__ornament">TRUSTED BY THOUSANDS</div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="partner-cta">
        <div className="container">
          <div className="partner-cta__inner">
            <div className="partner-cta__text">
              <h3>Partner with PAAMAA</h3>
              <p>Great products. Trusted brand. Strong business opportunity.</p>
            </div>
            <div className="partner-cta__actions">
              <Link to="/distributors" className="btn btn--secondary">
                Distributor Inquiry ➔
              </Link>
              <Link to="/contact" className="btn btn--outline" style={{borderColor: 'white', color: 'white'}}>
                Retail Partnership ➔
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
