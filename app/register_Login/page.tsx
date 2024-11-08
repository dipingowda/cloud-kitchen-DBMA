'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUserCircle,
  FaLock,
  FaEnvelope,
  FaUserTie,
  FaStore,
  FaUtensils,
  FaUsers,
  FaShoppingBag,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';

const LoginSignupPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  interface FormData {
    username: string;
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    role?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const roles = [
    { id: 'investor', label: 'Investor', icon: FaUserTie },
    { id: 'franchiseOwner', label: 'Franchise Owner', icon: FaStore },
    { id: 'kitchenManager', label: 'Kitchen Manager', icon: FaUtensils },
    { id: 'employee', label: 'Employee', icon: FaUsers },
    { id: 'customer', label: 'Customer', icon: FaShoppingBag },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error for this field when the user starts typing
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!isLogin && !formData.email.trim()) newErrors.email = 'Email is required';
    if (!isLogin && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!isLogin && formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!isLogin && !role) newErrors.role = 'Please select a role';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, role });
      alert(isLogin ? 'Login successful!' : 'Signup successful!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="p-8">
          <motion.h2
            key={isLogin ? 'login' : 'signup'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-4xl font-bold text-center mb-8 text-emerald-600"
          >
            {isLogin ? 'Welcome Back!' : 'Join Our Network'}
          </motion.h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <FaUserCircle className="absolute top-3 left-3 text-emerald-500" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
              </div>
              {!isLogin && (
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-emerald-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              )}
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-emerald-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-emerald-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Role</label>
                  <div className="grid grid-cols-2 gap-2">
                    {roles.map((r) => (
                      <motion.button
                        key={r.id}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center p-2 rounded-lg border ${
                          role === r.id ? 'bg-emerald-500 text-white' : 'bg-white text-emerald-600'
                        } transition-colors duration-200`}
                        onClick={() => setRole(r.id)}
                      >
                        <r.icon className="mr-2" />
                        {r.label}
                      </motion.button>
                    ))}
                  </div>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-emerald-500 text-white py-2 rounded-lg mt-6 hover:bg-emerald-600 transition-colors duration-200"
              type="submit"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setFormData({ username: '', email: '', password: '' });
                setRole('');
              }}
              className="text-emerald-600 hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
            </button>
          </div>
          {isLogin && (
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-emerald-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          )}
          {!isLogin && (
            <div className="mt-4 text-center text-sm text-gray-600">
              By signing up, you agree to our{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-emerald-600 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignupPage;