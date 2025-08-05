import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SocialWaveBar from './components/SocialWaveBar';
import SplashScreen from './components/SplashScreen';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DividerSection from './components/DividerSection';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SplashScreen />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Navbar />
                    <Home />
                    <About />
                    <TechStack />
                    <DividerSection />
                    <Projects />
                    <ContactForm />
                    <SocialWaveBar />
                    <Footer />
                  </div>
                }
              />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import TechStack from './components/TechStack';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence, LayoutGroup } from 'framer-motion';
// import SocialWaveBar from './components/SocialWaveBar';

// const App = () => (
//   <Router>
//     <AnimatePresence mode="wait">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//                <Navbar />
//                <Home />
//                <About />
//                <TechStack />
//                <Projects />
//                {/* <Blogs /> */}
//                <ContactForm />
//                <SocialWaveBar />
//                <Footer />
//              </div>
//           }
//         />
//       </Routes>
//     </AnimatePresence>
//   </Router>
// );

// export default App;

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