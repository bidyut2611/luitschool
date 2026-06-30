import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import ApproachPage from './pages/ApproachPage';
import AdmissionsPage from './pages/AdmissionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';
import CursorEffects from './components/CursorEffects';
import Interactive3D from './components/Interactive3D';
import BootSequence from './components/BootSequence';
import HUDOverlay from './components/HUDOverlay';
import ScrollGlitch from './components/ScrollGlitch';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Scroll reveal logic
function ScrollReveal() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !elements.length) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.classList.remove('is-visible'); // Reset for new pages
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollReveal />
      <ScrollGlitch />
      <CursorEffects />
      <Interactive3D />
      <BootSequence />
      
      <div className="min-h-screen bg-[#0a0a0c] overflow-hidden">
        {/* Background video — FIXED behind entire page, visible through all sections */}
        <div className="fixed inset-0 z-0">
          <BackgroundVideo />
        </div>

        <HUDOverlay />

        {/* Global HUD Grid */}
        <div className="hud-grid fixed inset-0 z-[1]" />

        {/* Floating animated orbs for 3D depth throughout */}
        <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/founder-program" element={<ProgramsPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
