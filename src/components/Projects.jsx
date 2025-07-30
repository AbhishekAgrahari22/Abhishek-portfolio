import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Projects.css'; // Add this line to import the custom styles

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
    <div id="projects" style={{ scrollMarginTop: '100px' }}>
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">🚀 Featured Projects</h2>

          <div className="search-container">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <p className="project-count">Showing {paginated.length} of {filtered.length} Projects</p>

          <div className="row">
            {paginated.length === 0 ? (
              <p className="text-center text-light">No projects found.</p>
            ) : (
              paginated.map((project, index) => (
                <div key={project.id} className="col-md-4 mb-4">
                  <div
                    className="project-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">
                      {project.description || 'No description available.'}
                    </p>
                    <a
                      href={project.html_url}
                      className="project-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pagination-controls">
            <button
              className="btn btn-secondary"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span className="page-number">Page {currentPage} of {totalPages}</span>
            <button
              className="btn btn-secondary"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
