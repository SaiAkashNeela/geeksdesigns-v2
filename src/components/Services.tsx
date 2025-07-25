import React from 'react';
import { 
  Palette, 
  Monitor, 
  Settings, 
  Smartphone, 
  Globe, 
  Shield, 
  Server, 
  ShoppingCart,
  Store,
  Wrench,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-100 to-cyan-100"
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Professional brand identity that makes your business memorable.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconBg: "from-purple-100 to-pink-100"
  },
  {
    icon: Settings,
    title: "Website Management",
    description: "Complete website maintenance, updates, and optimization services.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-100 to-teal-100"
  },
  {
    icon: Smartphone,
    title: "App Management",
    description: "Full-scale mobile app development and ongoing management.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    iconBg: "from-orange-100 to-red-100"
  },
  {
    icon: Globe,
    title: "DNS Management",
    description: "Expert domain and DNS configuration for optimal performance.",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    iconBg: "from-indigo-100 to-blue-100"
  },
  {
    icon: Shield,
    title: "DevOps / DevSecOps",
    description: "Secure, automated deployment pipelines and infrastructure.",
    gradient: "from-slate-600 to-slate-800",
    bgGradient: "from-slate-50 to-gray-50",
    iconBg: "from-slate-100 to-gray-100"
  },
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "Scalable cloud infrastructure setup and monitoring.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    iconBg: "from-violet-100 to-purple-100"
  },
  {
    icon: Store,
    title: "WordPress, WooCommerce, Shopify",
    description: "Expert development on popular CMS and e-commerce platforms.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    iconBg: "from-amber-100 to-orange-100"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Setup",
    description: "Complete online store solutions with payment integration.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    iconBg: "from-rose-100 to-pink-100"
  },
  {
    icon: Wrench,
    title: "All Design & Development Tools",
    description: "Comprehensive toolkit for any digital project requirement.",
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
    iconBg: "from-teal-100 to-green-100"
  }
];

const Services: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-32 left-10 w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 text-sm font-medium mb-6 border border-gray-200/50 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>What We Offer</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive digital solutions tailored to your business needs with cutting-edge technology and creative excellence.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-sm opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105`}></div>
                
                {/* Main Card */}
                <div className={`relative p-8 bg-gradient-to-br ${service.bgGradient} to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 backdrop-blur-sm overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-current to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className={`w-8 h-8 text-gray-700 group-hover:text-gray-800 transition-colors duration-300`} />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <ArrowRight className="w-3 h-3 text-gray-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Ready to get started?</span>
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;