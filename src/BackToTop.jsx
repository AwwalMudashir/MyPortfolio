// components/BackToTopButton.jsx
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-6 right-6 z-50 bg-[#3432c7] text-white p-3 rounded-full shadow-lg animate-fade-in hover:scale-110 hover:shadow-[0_0_12px_#F4A261] transition duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTopButton;
