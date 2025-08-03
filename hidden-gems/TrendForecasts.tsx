'use client';

import { useState, useEffect } from 'react';

export default function TrendForecasts() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('3months');
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setLastUpdate(new Date().toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const timeframes = [
    { id: '1month', label: '1 Month', icon: 'ri-calendar-line' },
    { id: '3months', label: '3 Months', icon: 'ri-calendar-2-line' },
    { id: '6months', label: '6 Months', icon: 'ri-calendar-event-line' },
    { id: '1year', label: '1 Year', icon: 'ri-calendar-todo-line' }
  ];

  const forecasts = {
    '1month': [
      {
        trend: 'Interactive Email Campaigns',
        confidence: 94,
        impact: 'High',
        description: 'Emails with embedded polls and quizzes showing 67% higher engagement',
        category: 'Email Marketing',
        growthRate: '+156%'
      },
      {
        trend: 'Voice Commerce Integration',
        confidence: 87,
        impact: 'Medium',
        description: 'Voice-activated shopping experiences becoming mainstream',
        category: 'E-commerce',
        growthRate: '+89%'
      }
    ],
    '3months': [
      {
        trend: 'AI-Generated Video Avatars',
        confidence: 92,
        impact: 'Very High',
        description: 'Personalized AI spokespersons for brand communications',
        category: 'Video Marketing',
        growthRate: '+234%'
      },
      {
        trend: 'Micro-Moment Marketing',
        confidence: 88,
        impact: 'High',
        description: 'Ultra-targeted content for specific customer micro-moments',
        category: 'Content Strategy',
        growthRate: '+178%'
      },
      {
        trend: 'Blockchain Loyalty Programs',
        confidence: 76,
        impact: 'Medium',
        description: 'Decentralized reward systems with cross-brand compatibility',
        category: 'Customer Retention',
        growthRate: '+145%'
      }
    ],
    '6months': [
      {
        trend: 'Neural Content Optimization',
        confidence: 89,
        impact: 'Very High',
        description: 'AI systems that adapt content in real-time based on neural feedback',
        category: 'AI Marketing',
        growthRate: '+298%'
      },
      {
        trend: 'Quantum Analytics',
        confidence: 72,
        impact: 'Revolutionary',
        description: 'Quantum computing enabling unprecedented customer insights',
        category: 'Analytics',
        growthRate: '+445%'
      }
    ],
    '1year': [
      {
        trend: 'Metaverse Brand Experiences',
        confidence: 81,
        impact: 'Revolutionary',
        description: 'Fully immersive brand worlds with persistent customer relationships',
        category: 'Virtual Reality',
        growthRate: '+567%'
      },
      {
        trend: 'Consciousness-Based Marketing',
        confidence: 65,
        impact: 'Transformative',
        description: 'Marketing strategies based on consciousness states and mindfulness',
        category: 'Psychology',
        growthRate: '+234%'
      }
    ]
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 dark:text-green-400';
    if (confidence >= 80) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary':
      case 'Transformative':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'Very High':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'High':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              AI Trend Forecasts
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Predictive analytics powered by machine learning and market intelligence
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-green-600 dark:text-green-400 mb-1">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-refresh-line"></i>
              </div>
              <span className="text-sm">Auto-updating</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400" suppressHydrationWarning={true}>
              Last update: {lastUpdate}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.id}
              onClick={() => setSelectedTimeframe(timeframe.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedTimeframe === timeframe.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
              }`}
            >
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className={timeframe.icon}></i>
                </div>
                {timeframe.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forecasts[selectedTimeframe as keyof typeof forecasts]?.map((forecast, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {forecast.trend}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {forecast.description}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(forecast.impact)}`}>
                {forecast.impact}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  AI Confidence
                </span>
                <div className="flex items-center">
                  <span className={`font-semibold ${getConfidenceColor(forecast.confidence)}`}>
                    {forecast.confidence}%
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    forecast.confidence >= 90 ? 'bg-green-500' :
                    forecast.confidence >= 80 ? 'bg-yellow-500' : 'bg-orange-500'
                  }`}
                  style={{ width: `${forecast.confidence}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                  {forecast.category}
                </span>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {forecast.growthRate}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-bookmark-line"></i>
                  </div>
                  <span className="text-sm">Save Forecast</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-share-line"></i>
                  </div>
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Want More Advanced Forecasts?
            </h4>
            <p className="opacity-90">
              Unlock industry-specific predictions, competitor insights, and custom trend analysis.
            </p>
          </div>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Upgrade Access
          </button>
        </div>
      </div>
    </div>
  );
}