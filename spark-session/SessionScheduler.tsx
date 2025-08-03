'use client';

import { useState } from 'react';

export default function SessionScheduler() {
  const [selectedDate, setSelectedDate] = useState('2024-11-20');
  const [selectedTime, setSelectedTime] = useState('');

  const upcomingSessions = [
    {
      id: 1,
      title: 'AI-Powered Content Strategy Workshop',
      host: 'Junior Onunze',
      hostAvatar: 'SC',
      date: '2024-11-20',
      time: '2:00 PM EST',
      duration: '60 min',
      type: 'Workshop',
      participants: 12,
      maxParticipants: 20,
      description: 'Learn how to leverage AI tools for content creation, optimization, and distribution.',
      tags: ['AI', 'Content', 'Strategy'],
      isRegistered: false
    },
    {
      id: 2,
      title: 'Local SEO Masterclass',
      host: 'Marcus Rodriguez',
      hostAvatar: 'MR',
      date: '2024-11-21',
      time: '11:00 AM EST',
      duration: '45 min',
      type: 'Masterclass',
      participants: 8,
      maxParticipants: 15,
      description: 'Master the art of local search optimization for small businesses and startups.',
      tags: ['SEO', 'Local', 'SmallBusiness'],
      isRegistered: true
    },
    {
      id: 3,
      title: 'Interactive Video Marketing Lab',
      host: 'Chrisia Borda',
      hostAvatar: 'ET',
      date: '2024-11-22',
      time: '3:30 PM EST',
      duration: '90 min',
      type: 'Lab Session',
      participants: 15,
      maxParticipants: 25,
      description: 'Hands-on session creating interactive video content that converts viewers into customers.',
      tags: ['Video', 'Interactive', 'Conversion'],
      isRegistered: false
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Masterclass':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Lab Session':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const handleRegister = (sessionId: number) => {
    console.log(`Registered for session ${sessionId}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Upcoming Sessions
            </h3>
            
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {session.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                          {session.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              {session.hostAvatar}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {session.host}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {session.date} • {session.time} • {session.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {session.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {session.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {session.participants}/{session.maxParticipants} participants
                        </span>
                        <button
                          onClick={() => handleRegister(session.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                            session.isRegistered
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                        >
                          {session.isRegistered ? 'Registered' : 'Register'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Schedule New Session
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Session Title
                </label>
                <input
                  type="text"
                  placeholder="Enter session title..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time} EST</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Session Type
                </label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8">
                  <option value="">Select type...</option>
                  <option value="workshop">Workshop</option>
                  <option value="masterclass">Masterclass</option>
                  <option value="lab">Lab Session</option>
                  <option value="discussion">Discussion</option>
                </select>
              </div>
              
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer">
                Schedule Session
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Your Sessions
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-green-800 dark:text-green-400">
                      Local SEO Masterclass
                    </h5>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Tomorrow, 11:00 AM EST
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-green-600">
                    <i className="ri-check-line"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-blue-800 dark:text-blue-400">
                      Video Marketing Lab
                    </h5>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      Nov 22, 3:30 PM EST
                    </p>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                    <i className="ri-calendar-line"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}