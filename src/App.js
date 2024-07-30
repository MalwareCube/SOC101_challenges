import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/navigation/Header.jsx';
import Footer from './components/navigation/Footer.jsx';
import Challenge from './components/challenges/Challenge.jsx';

// Data
import challengedb from './components/challenges/data/challengedb.js';

// Routes
import Home from './components/home/Home.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Challenges */}
          {challengedb.map((challenge) => (
            <Route
              key={challenge.id}
              path={`/c/${challenge.id}`}
              element={<Challenge data={challenge.data} />}
            />
          ))}

          {/* Rewrite */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
