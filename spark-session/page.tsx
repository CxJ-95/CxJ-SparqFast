'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import LiveChat from './LiveChat';
import ARMeetupRoom from './ARMeetupRoom';
import SessionScheduler from './SessionScheduler';

export default function SparkSession() {
  const [activeMode, setActiveMode] = useState('chat');

  const modes = [
    { id: 'chat', label: 'Live Chat', icon: 'ri-chat-3-line' },
    { id: 'ar', label: 'AR Meetup', icon: 'ri-3d-view-line' },
    { id: 'schedule', label: 'Schedule', icon: 'ri-calendar-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <div 
          className="relative py-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20virtual%20meeting%20space%20with%20holographic%20displays%2C%20people%20engaged%20in%20video%20calls%20and%20AR%20interactions%2C%20modern%20technology%20interface%20with%20floating%20screens%2C%20collaborative%20workspace%20with%20vibrant%20lighting%2C%20professional%20networking%20atmosphere%2C%203D%20visualization%20elements%2C%20seamless%20digital%20connectivity&width=1920&height=600&seq=spark1&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Spark Session
            </h1>
            <p className="text-xl max-w-3xl mx-auto px-6">
              Connect, collaborate, and create in real-time. Join live conversations, 
              AR meetups, and scheduled sessions with marketing professionals worldwide.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`flex-1 px-6 py-4 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeMode === mode.id
                      ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className={mode.icon}></i>
                    </div>
                    {mode.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeMode === 'chat' && <LiveChat />}
            {activeMode === 'ar' && <ARMeetupRoom />}
            {activeMode === 'schedule' && <SessionScheduler />}
          </div>
        </div>
      </main>
    </div>
  );
}