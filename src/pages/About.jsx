export default function About() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">About Us</h1>
          <div className="page-header__breadcrumb">
            <a href="/">Home</a> / About
          </div>
        </div>
      </div>
      <section className="section section--white">
        <div className="container">
          <div className="story">
            <div>
              <span className="section__label">OUR MISSION</span>
              <h2 className="story__title">Bringing Nature to Every Home</h2>
              <p className="story__text">
                At PAAMAA, our mission is to deliver high-quality, natural, and effective daily essentials that enrich the lives of our customers. We believe that what you use on your body and in your home should be safe, pure, and rooted in the trusted traditions of Ayurveda.
              </p>
              <p className="story__text">
                From our meticulously crafted herbal soaps to our powerful home care products, every PAAMAA item is a testament to our commitment to quality, affordability, and the well-being of your family.
              </p>
            </div>
            <div className="story__image-wrap">
              <img src="/images/about-us.jpeg" alt="About Us" className="story__image" />
              {/* <div className="story__image-placeholder">🌿</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
