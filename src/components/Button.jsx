import React from 'react';

const Button = ({ theme = "primary", disabled = false,onClick, children }) => {
 
  const baseStyles = "px-6 py-2 rounded-md transition-all";

  
  const primaryStyles = "bg-[#B92B5D] text-white hover:bg-[#9a224d]";
  const secondaryStyles = "bg-white text-[#B92B5D] border border-[#B92B5D] hover:bg-[#f5f5f5]";


  const disabledStyles = "opacity-50 cursor-not-allowed";


  const themeStyles = theme === "primary" ? primaryStyles : secondaryStyles;
  const finalStyles = disabled ? `${baseStyles} ${themeStyles} ${disabledStyles}` : `${baseStyles} ${themeStyles}`;

  return (
    <button onClick={onClick} className={finalStyles} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
