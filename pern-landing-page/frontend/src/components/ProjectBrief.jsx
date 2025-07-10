import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { ArrowRight, CheckCircle, Code, Database, Globe, Zap } from 'lucide-react';

const ProjectBrief = ({ onGetStartedClick }) => {
  const highlights = [
    {
      icon: Database,
      title: "PostgreSQL Database",
      description: "Robust relational database with ACID compliance"
    },
    {
      icon: Globe,
      title: "Express.js Backend",
      description: "Fast, unopinionated web framework for Node.js"
    },
    {
      icon: Code,
      title: "React.js Frontend",
      description: "Modern UI library with component-based architecture"
    },
    {
      icon: Zap,
      title: "Node.js Runtime",
      description: "JavaScript runtime built on Chrome's V8 engine"
    }
  ];

  const features = [
    "JWT-based authentication system",
    "RESTful API architecture",
    "Responsive mobile-first design",
    "Real-time form validation",
    "Secure password hashing",
    "Cross-origin resource sharing (CORS)",
    "Database migrations with Sequelize",
    "Modern ES6+ JavaScript"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive demonstration of the PERN stack showcasing modern web development 
            practices and full-stack application architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <IconComponent className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-4">
                Create your account and explore the full capabilities of our PERN stack application.
              </p>
              <Button onClick={onGetStartedClick} className="w-full sm:w-auto">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Application Architecture
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
              <p className="text-gray-600 text-sm">React.js with modern hooks, responsive design, and interactive components</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
              <p className="text-gray-600 text-sm">Express.js API with authentication, validation, and error handling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Database</h4>
              <p className="text-gray-600 text-sm">PostgreSQL with Sequelize ORM for data modeling and migrations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Runtime</h4>
              <p className="text-gray-600 text-sm">Node.js providing JavaScript execution environment for the backend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBrief;

