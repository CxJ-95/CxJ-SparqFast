
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import EasterEggHunt from './EasterEggHunt';
import TrendForecasts from './TrendForecasts';
import SecretTools from './SecretTools';
import CommunitySecrets from './CommunitySecrets';

export default function HiddenGems() {
  const [activeSection, setActiveSection] = useState('trends');

  const sections = [
    { id: 'trends', label: 'Trend Forecasts', icon: 'ri-line-chart-line' },
    { id: 'tools', label: 'Secret Tools', icon: 'ri-tools-line' },
    { id: 'results', label: 'Real-World Results', icon: 'ri-trophy-line' },
    { id: 'easter', label: 'Easter Eggs', icon: 'ri-treasure-map-line' },
    { id: 'secrets', label: 'Community Secrets', icon: 'ri-eye-close-line' }
  ];

  const realWorldResults = [
    {
      stat: '118% Reduction in CPL',
      subtitle: 'Paid Advertising for The White Collar Fight Club.',
      icon: 'ri-arrow-down-line',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      stat: '1,070% Increase in Saves',
      subtitle: 'Content Creation for The White Collar Fight Club.',
      icon: 'ri-arrow-up-line',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      stat: '71% Increase in Leads',
      subtitle: 'Brand Strategy for The White Collar Fight Club.',
      icon: 'ri-arrow-up-line',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <div 
          className="relative py-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Mysterious%20dark%20digital%20cave%20filled%20with%20glowing%20data%20crystals%2C%20holographic%20charts%20showing%20future%20trends%2C%20hidden%20technological%20treasures%2C%20ambient%20purple%20and%20blue%20lighting%2C%20futuristic%20analytics%20dashboard%20floating%20in%20space%2C%20secret%20laboratory%20atmosphere%20with%20mathematical%20formulas%20and%20code%20patterns&width=1920&height=600&seq=hidden1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hidden Gems
            </h1>
            <p className="text-xl max-w-3xl mx-auto px-6">
              Discover secret insights, hidden tools, and Easter eggs. 
              Uncover the marketing treasures that give you an unfair advantage.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeSection === section.id
                      ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className={section.icon}></i>
                    </div>
                    {section.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeSection === 'trends' && <TrendForecasts />}
            {activeSection === 'tools' && <SecretTools />}
            {activeSection === 'results' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Real-World Results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Proven performance metrics from our innovative marketing strategies
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {realWorldResults.map((result, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                      <div className={`w-16 h-16 ${result.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <div className={`w-8 h-8 flex items-center justify-center ${result.color}`}>
                          <i className={result.icon} style={{ fontSize: '24px' }}></i>
                        </div>
                      </div>
                      
                      <h4 className={`text-3xl font-bold ${result.color} mb-3`}>
                        {result.stat}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {result.subtitle}
                      </p>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                        <button className={`flex items-center justify-center space-x-2 ${result.color} hover:opacity-80 transition-opacity cursor-pointer mx-auto`}>
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-external-link-line"></i>
                          </div>
                          <span className="text-sm font-medium">View Case Study</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white text-center">
                  <h4 className="text-2xl font-semibold mb-3">
                    Ready for Your Own Success Story?
                  </h4>
                  <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                    These results speak for themselves. Let's create similar breakthrough performance for your business with our proven strategies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                      Start Your Success Story
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
                      View More Results
                    </button>
                  </div>
                </div>
              </div>
            )}
            {activeSection === 'easter' && <EasterEggHunt />}
            {activeSection === 'secrets' && <CommunitySecrets />}
          </div>
        </div>
      </main>
    </div>
  );
}
