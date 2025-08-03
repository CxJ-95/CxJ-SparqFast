'use client';

import { useState } from 'react';

export default function ARMeetupRoom() {
  const [selectedRoom, setSelectedRoom] = useState('main');

  const rooms = [
    {
      id: 'main',
      name: 'Main Lobby',
      description: 'Welcome area with holographic displays and networking zones',
      participants: 24,
      activity: 'High'
    },
    {
      id: 'strategy',
      name: 'Strategy Room',
      description: 'Interactive whiteboard space for campaign planning',
      participants: 8,
      activity: 'Medium'
    },
    {
      id: 'creative',
      name: 'Creative Studio',
      description: '3D visualization tools for design collaboration',
      participants: 12,
      activity: 'High'
    },
    {
      id: 'analytics',
      name: 'Analytics Lab',
      description: 'Data visualization and performance analysis space',
      participants: 6,
      activity: 'Low'
    }
  ];

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'High':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Low':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          AR Meetup Rooms
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Step into immersive AR environments where you can collaborate with others in virtual spaces. 
          Use gestures, 3D models, and interactive tools to enhance your marketing discussions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room.id)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedRoom === room.id
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  {room.name}
                </h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActivityColor(room.activity)}`}>
                  {room.activity}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {room.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {room.participants} participants
                </span>
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium">
                  Join Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Virtual Experience Preview
        </h3>
        
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
          <iframe
            src="https://prod.spline.design/6Oo6xZn7nCZa3Bvv/scene.splinecode"
            width="100%"
            height="100%"
            frameBorder="0"
            title="AR Marketing Space"
            className="w-full h-full"
          ></iframe>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-3d-view-line"></i>
              </div>
              <span>Enter AR Space</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-fullscreen-line"></i>
              </div>
              <span>Fullscreen</span>
            </button>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-information-line"></i>
            </div>
            <span>Use mouse/touch to navigate</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            AR Features
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                <i className="ri-hand-heart-line"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Gesture-based interactions</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                <i className="ri-3d-model-line"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">3D data visualization</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                <i className="ri-share-circle-line"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Shared workspace tools</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                <i className="ri-voice-recognition-line"></i>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Voice commands</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Current Session
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Room:</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {rooms.find(r => r.id === selectedRoom)?.name}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Participants:</span>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {rooms.find(r => r.id === selectedRoom)?.participants}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Status:</span>
              <span className="font-medium text-green-600 dark:text-green-400">
                Ready to join
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 cursor-pointer">
              Start AR Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}