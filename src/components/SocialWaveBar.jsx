import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './styles/SocialWaveBar.css'; // Add this import

const SocialWaveBar = () => {
  return (
    <div id="socialWaveBar">
      <section className="wave-container">
        {/* Animated Waves */}
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/abhishek-agrahari-5208431a0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0ea5e9' }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/AbhishekAgrahari22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ffffff' }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://x.com/AgAbhishek_22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1DA1F2' }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="mailto:abhishek9670177034@gmail.com"
            style={{ color: '#FF4B4B' }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SocialWaveBar;
