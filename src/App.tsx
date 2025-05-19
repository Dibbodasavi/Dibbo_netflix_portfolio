import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import Layout from './Layout';
import VideoProjects from './pages/VideoProjects';
import GraphicDesign from './pages/GraphicDesign';
import Organizations from './pages/Organizations';
import Papers from './pages/Papers';
import Blogs from './pages/Blogs';
import Education from './pages/Education';
import Travel from './pages/Travel';
import Photography from './pages/Photography';
import Adventures from './pages/Adventures';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/video-projects" element={<Layout><VideoProjects /></Layout>} />
      <Route path="/graphic-design" element={<Layout><GraphicDesign /></Layout>} />
      <Route path="/organizations" element={<Layout><Organizations /></Layout>} />
      <Route path="/papers" element={<Layout><Papers /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/education" element={<Layout><Education /></Layout>} />
      <Route path="/travel" element={<Layout><Travel /></Layout>} />
      <Route path="/photography" element={<Layout><Photography /></Layout>} />
      <Route path="/adventures" element={<Layout><Adventures /></Layout>} />
    </Routes>
  );
};

export default App;