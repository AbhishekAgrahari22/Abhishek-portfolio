import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/Navbar.css';
import logoImage from '../assets/abhi_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <motion.div
        className="navbar-wrapper d-flex justify-content-between align-items-center position-fixed top-0 start-0 w-100"
        style={{ zIndex: 1100 }}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className="brand-logo d-flex align-items-center" style={{ minWidth: '150px' }}>
          <img
            src={logoImage}
            alt="Logo"
            className="logo-img"
            style={{ height: '40px' }}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex gap-5 align-items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="d-md-none fs-3 cursor-pointer text-dark" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </motion.div>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Side Menu */}
            <motion.div
              className="mobile-slide-menu bg-white position-fixed top-0 end-0 h-100 p-4"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
              style={{ width: '75%', zIndex: 1200 }}
            >
              <a href="#home" className="d-block py-2 nav-link">Home</a>
              <a href="#about" className="d-block py-2 nav-link">About</a>
              <a href="#projects" className="d-block py-2 nav-link">Projects</a>
              <a href="#contact" className="d-block py-2 nav-link">Contact</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
