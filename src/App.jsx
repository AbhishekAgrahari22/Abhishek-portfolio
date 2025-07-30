import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import SocialWaveBar from './components/SocialWaveBar';

const App = () => (
  <Router>
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <LayoutGroup>
              <Navbar />
              <Home />
              {/* Transition gradient */}
              {/* <div
                style={{
                  height: '100px',
                  background: 'linear-gradient(to bottom, #fff, #232122)',
                }}
              /> */}
              <About />
              <TechStack />
              <Projects />
              {/* <Blogs /> */}
              <ContactForm />
              <SocialWaveBar />
              <Footer />
            </LayoutGroup>
          }
        />
      </Routes>
    </AnimatePresence>
  </Router>
);

export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Blogs from './components/Blogs';
// import TechStack from './components/TechStack';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
// import SocialWaveBar from './components/SocialWaveBar';

// const App = () => (
//   <Router>
//     <AnimatePresence mode="wait">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Navbar />
//               <Home />
//               <About />
//               <TechStack />
//               <Projects />
//               {/* <Blogs /> */}
//               <ContactForm />
//               <SocialWaveBar />
//               <Footer />
//             </div>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   </Router>
// );

// export default App;