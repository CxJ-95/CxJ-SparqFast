'use client';

import { useState } from 'react';

export default function SecretTools() {
  const [unlockedTools, setUnlockedTools] = useState<number[]>([1, 2]);

  const secretTools = [
    {
      id: 1,
      name: 'Competitor Sentiment Analyzer',
      description: 'Real-time analysis of competitor brand sentiment across social platforms',
      category: 'Intelligence',
      difficulty: 'Beginner',
      unlocked: true,
      usageCount: 1247,
      rating: 4.8,
      features: ['Real-time monitoring', 'Sentiment scoring', 'Competitor comparison', 'Alert system'],
      thumbnail: 'https://readdy.ai/api/search-image?query=Modern%20dashboard%20interface%20showing%20sentiment%20analysis%20charts%2C%20competitor%20comparison%20graphs%2C%20real-time%20social%20media%20monitoring%20displays%2C%20clean%20UI%20design%20with%20purple%20and%20blue%20color%20scheme&width=400&height=200&seq=tool1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Neural Content Generator',
      description: 'AI-powered content creation that adapts to your brand voice and audience preferences',
      category: 'Content',
      difficulty: 'Intermediate',
      unlocked: true,
      usageCount: 892,
      rating: 4.9,
      features: ['Brand voice matching', 'Audience adaptation', 'Multi-format output', 'Performance prediction'],
      thumbnail: 'https://readdy.ai/api/search-image?query=AI%20content%20generation%20interface%20with%20neural%20network%20visualization%2C%20text%20being%20created%20automatically%2C%20brand%20voice%20analysis%20charts%2C%20creative%20writing%20dashboard%20with%20futuristic%20design%20elements&width=400&height=200&seq=tool2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Conversion Heatmap Predictor',
      description: 'Predicts user behavior and conversion hotspots before launching campaigns',
      category: 'Analytics',
      difficulty: 'Advanced',
      unlocked: false,
      requirement: 'Complete 5 strategy builds',
      usageCount: 634,
      rating: 4.7,
      features: ['Predictive heatmaps', 'Behavior modeling', 'A/B test optimization', 'ROI forecasting']
    },
    {
      id: 4,
      name: 'Voice Sentiment Scanner',
      description: 'Analyze emotional tone and sentiment from voice messages and calls',
      category: 'Communication',
      difficulty: 'Intermediate',
      unlocked: false,
      requirement: 'Join 3 AR sessions',
      usageCount: 456,
      rating: 4.6,
      features: ['Voice emotion detection', 'Sentiment scoring', 'Call analysis', 'Customer mood tracking']
    },
    {
      id: 5,
      name: 'Quantum Trend Predictor',
      description: 'Revolutionary quantum-powered algorithm for predicting marketing trends',
      category: 'Forecasting',
      difficulty: 'Expert',
      unlocked: false,
      requirement: 'Reach community level 10',
      usageCount: 89,
      rating: 5.0,
      features: ['Quantum algorithms', 'Multi-dimensional analysis', 'Timeline prediction', 'Probability mapping']
    },
    {
      id: 6,
      name: 'AR Campaign Designer',
      description: 'Create immersive AR marketing experiences without coding',
      category: 'Creative',
      difficulty: 'Advanced',
      unlocked: false,
      requirement: 'Complete AR meetup challenge',
      usageCount: 234,
      rating: 4.8,
      features: ['No-code AR creation', '3D model library', 'Interactive elements', 'Cross-platform deployment']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Expert':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Intelligence':
        return 'ri-spy-line';
      case 'Content':
        return 'ri-quill-pen-line';
      case 'Analytics':
        return 'ri-line-chart-line';
      case 'Communication':
        return 'ri-chat-voice-line';
      case 'Forecasting':
        return 'ri-crystal-ball-line';
      case 'Creative':
        return 'ri-palette-line';
      default:
        return 'ri-tools-line';
    }
  };

  const unlockTool = (toolId: number) => {
    if (!unlockedTools.includes(toolId)) {
      setUnlockedTools([...unlockedTools, toolId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Secret Marketing Tools
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Exclusive tools available only to community members. Complete challenges and engage with the platform to unlock advanced capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {unlockedTools.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Tools Unlocked</div>
          </div>
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {secretTools.length - unlockedTools.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">To Discover</div>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              2,847
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Uses</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secretTools.map((tool) => (
          <div key={tool.id} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${!tool.unlocked ? 'opacity-75' : ''}`}>
            {tool.unlocked && tool.thumbnail && (
              <div className="h-32 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={tool.thumbnail} 
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <i className={`${getCategoryIcon(tool.category)} text-purple-600 dark:text-purple-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {tool.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tool.difficulty)}`}>
                      {tool.difficulty}
                    </span>
                  </div>
                </div>
                {tool.unlocked && (
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <i className="ri-star-fill text-sm"></i>
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {tool.description}
              </p>
              
              {tool.unlocked ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {tool.usageCount.toLocaleString()} uses
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                      Launch Tool
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-lock-line text-gray-500 dark:text-gray-400"></i>
                      </div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        Unlock Required
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {tool.requirement}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => unlockTool(tool.id)}
                    className="w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors cursor-pointer"
                  >
                    View Requirements
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-2 flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-vip-crown-line"></i>
              </div>
              VIP Tool Access
            </h4>
            <p className="opacity-90">
              Get instant access to all secret tools, including upcoming beta releases and exclusive features.
            </p>
          </div>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}