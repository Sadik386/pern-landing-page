import { Shield, Zap, Users, Code2, Database, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Built-in JWT authentication with bcrypt password hashing for maximum security.',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with React.js frontend and Express.js backend.',
      color: 'text-yellow-600'
    },
    {
      icon: Database,
      title: 'PostgreSQL Database',
      description: 'Robust and scalable database solution with Sequelize ORM integration.',
      color: 'text-green-600'
    },
    {
      icon: Code2,
      title: 'Modern Stack',
      description: 'Latest technologies and best practices for modern web development.',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user registration, login, and profile management system.',
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience on all devices.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build modern, scalable web applications with the PERN stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gray-50 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

