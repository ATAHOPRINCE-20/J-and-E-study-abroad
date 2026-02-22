import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, Send, User, Building, FileText, ChevronDown, MessageCircle, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQAccordion } from '../components/FAQAccordion';

export function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [showThankYou, setShowThankYou] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Profile
    fullName: '',
    email: '',
    phone: '',
    
    // Study Preferences
    studyDestinations: [] as string[],
    studyLevel: '',
    fieldOfStudy: '',
    
    // Company/Background
    currentEducation: '',
    institution: '',
    
    // Additional Info
    timeline: '',
    finance: '',
    message: '',
    
    // Services Selection
    services: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowThankYou(true);
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        studyDestinations: [],
        studyLevel: '',
        fieldOfStudy: '',
        currentEducation: '',
        institution: '',
        timeline: '',
        finance: '',
        message: '',
        services: [],
      });
      setCurrentStep(1);
      setShowThankYou(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (category: 'services' | 'studyDestinations', value: string) => {
    const currentArray = formData[category];
    if (currentArray.includes(value)) {
      setFormData({
        ...formData,
        [category]: currentArray.filter(item => item !== value),
      });
    } else {
      setFormData({
        ...formData,
        [category]: [...currentArray, value],
      });
    }
  };

  const steps = [
    { id: 1, name: 'Personal profile', icon: User, completed: currentStep > 1 },
    { id: 2, name: 'Study Preferences', icon: FileText, completed: currentStep > 2 },
    { id: 3, name: 'Background', icon: Building, completed: currentStep > 3 },
    { id: 4, name: 'Additional Info', icon: Mail, completed: currentStep > 4 },
  ];

  const services = [
    'University Application',
    'Visa Assistance',
    'Scholarship Guidance',
    'Accommodation Support',
    'Career Counseling',
    'Test Preparation (IELTS/TOEFL)',
    'Document Translation',
    'Pre-Departure Briefing',
  ];

  const destinations = [
    'Ireland',
    'Canada',
    'United Kingdom',
    'United States',
    'Germany',
    'Australia',
    'Netherlands',
    'France',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=1600"
            alt="Contact J&E Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(130, 24, 26, 0.5), rgba(0, 0, 0, 0.4))', zIndex: 2 }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Contact J&E Support
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            We're here to guide you on your international education journey. Get in touch with our experts today.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#1a2f3a] relative overflow-hidden flex-1">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-6 py-2 bg-teal-500/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold text-teal-400 tracking-wide uppercase">Get Started</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-black mb-6 font-bold">
              Begin Your Study Abroad <span className="text-teal-400">Journey</span>
            </h2>
            <p className="text-lg text-gray-400">
              Complete the form below and our advisors will contact you within 24 hours.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {!showThankYou ? (
              <div className="bg-[#1e3a47]/80 backdrop-blur-xl rounded-3xl shadow-xl border border-teal-500/20 overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Step Sidebar - LEFT COLUMN */}
                  <div className="bg-[#152b35]/50 p-6 border-r border-teal-500/20">
                    <div className="space-y-4">
                      {steps.map((step) => (
                        <div
                          key={step.id}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                            currentStep === step.id
                              ? 'bg-teal-500/20 border border-teal-500/30'
                              : step.completed
                              ? 'bg-teal-500/10'
                              : 'opacity-50'
                          }`}
                          onClick={() => {
                            if (step.completed || step.id <= currentStep) {
                              setCurrentStep(step.id);
                            }
                          }}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              step.completed
                                ? 'bg-teal-500 text-white'
                                : currentStep === step.id
                                ? 'bg-teal-500/30 text-teal-400'
                                : 'bg-gray-700 text-gray-500'
                            }`}
                          >
                            {step.completed ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <step.icon className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div
                              className={`text-sm font-medium ${
                                currentStep === step.id ? 'text-teal-400' : step.completed ? 'text-teal-300' : 'text-gray-500'
                              }`}
                            >
                              {step.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form Content - CENTER COLUMN */}
                  <div className="p-8 lg:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Step 1: Personal Profile */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-600"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-600"
                              placeholder="your.email@example.com"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Mobile Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-600"
                              placeholder="+256 788 232 695"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 2: Study Preferences */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Level of Study
                            </label>
                            <select
                              name="studyLevel"
                              value={formData.studyLevel}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white"
                            >
                              <option value="">Select level</option>
                              <option value="certificate">Certificate</option>
                              <option value="diploma">Diploma</option>
                              <option value="bachelors">Bachelor's Degree</option>
                              <option value="masters">Master's Degree</option>
                              <option value="phd">PhD/Doctorate</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Field of Study
                            </label>
                            <input
                              type="text"
                              name="fieldOfStudy"
                              value={formData.fieldOfStudy}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-600"
                              placeholder="e.g., Business, Computer Science, Medicine"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 3: Background */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * Highest Level of Education
                            </label>
                            <select
                              name="currentEducation"
                              value={formData.currentEducation}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white"
                            >
                              <option value="">Select your qualification</option>
                              <option value="high-school">High School/A-Levels</option>
                              <option value="diploma">Diploma</option>
                              <option value="bachelors">Bachelor's Degree</option>
                              <option value="masters">Master's Degree</option>
                              <option value="phd">PhD/Doctorate</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Current/Last Institution
                            </label>
                            <input
                              type="text"
                              name="institution"
                              value={formData.institution}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white placeholder-gray-600"
                              placeholder="Name of your school/university"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Additional Info */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * When do you plan to start?
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white"
                            >
                              <option value="">Select timeline</option>
                              <option value="asap">As Soon As Possible</option>
                              <option value="6-months">Within 6 Months</option>
                              <option value="next-year">Next Year</option>
                              <option value="researching">Just Researching</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              * How will you finance your studies?
                            </label>
                            <select
                              name="finance"
                              value={formData.finance}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-white"
                            >
                              <option value="">Select financing method</option>
                              <option value="self">Self Sponsored</option>
                              <option value="scholarship">Scholarship</option>
                              <option value="family">Family Support</option>
                              <option value="loan">Student Loan</option>
                              <option value="not-sure">Not Sure Yet</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                              Additional Message (Optional)
                            </label>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className="w-full px-4 py-3 bg-[#0f2027] border border-teal-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all text-white placeholder-gray-600"
                              placeholder="Tell us more about your goals or any questions..."
                            />
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex gap-4 pt-6">
                        {currentStep > 1 && (
                          <button
                            type="button"
                            onClick={handlePrevious}
                            className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 transition-all font-medium"
                          >
                            Previous
                          </button>
                        )}
                        
                        {currentStep < totalSteps ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 px-6 py-3 bg-[#6B2C3E] text-white rounded-lg hover:shadow-lg hover:shadow-[#6B2C3E]/50 transition-all font-medium"
                          >
                            Next Step
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#6B2C3E] text-white rounded-lg hover:shadow-lg hover:shadow-[#6B2C3E]/50 transition-all font-medium"
                          >
                            <Send className="w-5 h-5" />
                            Submit Application
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Services & Destinations Sidebar - RIGHT COLUMN */}
                  <div className="bg-[#152b35]/50 p-6 border-l border-teal-500/20">
                    <div className="space-y-6">
                      {/* Services */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Services</h4>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <label key={service} className="flex items-start gap-2 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={formData.services.includes(service)}
                                onChange={() => handleCheckboxChange('services', service)}
                                className="mt-0.5 w-4 h-4 rounded border-teal-500/30 bg-[#0f2027] text-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0"
                              />
                              <span className="text-xs text-gray-400 group-hover:text-teal-400 transition-colors leading-relaxed">
                                {service}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Destinations */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Destinations</h4>
                        <div className="space-y-2">
                          {destinations.map((destination) => (
                            <label key={destination} className="flex items-start gap-2 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={formData.studyDestinations.includes(destination)}
                                onChange={() => handleCheckboxChange('studyDestinations', destination)}
                                className="mt-0.5 w-4 h-4 rounded border-teal-500/30 bg-[#0f2027] text-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-offset-0"
                              />
                              <span className="text-xs text-gray-400 group-hover:text-teal-400 transition-colors leading-relaxed">
                                {destination}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Thank You Screen */
              <div className="bg-[#1e3a47]/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-teal-500/20 p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Application Submitted! 🎉</h3>
                <p className="text-lg text-gray-400 mb-2">
                  Thank you for choosing J&E Study Abroad.
                </p>
                <p className="text-gray-500">
                  Our advisors will review your information and contact you within 24 hours.
                </p>
                <div className="mt-8 p-6 bg-teal-500/10 border border-teal-500/20 rounded-2xl">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-teal-400">📋 What's Next?</span><br />
                    Check your email for a confirmation message and further instructions.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Trust Indicators Section
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-12"
          >
            <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl border border-teal-500/20 max-w-5xl mx-auto overflow-hidden">
              <div className="flex items-center justify-around divide-x divide-teal-500/20 py-6 px-4">
                <div className="flex-1 text-center hover:bg-teal-500/5 transition-colors py-2">
                  <span className="text-3xl md:text-4xl font-bold text-teal-400 mr-2">1000+</span>
                  <span className="text-sm md:text-base text-gray-400 font-medium">Students Placed</span>
                </div>
                <div className="flex-1 text-center hover:bg-teal-500/5 transition-colors py-2">
                  <span className="text-3xl md:text-4xl font-bold text-teal-400 mr-2">98%</span>
                  <span className="text-sm md:text-base text-gray-400 font-medium">Success Rate</span>
                </div>
                <div className="flex-1 text-center hover:bg-teal-500/5 transition-colors py-2">
                  <span className="text-3xl md:text-4xl font-bold text-teal-400 mr-2">8+</span>
                  <span className="text-sm md:text-base text-gray-400 font-medium">Countries</span>
                </div>
                <div className="flex-1 text-center hover:bg-teal-500/5 transition-colors py-2">
                  <span className="text-3xl md:text-4xl font-bold text-teal-400 mr-2">15+</span>
                  <span className="text-sm md:text-base text-gray-400 font-medium">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div> */}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 mt-12"
          >
            <h2 className="text-4xl font-bold text-black">Locate us at</h2>
          </motion.div>

          {/* Contact Layout: Map (Left) & Info (Right) */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {/* Map Card - LEFT */}
            <div className="bg-[#1e3a47]/60 backdrop-blur-lg rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7565!2d32.6241!3d0.3235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8a!2sMirage%20Complex!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>

            {/* Consolidated Info Card - RIGHT */}
            <div className="bg-[#1e3a47]/60 backdrop-blur-lg p-8 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all flex flex-col justify-center space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Phone</div>
                  <div className="space-y-1 text-base">
                    <div className="text-black">+256 788 232 695</div>
                    <div className="text-black">+256 756 733 094</div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Email</div>
                  <div className="text-base text-black">info@jestudyabroad.com</div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-1">Office</div>
                  <div className="text-base text-black">
                    Mirage Complex, Second Floor<br />
                    Kitintale, Kampala, Uganda
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h3>
              <p className="text-xl font-semibold text-teal-400">Frequently Asked Questions</p>
            </div>
            <FAQAccordion />
          </motion.div>

          {/* Social Connectivity Card
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-lg p-8 rounded-2xl border border-teal-500/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Prefer to Chat Directly?</h3>
                <p className="text-gray-400">Connect with us on your favorite platform</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/256788232695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/jestudyabroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all hover:scale-105 shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
}