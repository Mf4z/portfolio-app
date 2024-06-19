import React from "react";

const TestimonialCard = ({ name, message }) => {
  return (
    <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
      <div className="border rounded-lg bg-tertiary p-4 shadow-lg">
        <h2>{name}</h2>
        <p className="text-md">{message} </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
