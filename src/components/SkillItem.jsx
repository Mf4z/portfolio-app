import React from "react";

const SkillItem = ({ src, title, alt }) => {
  return (
    <div className="flex flex-col p-3 shadow-lg gap-4 mx-auto w-[80px]">
      <img className="w-[60px] mx-auto" src={src} alt={alt} />
      <p className="text-white">{title}</p>
    </div>
  );
};

export default SkillItem;
