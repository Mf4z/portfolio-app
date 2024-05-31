import React from 'react';

const SkillItem = ({ src, title, alt }) => {
  return (
    <div>
      <img className="w-[60px] mx-auto" src={src} alt={alt} />
      <p className="text-white">{title}</p>
    </div>
  );
};

export default SkillItem;
