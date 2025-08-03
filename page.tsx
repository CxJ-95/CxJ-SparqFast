
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import AIPersonalizer from '../components/AIPersonalizer';
import PersonalizedContent from '../components/PersonalizedContent';

export default function Home() {
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  const handlePersonalization = (data: any) => {
    setUserData(data);
    setIsPersonalized(true);
    setShowScrollPrompt(false);
  };

  const handleRestart = () => {
    setIsPersonalized(false);
    setUserData(null);
    setShowScrollPrompt(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollPrompt(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <div 
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20abstract%20digital%20marketing%20workspace%20with%20holographic%20data%20visualization%2C%20purple%20and%20pink%20gradients%2C%20futuristic%20AI%20interface%20elements%2C%20floating%20geometric%20shapes%2C%20clean%20minimalist%20design%2C%20professional%20technology%20atmosphere%2C%20ambient%20lighting%2C%20high-tech%20environment%20with%20glowing%20particles%20and%20neural%20network%20patterns&width=1920&height=1080&seq=hero1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Scroll indicator */}
          {showScrollPrompt && !isPersonalized && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
              <div className="text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-arrow-down-line text-xl"></i>
                </div>
                <span className="text-sm">Scroll to explore</span>
              </div>
            </div>
          )}
          
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {!isPersonalized ? (
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Welcome to the CxJ Spark Fast
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> AI-Powered</span>
                  <br />Marketing Universe
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Step into a living ecosystem where AI personalizes your marketing journey, 
                  interactive tools bring strategies to life, and AR experiences transform how you connect with customers.
                </p>
                
                <div className="flex flex-col items-center space-y-8">
                  <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-robot-line"></i>
                      </div>
                      <span className="text-sm font-medium">AI Personalization</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-drag-drop-line"></i>
                      </div>
                      <span className="text-sm font-medium">Interactive Tools</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-3d-view-line"></i>
                      </div>
                      <span className="text-sm font-medium">AR Experiences</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Your Personalized Marketing Hub
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                  Welcome back! Your insights are ready based on your {userData?.businessType} in {userData?.industry}.
                </p>
                <button
                  onClick={handleRestart}
                  className="text-white/80 hover:text-white underline cursor-pointer whitespace-nowrap"
                >
                  Retake Survey
                </button>
              </div>
            )}
            
            <div className="flex justify-center">
              {!isPersonalized ? (
                <AIPersonalizer onPersonalize={handlePersonalization} />
              ) : (
                <div className="w-full max-w-4xl">
                  <PersonalizedContent userData={userData} />
                </div>
              )}
            </div>
          </div>
        </div>

        {isPersonalized && (
          <section className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Your Marketing Command Center
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Explore powerful tools designed specifically for your {userData?.businessType?.toLowerCase()} needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Link href="/strategy-playground" className="group">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-500 rounded-lg mb-4 group-hover:bg-purple-600 transition-colors">
                      <i className="ri-palette-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                      Strategy Playground
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Build campaigns with drag-and-drop tools and AI suggestions
                    </p>
                  </div>
                </Link>
                
                <Link href="/collab-lab" className="group">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg mb-4 group-hover:bg-blue-600 transition-colors">
                      <i className="ri-team-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      Collab Lab
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Co-create with community insights and trending topics
                    </p>
                  </div>
                </Link>
                
                <Link href="/spark-session" className="group">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-lg mb-4 group-hover:bg-green-600 transition-colors">
                      <i className="ri-flashlight-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-green-700 dark:group-hover:text-green-300">
                      Spark Session
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Live AR meetups and real-time expert chat
                    </p>
                  </div>
                </Link>
                
                <Link href="/hidden-gems" className="group">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg mb-4 group-hover:bg-orange-600 transition-colors">
                      <i className="ri-treasure-map-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-300">
                      Hidden Gems
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Discover trends, Easter eggs, and secret tools
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Additional value section */}
        {!isPersonalized && (
          <section className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Why Choose Our AI-Powered Approach?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Experience marketing like never before with personalized insights, interactive tools, and collaborative features
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-500 rounded-full mx-auto mb-4">
                    <i className="ri-brain-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Smart Personalization</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our AI analyzes your business profile to deliver tailored strategies, tools, and insights that actually work for your specific situation.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-500 rounded-full mx-auto mb-4">
                    <i className="ri-hand-heart-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Hands-On Learning</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Build campaigns with drag-and-drop tools, test strategies in real-time, and learn through interactive experiences.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-4">
                    <i className="ri-group-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Community Power</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Connect with other business owners, share insights, and discover trending strategies through our collaborative platform.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
