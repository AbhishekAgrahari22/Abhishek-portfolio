import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Projects.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const resumeProjects = [
  {
    id: 'r1',
    name: 'Office Dashboard',
    description: 'Internal dashboard app using Flutter and Dart with real-time tracking and analytics.',
    html_url: 'https://github.com/AbhishekAgrahari22',
  },
  {
    id: 'r2',
    name: 'Green Connect App',
    description: 'Eco-friendly app using Flutter, Firebase, and Node.js to promote sustainability events.',
    html_url: 'https://github.com/AbhishekAgrahari22',
  },
  {
    id: 'r3',
    name: 'AI Chatbot',
    description: 'NLP + ML based chatbot deployed with Flask for intelligent interaction.',
    html_url: 'https://github.com/AbhishekAgrahari22',
  },
];

const defaultBackgrounds = [
  'url(https://images.unsplash.com/photo-1556157382-97eda2d62296)',
  'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085)',
  'url(https://images.unsplash.com/photo-1518770660439-4636190af475)',
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    fetch('https://api.github.com/users/AbhishekAgrahari22/repos')
      .then((res) => res.json())
      .then((data) => {
        const allProjects = [...resumeProjects, ...data];
        setProjects(allProjects);
      })
      .catch((error) => console.error('GitHub fetch error:', error));
  }, []);

  const filtered = projects.filter(
    (p) =>
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div id="projects" style={{ scrollMarginTop: '100px', background: '#000', padding: '1rem 1rem', minHeight: '100vh' }}>
      <motion.section
        className="projects-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="projects-container container">
          <h2 className="section-title text-white mb-5 text-center" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            🚀 <span style={{ color: '#7dd3fc' }}>Featured Projects</span>
          </h2>

          <motion.div className="search-container mb-5" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search projects..."
              style={{ borderRadius: '8px', padding: '0.75rem', boxShadow: '0 0 10px rgba(255,255,255,0.1)' }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </motion.div>

          <p className="project-count text-light text-center">
            Showing {paginated.length} of {filtered.length} Projects
          </p>

          <div className="row">
            {paginated.length === 0 ? (
              <p className="text-center text-light">No projects found.</p>
            ) : (
              paginated.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="col-md-4 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
                >
                  <motion.div
                    className="project-card text-light p-4 rounded shadow-lg"
                    style={{
                      backgroundImage: defaultBackgrounds[index % defaultBackgrounds.length],
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      position: 'relative',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.65)',
                      padding: '1rem',
                      borderRadius: '12px',
                      backdropFilter: 'blur(6px)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                      <h5 className="card-title text-white" style={{ fontWeight: '700', fontSize: '1.25rem' }}>{project.name}</h5>
                      <p className="card-text text-white" style={{ fontSize: '0.95rem', color: '#e0e0e0' }}>
                        {project.description || 'No description available.'}
                      </p>
                      <a
                        href={project.html_url}
                        className="btn btn-outline-light btn-sm mt-3 d-flex align-items-center gap-2 project-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt /> View Project
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            )}
          </div>

          <motion.div
            className="pagination-controls d-flex justify-content-center align-items-center gap-4 mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <button
              className="btn btn-outline-light"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span className="text-light fw-bold">Page {currentPage} of {totalPages}</span>
            <button
              className="btn btn-outline-light"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
