import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, User, LogOut } from 'lucide-react';
import ApiService from '../services/api';

const Header = ({ onLoginClick, onSignupClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    if (ApiService.isAuthenticated()) {
      setUser(ApiService.getCurrentUser());
    }
  }, []);

  const handleLogout = () => {
    ApiService.logout();
    setUser(null);
    setIsMenuOpen(false);
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  // Pass auth success handler to parent
  useEffect(() => {
    window.handleAuthSuccess = handleAuthSuccess;
    return () => {
      delete window.handleAuthSuccess;
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">PERN Stack</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-700 hover:text-gray-900 transition-colors">
              Demo
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{user.email}</span>
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={onLoginClick}>
                  Login
                </Button>
                <Button onClick={onSignupClick}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Features
              </a>
              <a href="#demo" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Demo
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                Contact
              </a>
              
              {user ? (
                <div className="px-3 py-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2 px-3 py-2">
                  <Button variant="outline" size="sm" onClick={onLoginClick}>
                    Login
                  </Button>
                  <Button size="sm" onClick={onSignupClick}>
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

