import React from 'react';

const BaseButton = ({ text, children, ...props }) => {
  return (
    <div
      className="group cursor-pointer flex gap-3 item-center justify-center py-2 px-6 mx-auto text-white border-2 bg-primary hover:bg-secondary"
      {...props}
    >
      {text}
      <span className="ml-2 w-6 text-white">{children}</span>
    </div>
  );
};

export default BaseButton;
