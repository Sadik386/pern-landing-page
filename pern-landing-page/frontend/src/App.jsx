import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectBrief from './components/ProjectBrief';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'login' // 'login' or 'signup'
  });

  const openAuthModal = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const switchAuthMode = () => {
    setAuthModal(prev => ({
      ...prev,
      mode: prev.mode === 'login' ? 'signup' : 'login'
    }));
  };

  const handleAuthSuccess = (user) => {
    // Trigger header update
    if (window.handleAuthSuccess) {
      window.handleAuthSuccess(user);
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Header 
          onLoginClick={() => openAuthModal('login')}
          onSignupClick={() => openAuthModal('signup')}
        />
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={
              <>
                <Hero onGetStartedClick={() => openAuthModal('signup')} />
                <ProjectBrief onGetStartedClick={() => openAuthModal('signup')} />
                <Features />
                <Demo />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <AuthModal
          isOpen={authModal.isOpen}
          mode={authModal.mode}
          onClose={closeAuthModal}
          onSwitchMode={switchAuthMode}
          onAuthSuccess={handleAuthSuccess}
        />
      </div>
    </Router>
  );
}

export default App;

