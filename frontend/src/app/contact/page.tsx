"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Send, GraduationCap, ChevronLeft } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
            <span className="text-xl font-bold text-blue-600 tracking-tight">ST-MIND</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question about ST-MIND or interested in research collaboration? 
              Connect with the principal architect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Contact Information Side */}
            <div className="lg:col-span-1 bg-gradient-to-br from-blue-700 to-indigo-900 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-2">Anwar Hussain Sofi</h3>
              <p className="text-blue-200 mb-8 font-medium">Principal Architect & AI Researcher</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <GraduationCap className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">National Taiwan Ocean University</p>
                    <p className="text-blue-200 text-sm mt-1">Master of Science, Applied AI</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-300 mr-4 flex-shrink-0" />
                  <a href="tel:+8860903813082" className="text-blue-50 hover:text-white transition-colors">
                    +886-0903-813082
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-300 mr-4 flex-shrink-0" />
                  <a href="mailto:anwarsofi2001@gmail.com" className="text-blue-50 hover:text-white transition-colors break-all">
                    anwarsofi2001@gmail.com
                  </a>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-300 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-blue-50">
                    Keelung 202, Taiwan
                  </span>
                </div>
              </div>

              <div className="mt-16">
                <p className="text-sm text-blue-200 mb-4">Connect on Professional Networks</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="lg:col-span-2 p-10 lg:p-14">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Dr. Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="jane@institution.edu"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="How can we collaborate on trustworthy AI?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`inline-flex items-center justify-center w-full md:w-auto px-8 py-4 text-base font-medium rounded-lg text-white transition-all shadow-md ${
                      status === 'success' 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                    }`}
                  >
                    {status === 'submitting' && (
                      <span className="flex items-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>
                    )}
                    {status === 'success' && 'Message Sent!'}
                    {status === 'idle' && (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
