'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import PollCreator from './PollCreator';
import CommunityFeed from './CommunityFeed';
import TrendBoard from './TrendBoard';
import CoCreationSpace from './CoCreationSpace';

export default function CollabLab() {
  const [activeTab, setActiveTab] = useState('feed');

  const tabs = [
    { id: 'feed', label: 'Community Feed', icon: 'ri-chat-3-line' },
    { id: 'trends', label: 'Trend Board', icon: 'ri-trending-up-line' },
    { id: 'polls', label: 'Poll Center', icon: 'ri-bar-chart-box-line' },
    { id: 'cocreate', label: 'Co-Create', icon: 'ri-team-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <div 
          className="relative py-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Collaborative%20workspace%20with%20diverse%20team%20members%20brainstorming%2C%20modern%20office%20environment%20with%20digital%20screens%20showing%20data%20visualization%2C%20creative%20energy%20with%20sticky%20notes%20and%20whiteboards%2C%20warm%20lighting%2C%20professional%20atmosphere%2C%20people%20working%20together%20on%20marketing%20strategies%2C%20colorful%20charts%20and%20graphs%2C%20innovation%20hub%20setting&width=1920&height=600&seq=collab1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Collab Lab
            </h1>
            <p className="text-xl max-w-3xl mx-auto px-6">
              Join our vibrant community of marketers, creators, and innovators. 
              Share insights, create together, and shape the future of marketing.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-6 py-4 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className={tab.icon}></i>
                    </div>
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeTab === 'feed' && <CommunityFeed />}
            {activeTab === 'trends' && <TrendBoard />}
            {activeTab === 'polls' && <PollCreator />}
            {activeTab === 'cocreate' && <CoCreationSpace />}
          </div>
        </div>
      </main>
    </div>
  );
}