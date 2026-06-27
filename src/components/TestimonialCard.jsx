export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote">"</div>
      <p className="testimonial-card__text">{testimonial.text}</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__location">{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}
