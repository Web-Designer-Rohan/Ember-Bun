import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 animate-fade-in-up md:hidden">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>
      
      <Link to="/" onClick={onClose} className="text-2xl font-bold text-white hover:text-primary transition-colors">Home</Link>
      <Link to="/menu" onClick={onClose} className="text-2xl font-bold text-white hover:text-primary transition-colors">Menu</Link>
      <Link to="/about" onClick={onClose} className="text-2xl font-bold text-white hover:text-primary transition-colors">Our Story</Link>
      <Link to="/contact" onClick={onClose} className="text-2xl font-bold text-white hover:text-primary transition-colors">Contact</Link>
      
      <Link to="/contact" onClick={onClose} className="mt-8 bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors">
        Book a Table
      </Link>
    </div>
  );
};

export default MobileMenu;