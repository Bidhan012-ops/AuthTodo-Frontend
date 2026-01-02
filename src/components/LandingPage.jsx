import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt, FaBolt } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-slate-200 font-sans transition-colors duration-300">

            {/* Navbar */}
            <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">To-Do App</span>
                    </a>
                    <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
                        <Link to="/login">
                            <button type="button" className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors cursor-pointer">
                                Log In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all shadow-lg shadow-blue-500/30 cursor-pointer">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Organize your work and life, <span className="text-blue-600 dark:text-blue-500">finally.</span>
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Simplify your daily planning with a clean, focused, and powerful to-do list. Stay on track with zero distractions.
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link to="/signup" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
                            Start for Free
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white dark:bg-slate-900/50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900/50">
                                <FaBolt className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Lightning Fast</h3>
                            <p className="text-gray-500 dark:text-gray-400">Built for speed so you can add tasks and get back to work instantly.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-emerald-100 lg:h-12 lg:w-12 dark:bg-emerald-900/50">
                                <FaCheckCircle className="w-5 h-5 text-emerald-600 lg:w-6 lg:h-6 dark:text-emerald-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Stay Focused</h3>
                            <p className="text-gray-500 dark:text-gray-400">A clean interface designed to help you focus on completing tasks, not managing them.</p>
                        </div>
                        <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow">
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 dark:bg-purple-900/50">
                                <FaShieldAlt className="w-5 h-5 text-purple-600 lg:w-6 lg:h-6 dark:text-purple-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Secure & Private</h3>
                            <p className="text-gray-500 dark:text-gray-400">Your data is yours. We prioritize security and privacy above all else.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 To-Do App. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
