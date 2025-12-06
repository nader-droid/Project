import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-luxury-900 text-white hover:bg-luxury-800 shadow-lg",
    secondary: "bg-white text-luxury-900 hover:bg-gray-50 shadow-md border border-gray-200",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10",
    gold: "bg-luxury-gold text-luxury-900 hover:bg-yellow-500 shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : children}
    </button>
  );
};