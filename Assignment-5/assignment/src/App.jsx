import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyCard from './components/TechnologyCard';
import YourStack from './components/YourStack';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load technology data from public JSON file
  useEffect(() => {
    setIsLoading(true);
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technologies data');
        }
        return res.json();
      })
      .then((data) => {
        // Small timeout to allow the loading spinner to be visible
        setTimeout(() => {
          setTechnologies(data);
          setIsLoading(false);
        }, 400);
      })
      .catch((error) => {
        console.error('Error fetching technologies:', error);
        toast.error('Failed to load technologies data.');
        setIsLoading(false);
      });
  }, []);

  // Handle Add to Stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        icon: '⚠️',
        autoClose: 3000,
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      icon: '🎉',
      autoClose: 3000,
    });
  };

  // Handle Remove single item from Stack
  const handleRemoveFromStack = (tech) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`, {
      icon: '🗑️',
      autoClose: 3000,
    });
  };

  // Handle Remove All items
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error('All technologies removed from your stack.', {
      icon: '🧹',
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Toast notifications container (bottom side) */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        theme="light"
      />

      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Banner / Hero Section */}
        <Hero
          onExploreClick={(e) => {
            e.preventDefault();
            document
              .getElementById('technologies')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Explore Technologies & Your Stack Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore the{' '}
              <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-base text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Conditional Rendering: Loading State vs Content Grid */}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Technology Cards (Responsive: 1 col mobile, 2 col tablet, 3 col desktop) */}
              <div className="lg:col-span-8 xl:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {technologies.map((tech) => {
                    const isAdded = selectedStack.some(
                      (item) => item.id === tech.id
                    );
                    return (
                      <TechnologyCard
                        key={tech.id}
                        technology={tech}
                        isAdded={isAdded}
                        onAddToStack={handleAddToStack}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Right: Your Stack Sidebar Panel */}
              <div className="lg:col-span-4 xl:col-span-4">
                <YourStack
                  stack={selectedStack}
                  onRemoveFromStack={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>
          )}

        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
