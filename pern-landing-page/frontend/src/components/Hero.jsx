import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Hero = ({ onGetStartedClick }) => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Build Modern
                <span className="text-blue-600"> Web Apps</span>
                <br />
                with PERN Stack
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the power of PostgreSQL, Express.js, React.js, and Node.js 
                working together to create scalable, full-stack applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={onGetStartedClick}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                View Demo
              </Button>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Database className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-8 w-8 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Express.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">React.js</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-blue-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  <div className="h-8 bg-blue-100 rounded mt-6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-16 bg-purple-100 rounded"></div>
                    <div className="h-16 bg-green-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

