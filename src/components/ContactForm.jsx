import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import './styles/ContactForm.css';
import Globe from './AnimatedGlobe';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o2xpzek', 'template_h225fuc', form.current, 'BWwMr2yxFaFAxYKf1')
      .then(() => {
        toast.success('Message sent!');
        form.current.reset();
      })
      .catch((error) => {
        toast.error('Failed to send message');
        console.error(error);
      });
  };

  return (
    <div
      id="contact"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        scrollMarginTop: '20px',
      }}
    >
      <section
        className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-4"
        // style={{ minHeight: '100vh' }}
      >
        {/* Animated Globe */}
        <div className="d-none d-md-block" style={{ flex: 1 }}>
          <Globe />
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="p-4 p-md-5 rounded-4"
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#f1f1f1',
            maxWidth: '500px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}
        >
                    <h3 className="text-center mb-4 fw-semibold">📬 Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Name"
                required
              />

            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                rows="4"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 12px #0d6dfc',
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-100 rounded-3 py-2 fw-semibold"
              style={{
                backgroundColor: '#0d6dfc',
                color: '#fff',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>
      {/* <section
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 4px 24px rgba(13, 109, 252, 0.25), 0 0 12px rgba(13, 109, 252, 0.15)',
            transition: { duration: 0.4, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="p-4 p-md-5 rounded-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',  // light transparent layer
            color: '#f1f1f1',
            maxWidth: '500px',
            width: '100%',
            border: '1px solid rgba(255, 255, 255, 0.1)',  // subtle border
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(18px)',                // <- frosted glass blur
            WebkitBackdropFilter: 'blur(10px)',          // <- Safari support
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          }}

        >
          <h3 className="text-center mb-4 fw-semibold">📬 Get in Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Name"
                required
              />

            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                rows="4"
                className="form-control border-0 rounded-3 px-3 py-2 placeholder-purple"
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#1e1e1e',
                }}
                placeholder="Your Message..."
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: '0 0 12px #0d6dfc',
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-100 rounded-3 py-2 fw-semibold"
              style={{
                backgroundColor: '#0d6dfc',
                color: '#fff',
                border: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section> */}
    </div>
  );
};

export default ContactForm;
