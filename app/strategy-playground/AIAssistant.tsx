
'use client';

import { useState, useEffect } from 'react';

interface AIAssistantProps {
  selectedModules: any[];
  isBuilding: boolean;
}

export default function AIAssistant({ selectedModules, isBuilding }: AIAssistantProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [activeTab, setActiveTab] = useState<'suggestions' | 'insights' | 'optimization'>('suggestions');
  const [marketInsights, setMarketInsights] = useState<any[]>([]);
  const [optimizationTips, setOptimizationTips] = useState<any[]>([]);

  useEffect(() => {
    if (selectedModules.length > 0) {
      setIsThinking(true);
      setTimeout(() => {
        generateSuggestions();
        generateMarketInsights();
        generateOptimizationTips();
        setIsThinking(false);
      }, 1000);
    } else {
      setSuggestions([]);
      setMarketInsights([]);
      setOptimizationTips([]);
    }
  }, [selectedModules]);

  const generateSuggestions = () => {
    const newSuggestions = [];
    const moduleTypes = selectedModules.map(m => m.type);

    if (moduleTypes.includes('content')) {
      newSuggestions.push('📹 Video content generates 1200% more shares than text and images combined');
      newSuggestions.push('📝 Blog posts with 7+ images get 2.3x more engagement');
    }

    if (moduleTypes.includes('social')) {
      newSuggestions.push('⏰ Best posting times: Tuesday-Thursday, 9-10 AM and 3-4 PM');
      newSuggestions.push('📱 Stories have 500M daily active users - great for engagement');
    }

    if (moduleTypes.includes('email')) {
      newSuggestions.push('✉️ Personalized subject lines increase open rates by 26%');
      newSuggestions.push('📧 Segmented campaigns drive 30% more opens and 50% more clicks');
    }

    if (moduleTypes.includes('seo')) {
      newSuggestions.push('🔍 Long-tail keywords have 70% better conversion rates');
      newSuggestions.push('📄 Featured snippets get 35.1% of all clicks');
    }

    if (moduleTypes.includes('ads')) {
      newSuggestions.push('🎯 Lookalike audiences perform 9x better than broad targeting');
      newSuggestions.push('💰 Retargeting ads have 76% higher click-through rates');
    }

    if (moduleTypes.includes('analytics')) {
      newSuggestions.push('📊 Companies using data analytics are 5x more likely to make fast decisions');
      newSuggestions.push('🎯 A/B testing can improve conversions by up to 49%');
    }

    // Combination suggestions
    if (moduleTypes.includes('content') && moduleTypes.includes('social')) {
      newSuggestions.push('🚀 Content + Social synergy can increase reach by 300%');
    }

    if (moduleTypes.includes('email') && moduleTypes.includes('ads')) {
      newSuggestions.push('💡 Email subscribers cost 40x less than paid ad conversions');
    }

    setSuggestions(newSuggestions);
  };

  const generateMarketInsights = () => {
    const moduleTypes = selectedModules.map(m => m.type);
    const insights = [];

    // Generate insights based on selected modules
    if (moduleTypes.includes('content')) {
      insights.push({
        title: 'Content Marketing Trend',
        content: 'Interactive content generates 2x more conversions than passive content',
        trend: 'up',
        impact: 'high'
      });
    }

    if (moduleTypes.includes('social')) {
      insights.push({
        title: 'Social Media Update',
        content: 'Algorithm changes favor authentic engagement over follower count',
        trend: 'stable',
        impact: 'high'
      });
    }

    if (moduleTypes.includes('email')) {
      insights.push({
        title: 'Email Evolution',
        content: 'Privacy-first email marketing sees 23% higher engagement rates',
        trend: 'up',
        impact: 'medium'
      });
    }

    if (moduleTypes.includes('seo')) {
      insights.push({
        title: 'SEO Innovation',
        content: 'Core Web Vitals now impact 40% of search ranking decisions',
        trend: 'up',
        impact: 'high'
      });
    }

    if (moduleTypes.includes('ads')) {
      insights.push({
        title: 'Ad Platform Change',
        content: 'iOS 14.5 privacy changes reduced Facebook ad targeting by 25%',
        trend: 'down',
        impact: 'high'
      });
    }

    if (moduleTypes.includes('analytics')) {
      insights.push({
        title: 'Analytics Advancement',
        content: 'Real-time personalization increases conversion rates by 19%',
        trend: 'up',
        impact: 'medium'
      });
    }

    // If no specific modules, show general insights
    if (insights.length === 0) {
      insights.push(
        {
          title: 'Industry Trend',
          content: 'AI-powered personalization increasing conversion rates by 15%',
          trend: 'up',
          impact: 'high'
        },
        {
          title: 'Consumer Behavior',
          content: '73% of consumers expect brands to understand their needs',
          trend: 'stable',
          impact: 'high'
        }
      );
    }

    setMarketInsights(insights);
  };

  const generateOptimizationTips = () => {
    const moduleTypes = selectedModules.map(m => m.type);
    const tips = [];

    // Generate optimization tips based on selected modules
    if (moduleTypes.includes('content')) {
      tips.push({
        category: 'Content',
        tip: 'Use video thumbnails to increase click rates by 30%',
        difficulty: 'Easy',
        impact: 'High'
      });
    }

    if (moduleTypes.includes('social')) {
      tips.push({
        category: 'Social',
        tip: 'Post carousel content for 3x higher engagement',
        difficulty: 'Easy',
        impact: 'Medium'
      });
    }

    if (moduleTypes.includes('email')) {
      tips.push({
        category: 'Email',
        tip: 'Implement progressive profiling for better segmentation',
        difficulty: 'Medium',
        impact: 'High'
      });
    }

    if (moduleTypes.includes('seo')) {
      tips.push({
        category: 'SEO',
        tip: 'Optimize for featured snippets to capture 35% more clicks',
        difficulty: 'Medium',
        impact: 'High'
      });
    }

    if (moduleTypes.includes('ads')) {
      tips.push({
        category: 'Ads',
        tip: 'Use dynamic retargeting for 76% better performance',
        difficulty: 'Hard',
        impact: 'High'
      });
    }

    if (moduleTypes.includes('analytics')) {
      tips.push({
        category: 'Analytics',
        tip: 'Set up conversion funnels to identify 40% more opportunities',
        difficulty: 'Medium',
        impact: 'High'
      });
    }

    // If no specific modules or need more tips, add general ones
    if (tips.length < 3) {
      tips.push(
        {
          category: 'Performance',
          tip: 'Implement lazy loading to improve page speed by 25%',
          difficulty: 'Easy',
          impact: 'High'
        },
        {
          category: 'Conversion',
          tip: 'Add social proof elements to increase conversions by 15%',
          difficulty: 'Medium',
          impact: 'High'
        }
      );
    }

    setOptimizationTips(tips.slice(0, 4)); // Limit to 4 tips to prevent overflow
  };

  const aiTips = [
    '🤖 AI recommends starting with content strategy for new businesses',
    '🔗 Social media works best when paired with email marketing',
    '⏱️ SEO optimization shows results in 3-6 months on average',
    '🚀 Paid advertising can accelerate organic growth strategies',
    '📈 Analytics should be implemented from day one for better insights',
    '🎯 Focus on 2-3 channels initially rather than spreading too thin'
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'Hard': return 'text-red-600 bg-red-100 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return 'ri-arrow-up-line text-green-500';
      case 'down': return 'ri-arrow-down-line text-red-500';
      default: return 'ri-subtract-line text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3">
          <i className="ri-robot-line text-white"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          AI Assistant
        </h3>
      </div>

      <div className="flex mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        {[
          { key: 'suggestions', label: 'Tips', icon: 'ri-lightbulb-line' },
          { key: 'insights', label: 'Insights', icon: 'ri-line-chart-line' },
          { key: 'optimization', label: 'Optimize', icon: 'ri-settings-3-line' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`flex-1 flex items-center justify-center px-2 py-2 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap min-w-0 ${
              activeTab === tab.key
                ? 'bg-white dark:bg-gray-800 text-purple-600 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-purple-600'
            }`}
          >
            <div className="w-4 h-4 flex items-center justify-center mr-1">
              <i className={tab.icon}></i>
            </div>
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      {isThinking ? (
        <div className="flex items-center justify-center py-8">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-loader-4-line animate-spin text-purple-600"></i>
          </div>
          <span className="text-gray-600 dark:text-gray-400">Analyzing your strategy...</span>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {activeTab === 'suggestions' && (
            <div className="pr-2">
              {selectedModules.length > 0 && suggestions.length > 0 ? (
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                    Smart Suggestions
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <div key={index} className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                        <p className="text-sm text-gray-700 dark:text-gray-300">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                    AI Tips
                  </h4>
                  <div className="space-y-2">
                    {aiTips.map((tip, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-400">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="pr-2">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                Market Insights
              </h4>
              <div className="space-y-3">
                {marketInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {insight.title}
                      </h5>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className={getTrendIcon(insight.trend)}></i>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          insight.impact === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30'
                        }`}>
                          {insight.impact}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{insight.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'optimization' && (
            <div className="pr-2">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                Optimization Tips
              </h4>
              <div className="space-y-3">
                {optimizationTips.map((tip, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide block mb-2">
                        {tip.category}
                      </span>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 px-2 py-1 rounded whitespace-nowrap">
                          {tip.impact}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isBuilding && (
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-magic-line text-purple-600"></i>
            </div>
            <h5 className="font-medium text-purple-800 dark:text-purple-300">
              AI is building your strategy...
            </h5>
          </div>
          <p className="text-sm text-purple-700 dark:text-purple-400">
            Analyzing market trends, competitor insights, and best practices to create your personalized campaign blueprint.
          </p>
        </div>
      )}
    </div>
  );
}
