import React from 'react';

const SocialNav = ({ color, title, children }) => {
  return (
    <div
      className={`w-[160px] h-[60px] px-4 flex justify-between items-center ${color} ml-[-100px] hover:ml-[-10px] duration-300`}
    >
      <a className="flex justify-between items-center w-full" href="/">
        {title}
        <span className="w-8">{children}</span>
      </a>
    </div>
  );
};

export default SocialNav;
