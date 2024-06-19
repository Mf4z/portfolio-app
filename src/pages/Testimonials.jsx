import { React, useState, useEffect } from "react";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { name, message };

    // Update Testimonials
    const updateTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updateTestimonials);
    localStorage.setItem("testimonials", JSON.stringify(updateTestimonials));

    // Clear form for new entry
    setName("");
    setMessage("");
  };

  return (
    <div
      name="testimonials"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <h2>Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            message={testimonial.message}
          />
        ))}
      </div>

      <form
        action=""
        method=""
        className="flex flex-col max-w[600px] gap-2"
        onSubmit={handleSubmit}
      >
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Testimonial
          </p>
        </div>

        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className="p-2 rounded-md"
        />
        <textarea
          name="message"
          id="message-text-area"
          rows={10}
          value={message}
          onChange={handleMessageChange}
          className="p-2 rounded-md"
          placeholder="Your message here..."
        ></textarea>
        <button
          type="submit"
          className="hover:bg-pink-600 text-white px-4 py-3 my-8 mx-auto flex items-center rounded-md border-2 border-pink-600 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Testimonials;
