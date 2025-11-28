import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';  // This is now the listing page
import GamerHubPage from './pages/GamerHubPage';  // Individual project
import CalmMindPage from './pages/CalmMindPage';  // Individual project
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects/gamerhub" element={<GamerHubPage />} />
        <Route path="/projects/calmmind" element={<CalmMindPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App