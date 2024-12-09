import React, { useEffect, useState } from "react";

interface CustomTransitionProps {
  show: boolean;
  children: React.ReactNode;
}

const CustomTransition: React.FC<CustomTransitionProps> = ({ show, children }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  return isVisible ? (
    <div
      className={`transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  ) : null;
};

export default CustomTransition;
