const testimonials = [
  {
    content: "This platform has completely transformed how we operate. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    content: "The best investment we've made for our business this year. Customer support is outstanding.",
    author: "Michael Chen",
    role: "Founder at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    content: "Intuitive interface, powerful features, and incredible results. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;