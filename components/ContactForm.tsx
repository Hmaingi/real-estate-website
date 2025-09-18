"use client";
import { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  propertyTitle?: string;
  className?: string;
}

export default function ContactForm({ propertyTitle, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle 
      ? `I'm interested in the property: ${propertyTitle}` 
      : ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-2xl p-8 text-center ${className}`}>
        <div className="text-green-500 mb-4">
          <Send className="h-12 w-12 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-700">
          Thank you for your inquiry. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">
        {propertyTitle ? 'Request Property Info' : 'Get In Touch'}
      </h3>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <User className="h-4 w-4 mr-2" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <Mail className="h-4 w-4 mr-2" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <Phone className="h-4 w-4 mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="flex items-center text-sm font-medium text-slate-700 mb-2">
            <MessageSquare className="h-4 w-4 mr-2" />
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}