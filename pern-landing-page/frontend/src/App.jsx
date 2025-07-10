import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectBrief from './components/ProjectBrief';
import Features from './components/Features';
import Demo from './components/Demo';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
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
    <div className="min-h-screen">
      <Header 
        onLoginClick={() => openAuthModal('login')}
        onSignupClick={() => openAuthModal('signup')}
      />
      
      <main>
        <Hero onGetStartedClick={() => openAuthModal('signup')} />
        <ProjectBrief onGetStartedClick={() => openAuthModal('signup')} />
        <Features />
        <Demo />
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
  );
}

export default App;

