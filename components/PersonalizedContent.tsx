
'use client';

import { useState } from 'react';

interface PersonalizedContentProps {
  userData: any;
}

export default function PersonalizedContent({ userData }: PersonalizedContentProps) {
  const [activeTab, setActiveTab] = useState('insights');

  const getPersonalizedTips = () => {
    const tips = [];
    
    if (userData.businessType === 'Startup') {
      tips.push('Focus on building brand recognition through consistent messaging across all channels');
      tips.push('Leverage social proof and customer testimonials to build credibility');
      tips.push('Consider growth hacking techniques to maximize reach with limited resources');
    } else if (userData.businessType === 'Local Shop') {
      tips.push('Implement local SEO strategies to improve visibility in your area');
      tips.push('Create location-based social media campaigns and partnerships');
      tips.push('Focus on Google My Business optimization and customer reviews');
    } else if (userData.businessType === 'E-commerce') {
      tips.push('Optimize your product pages for search engines and conversions');
      tips.push('Implement email marketing automation for cart abandonment');
      tips.push('Use retargeting campaigns to bring back potential customers');
    }
    
    if (userData.budget === 'Under $1,000') {
      tips.push('Maximize organic social media presence and user-generated content');
      tips.push('Focus on email marketing and referral programs for cost-effective growth');
    } else if (userData.budget === '$25,000+') {
      tips.push('Consider advanced automation tools and multi-channel campaigns');
      tips.push('Invest in premium analytics tools for deeper customer insights');
    }
    
    return tips.slice(0, 4);
  };

  const getActionableTasks = () => {
    const tasks = [];
    
    if (userData.businessType === 'Startup') {
      tasks.push({
        task: 'Create a brand style guide within 2 weeks',
        description: 'Document your logo usage, colors, fonts, and tone of voice for consistency',
        priority: 'High',
        timeEstimate: '1-2 weeks'
      });
      tasks.push({
        task: 'Set up customer testimonial collection system',
        description: 'Implement automated emails or forms to gather social proof from satisfied customers',
        priority: 'Medium',
        timeEstimate: '3-5 days'
      });
    } else if (userData.businessType === 'Local Shop') {
      tasks.push({
        task: 'Claim and optimize Google My Business listing',
        description: 'Complete all profile fields, add photos, and encourage customer reviews',
        priority: 'High',
        timeEstimate: '2-3 hours'
      });
      tasks.push({
        task: 'Create location-based social media content calendar',
        description: 'Plan posts featuring local events, partnerships, and community involvement',
        priority: 'Medium',
        timeEstimate: '1 week'
      });
    } else if (userData.businessType === 'E-commerce') {
      tasks.push({
        task: 'Implement product page SEO optimization',
        description: 'Add meta descriptions, alt tags, and structured data to top 20 products',
        priority: 'High',
        timeEstimate: '1 week'
      });
      tasks.push({
        task: 'Set up cart abandonment email sequence',
        description: 'Create 3-email automated sequence to recover lost sales',
        priority: 'High',
        timeEstimate: '3-4 days'
      });
    }
    
    if (userData.budget === 'Under $1,000') {
      tasks.push({
        task: 'Launch referral program with incentives',
        description: 'Create simple referral system offering discounts for both referrer and referee',
        priority: 'Medium',
        timeEstimate: '1 week'
      });
    }
    
    return tasks.slice(0, 3);
  };

  const getRecommendedStrategies = () => {
    const strategies = [];
    
    if (userData.goals === 'Increase Brand Awareness') {
      strategies.push({
        title: 'Content Marketing Amplification',
        description: 'Create shareable content that resonates with your target audience',
        priority: 'High',
        timeframe: '3-6 months'
      });
      strategies.push({
        title: 'Influencer Partnerships',
        description: 'Collaborate with micro-influencers in your industry',
        priority: 'Medium',
        timeframe: '2-4 months'
      });
    }
    
    if (userData.goals === 'Generate More Leads') {
      strategies.push({
        title: 'Lead Magnet Creation',
        description: 'Develop valuable resources to capture contact information',
        priority: 'High',
        timeframe: '1-2 months'
      });
      strategies.push({
        title: 'Landing Page Optimization',
        description: 'A/B test your landing pages for better conversion rates',
        priority: 'High',
        timeframe: '2-3 months'
      });
    }

    if (userData.goals === 'Boost Sales') {
      strategies.push({
        title: 'Sales Funnel Optimization',
        description: 'Streamline your customer journey from awareness to purchase',
        priority: 'High',
        timeframe: '2-4 months'
      });
    }
    
    return strategies;
  };

  const getStrategyTasks = () => {
    const tasks = [];
    
    if (userData.goals === 'Increase Brand Awareness') {
      tasks.push({
        task: 'Audit current brand presence across all platforms',
        description: 'Review consistency of messaging, visuals, and tone across website, social media, and marketing materials',
        priority: 'High',
        timeEstimate: '2-3 days'
      });
      tasks.push({
        task: 'Create branded content templates',
        description: 'Design 5-10 reusable templates for social posts, stories, and email headers',
        priority: 'Medium',
        timeEstimate: '1 week'
      });
    } else if (userData.goals === 'Generate More Leads') {
      tasks.push({
        task: 'Design and launch lead magnet campaign',
        description: 'Create downloadable resource (ebook, checklist, template) with opt-in landing page',
        priority: 'High',
        timeEstimate: '2 weeks'
      });
      tasks.push({
        task: 'Set up lead scoring system',
        description: 'Implement point system to identify and prioritize hot leads',
        priority: 'Medium',
        timeEstimate: '1 week'
      });
    } else if (userData.goals === 'Boost Sales') {
      tasks.push({
        task: 'Map customer journey and identify drop-off points',
        description: 'Analyze where prospects leave your funnel and create improvement plan',
        priority: 'High',
        timeEstimate: '1 week'
      });
      tasks.push({
        task: 'Implement urgency and scarcity tactics',
        description: 'Add countdown timers, limited offers, or stock indicators to key pages',
        priority: 'Medium',
        timeEstimate: '3-5 days'
      });
    }
    
    return tasks.slice(0, 2);
  };

  const getChallengeSpecificAdvice = () => {
    const advice = {
      'Limited Time': [
        'Use automation tools to schedule social media posts in advance',
        'Focus on the 80/20 rule - identify high-impact activities',
        'Consider outsourcing or using templates for content creation'
      ],
      'Tight Budget': [
        'Leverage free social media platforms and organic reach',
        'Create partnerships and cross-promotional opportunities',
        'Focus on retention and referral programs'
      ],
      'Lack of Expertise': [
        'Start with our interactive Strategy Playground to learn by doing',
        'Join community discussions in Collab Lab for peer insights',
        'Use AI-powered suggestions to guide your decisions'
      ]
    };
    
    return advice[userData.challenges as keyof typeof advice] || [];
  };

  const getChallengeTasks = () => {
    const taskMap = {
      'Limited Time': [
        {
          task: 'Set up social media scheduling tool',
          description: 'Use Buffer, Hootsuite, or Creator Studio to batch schedule 2 weeks of content',
          priority: 'High',
          timeEstimate: '2 hours'
        },
        {
          task: 'Create content templates library',
          description: 'Build 10 reusable post formats to speed up content creation',
          priority: 'Medium',
          timeEstimate: '4 hours'
        }
      ],
      'Tight Budget': [
        {
          task: 'Launch customer referral program',
          description: 'Create simple word-of-mouth incentive system with existing customers',
          priority: 'High',
          timeEstimate: '1 week'
        },
        {
          task: 'Partner with complementary local businesses',
          description: 'Identify 3-5 non-competing businesses for cross-promotion opportunities',
          priority: 'Medium',
          timeEstimate: '2 weeks'
        }
      ],
      'Lack of Expertise': [
        {
          task: 'Complete our Strategy Playground tutorial',
          description: 'Go through the interactive campaign builder to learn marketing fundamentals',
          priority: 'High',
          timeEstimate: '1 hour'
        },
        {
          task: 'Join 3 relevant online communities',
          description: 'Find Facebook groups, Reddit communities, or Slack channels in your industry',
          priority: 'Medium',
          timeEstimate: '30 minutes'
        }
      ]
    };
    
    return taskMap[userData.challenges as keyof typeof taskMap] || [];
  };

  // Dynamic marketing mix calculation
  const getDynamicMarketingMix = () => {
    let contentMarketing = 25;
    let socialMedia = 25;
    let emailMarketing = 25;
    let paidAdvertising = 25;
    
    // Adjust based on business type
    if (userData.businessType === 'E-commerce') {
      paidAdvertising += 15;
      emailMarketing += 10;
      contentMarketing -= 10;
      socialMedia -= 15;
    } else if (userData.businessType === 'Local Shop') {
      socialMedia += 20;
      contentMarketing += 10;
      paidAdvertising -= 15;
      emailMarketing -= 15;
    } else if (userData.businessType === 'Startup') {
      contentMarketing += 20;
      socialMedia += 10;
      paidAdvertising -= 20;
      emailMarketing -= 10;
    }
    
    // Adjust based on budget
    if (userData.budget === 'Under $1,000') {
      contentMarketing += 15;
      socialMedia += 15;
      paidAdvertising -= 20;
      emailMarketing -= 10;
    } else if (userData.budget === '$25,000+') {
      paidAdvertising += 20;
      contentMarketing -= 10;
      socialMedia -= 5;
      emailMarketing -= 5;
    }
    
    // Adjust based on goals
    if (userData.goals === 'Increase Brand Awareness') {
      contentMarketing += 10;
      socialMedia += 10;
      paidAdvertising += 5;
      emailMarketing -= 25;
    } else if (userData.goals === 'Generate More Leads') {
      emailMarketing += 15;
      contentMarketing += 10;
      paidAdvertising += 5;
      socialMedia -= 30;
    } else if (userData.goals === 'Boost Sales') {
      paidAdvertising += 15;
      emailMarketing += 10;
      socialMedia -= 15;
      contentMarketing -= 10;
    }
    
    // Ensure no negative values and normalize to 100%
    contentMarketing = Math.max(5, contentMarketing);
    socialMedia = Math.max(5, socialMedia);
    emailMarketing = Math.max(5, emailMarketing);
    paidAdvertising = Math.max(5, paidAdvertising);
    
    const total = contentMarketing + socialMedia + emailMarketing + paidAdvertising;
    
    return {
      contentMarketing: Math.round((contentMarketing / total) * 100),
      socialMedia: Math.round((socialMedia / total) * 100),
      emailMarketing: Math.round((emailMarketing / total) * 100),
      paidAdvertising: Math.round((paidAdvertising / total) * 100)
    };
  };

  const marketingMix = getDynamicMarketingMix();

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Your Personalized Marketing Insights</h3>
        <p className="text-lg opacity-90 mb-4">
          Based on your {userData.businessType.toLowerCase()} in {userData.industry.toLowerCase()}, 
          here are tailored recommendations to {userData.goals.toLowerCase()}.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm font-medium">{userData.businessType}</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm font-medium">{userData.industry}</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm font-medium">{userData.budget}</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('insights')}
            className={`flex-1 px-6 py-4 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'insights'
                ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Smart Tips
          </button>
          <button
            onClick={() => setActiveTab('strategies')}
            className={`flex-1 px-6 py-4 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'strategies'
                ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Strategies
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 px-6 py-4 font-medium transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'challenges'
                ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-b-2 border-purple-500'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Solutions
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'insights' && (
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-lightbulb-line text-yellow-500"></i>
                  </div>
                  Personalized Tips for Your {userData.businessType}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getPersonalizedTips().map((tip, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-5 h-5 flex items-center justify-center mr-3 mt-1">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Items */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-task-line text-blue-500"></i>
                  </div>
                  Immediate Action Items
                </h4>
                <div className="space-y-4">
                  {getActionableTasks().map((task, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">{task.task}</h5>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            task.priority === 'High' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {task.timeEstimate}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'strategies' && (
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-rocket-line text-blue-500"></i>
                  </div>
                  Recommended Strategies
                </h4>
                <div className="space-y-4">
                  {getRecommendedStrategies().map((strategy, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">{strategy.title}</h5>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            strategy.priority === 'High' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {strategy.priority}
                          </span>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {strategy.timeframe}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{strategy.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Tasks */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-clipboard-line text-green-500"></i>
                  </div>
                  Strategy Implementation Tasks
                </h4>
                <div className="space-y-4">
                  {getStrategyTasks().map((task, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">{task.task}</h5>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            task.priority === 'High' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {task.timeEstimate}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-shield-check-line text-green-500"></i>
                  </div>
                  Solutions for "{userData.challenges}"
                </h4>
                <div className="space-y-3">
                  {getChallengeSpecificAdvice().map((advice, index) => (
                    <div key={index} className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="w-5 h-5 flex items-center justify-center mr-3 mt-1">
                        <i className="ri-check-double-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{advice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge-Specific Tasks */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-3">
                    <i className="ri-tools-line text-orange-500"></i>
                  </div>
                  Specific Action Steps
                </h4>
                <div className="space-y-4">
                  {getChallengeTasks().map((task, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">{task.task}</h5>
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            task.priority === 'High' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {task.priority}
                          </span>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                            {task.timeEstimate}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center">
          <div className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-pie-chart-line text-purple-500"></i>
          </div>
          Your Customized Marketing Mix
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Based on your business type, budget, and goals, here's your optimized channel allocation:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{marketingMix.contentMarketing}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Content Marketing</div>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{marketingMix.socialMedia}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Social Media</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">{marketingMix.emailMarketing}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Email Marketing</div>
          </div>
          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">{marketingMix.paidAdvertising}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Paid Advertising</div>
          </div>
        </div>
      </div>
    </div>
  );
}
