'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaUserTie, FaUserFriends, FaStoreAlt, FaUser } from 'react-icons/fa';

const LandingPage = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="font-serif text-gray-800 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <header className="bg-gray-900 text-white py-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-2xl font-bold flex items-center">
            <img src="/greenleaf-cloud-high-resolution-logo-transparent.png" alt="Cloud Kitchen Franchise" className="h-12 mr-2" />
            <span className="hidden md:inline">GreenLeaf Cloud</span>
          </a>
          <nav className={`md:block ${isMobileNavOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gold-400 transition-colors duration-300 font-medium text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="md:hidden text-2xl" onClick={toggleMobileNav}>
            ☰
          </button>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Statistics />
        <Testimonials />
        <Roles />
      </main>

      <Footer />
    </div>
  );
};

const Hero = () => (
  <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Elevate Your Culinary Business
        </h1>
        <p className="mb-10 text-xl md:text-2xl opacity-90">
          Experience the future of food delivery with our premium cloud kitchen franchise.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="bg-gold-400 text-white hover:bg-gold-300 py-3 px-8 rounded-full font-bold transition-colors duration-300 shadow-lg text-lg">
            Get Started
          </a>
          <a href="#" className="bg-transparent border-2 border-gold-400 hover:bg-gold-400 hover:text-gray-900 text-gold-400 py-3 px-8 rounded-full font-bold transition-colors duration-300 shadow-lg text-lg">
            Learn More
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block"
      >
        <img src="/cloud_kitchen.webp" alt="Cloud Kitchen Hero" className="rounded-lg shadow-2xl" />
      </motion.div>
    </div>
  </section>
);

const Statistics = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
        Our Impact in Numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { number: '10,000+', label: 'Satisfied Customers' },
          { number: '99%', label: 'Customer Satisfaction' },
          { number: '5 Years', label: 'Industry Leadership' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg text-center border border-gray-200"
          >
            <h3 className="text-4xl font-bold mb-2 text-gold-500">{stat.number}</h3>
            <p className="text-xl text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
        Partner Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "This cloud kitchen franchise has elevated my business to new heights. The support and technology are unparalleled.",
            name: "John Doe",
            role: "Franchise Owner"
          },
          {
            quote: "As an investor, I've witnessed remarkable returns. The team's expertise in the food delivery market is truly impressive.",
            name: "Jane Smith",
            role: "Investor"
          },
          {
            quote: "Managing a cloud kitchen outlet has never been more efficient. The systems in place ensure smooth operations every day.",
            name: "Michael Johnson",
            role: "Outlet Manager"
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <blockquote className="mb-6 text-xl italic text-gray-600">"{testimonial.quote}"</blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gold-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Roles = () => (
  <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
        Your Role in Our Ecosystem
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {[
          { icon: FaUserTie, title: "Franchise Owner", description: "Lead your own culinary empire" },
          { icon: FaUserCircle, title: "Investor", description: "Grow your wealth in food tech" },
          { icon: FaUserFriends, title: "Customer", description: "Savor diverse cuisines at home" },
          { icon: FaStoreAlt, title: "Outlet Manager", description: "Orchestrate kitchen excellence" },
          { icon: FaUser, title: "Employee", description: "Innovate in culinary technology" }
        ].map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
          >
            <role.icon className="text-5xl text-gold-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{role.title}</h3>
            <p className="text-gray-600">{role.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg font-medium mb-4 md:mb-0">&copy; 2024 GreenLeaf Cloud. All rights reserved.</p>
        <div className="flex space-x-4">
          {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
            <a href="#" key={item} className="hover:text-gold-400 transition-colors duration-300 font-medium">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default LandingPage;