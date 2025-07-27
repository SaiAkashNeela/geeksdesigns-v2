import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'limit'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b4d50ac7-2799-40ae-aac0-5a8a249ccd6e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else if (
        data.message &&
        data.message.toLowerCase().includes('quota')
      ) {
        setStatus('limit');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Start Your <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss how we can help you succeed.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform"
              >
                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
          {/* Feedback Message */}
          {status === 'success' && (
            <div className="mt-4 text-green-400 text-center">Thank you! Your message has been sent.</div>
          )}
          {status === 'error' && (
            <div className="mt-4 text-red-400 text-center">Sorry, there was a problem sending your message. Please try again later.</div>
          )}
          {status === 'loading' && (
            <div className="mt-4 text-blue-400 text-center">Sending...</div>
          )}
          {status === 'limit' && (
            <div className="mt-4 text-red-400 text-center">
              There is an issue while submitting the form.<br />
              Please contact us using <span className="text-white">support@geeksdesigns.com</span>
            </div>
          )}
          
          {/* Direct Contact */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Mail className="w-5 h-5" />
              <span>Email us</span>
              <a 
                href="mailto:support@geeksdesigns.com"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
              >
                support@geeksdesigns.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;