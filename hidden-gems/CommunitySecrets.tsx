'use client';

import { useState } from 'react';

export default function CommunitySecrets() {
  const [selectedCategory, setSelectedCategory] = useState('insider');

  const categories = [
    { id: 'insider', label: 'Insider Tips', icon: 'ri-eye-close-line' },
    { id: 'strategies', label: 'Secret Strategies', icon: 'ri-strategy-line' },
    { id: 'hacks', label: 'Growth Hacks', icon: 'ri-rocket-2-line' },
    { id: 'formulas', label: 'Proven Formulas', icon: 'ri-formula-line' }
  ];

  const secrets = {
    insider: [
      {
        id: 1,
        title: 'The 3-Second Rule',
        author: 'Marketing Veteran',
        level: 'Elite',
        secret: 'Top performers check their campaign metrics exactly 3 times per day: 9 AM, 2 PM, and 6 PM. This prevents over-optimization anxiety while maintaining control.',
        category: 'Psychology',
        saves: 234,
        verified: true,
        rarity: 'Rare'
      },
      {
        id: 2,
        title: 'The Friday Effect',
        author: 'Social Media Guru',
        level: 'Master',
        secret: 'B2B campaigns launched on Fridays after 2 PM have 40% higher engagement rates. Reason: Decision makers are mentally relaxed and more receptive.',
        category: 'Timing',
        saves: 189,
        verified: true,
        rarity: 'Uncommon'
      },
      {
        id: 3,
        title: 'Color Psychology Hack',
        author: 'Design Whisperer',
        level: 'Expert',
        secret: 'Use exactly 7% red in your call-to-action buttons. It triggers urgency without appearing aggressive. Test it—the conversion lift is consistent.',
        category: 'Design',
        saves: 156,
        verified: false,
        rarity: 'Common'
      }
    ],
    strategies: [
      {
        id: 4,
        title: 'The Reverse Funnel Method',
        author: 'Conversion Master',
        level: 'Legendary',
        secret: 'Start with your most expensive product and work backwards. Counter-intuitive but creates premium positioning that makes mid-tier offers irresistible.',
        category: 'Pricing',
        saves: 312,
        verified: true,
        rarity: 'Epic'
      },
      {
        id: 5,
        title: 'Micro-Moment Mapping',
        author: 'Customer Journey Expert',
        level: 'Elite',
        secret: 'Map customer micro-moments in 15-minute intervals throughout their day. Create content for each specific moment. Dramatically improves relevance and timing.',
        category: 'Strategy',
        saves: 267,
        verified: true,
        rarity: 'Rare'
      }
    ],
    hacks: [
      {
        id: 6,
        title: 'The Competitor Shadow Strategy',
        author: 'Growth Ninja',
        level: 'Master',
        secret: 'Set up Google Alerts for your competitor\'s brand name + "review" or "alternatives". Engage with dissatisfied customers within 24 hours with helpful solutions.',
        category: 'Acquisition',
        saves: 445,
        verified: true,
        rarity: 'Uncommon'
      },
      {
        id: 7,
        title: 'The 11% Email Trick',
        author: 'Email Wizard',
        level: 'Expert',
        secret: 'Send important emails at 11 minutes past the hour (2:11, 3:11, etc.). People check email on the hour, yours arrives just after they\'ve cleared their inbox.',
        category: 'Email',
        saves: 378,
        verified: false,
        rarity: 'Common'
      }
    ],
    formulas: [
      {
        id: 8,
        title: 'The Perfect Subject Line Formula',
        author: 'Email Master',
        level: 'Legendary',
        secret: '[Number] + [Adjective] + [Keyword] + [Benefit] + [Urgency]. Example: "5 Hidden SEO Secrets That Double Traffic This Month". 73% average open rate.',
        category: 'Formula',
        saves: 567,
        verified: true,
        rarity: 'Epic'
      },
      {
        id: 9,
        title: 'The 40-40-20 Rule',
        author: 'Direct Marketing Legend',
        level: 'Master',
        secret: '40% of success = audience targeting, 40% = offer quality, 20% = creative execution. Most focus on creative, pros focus on the first two.',
        category: 'Framework',
        saves: 432,
        verified: true,
        rarity: 'Rare'
      }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Legendary':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Elite':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Master':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Expert':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Epic':
        return 'text-purple-600 dark:text-purple-400';
      case 'Rare':
        return 'text-blue-600 dark:text-blue-400';
      case 'Uncommon':
        return 'text-green-600 dark:text-green-400';
      case 'Common':
        return 'text-gray-600 dark:text-gray-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Community Secrets
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Exclusive insights shared by our top-tier community members. These secrets are earned through experience, 
          tested in real campaigns, and shared only with trusted members.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
              }`}
            >
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className={category.icon}></i>
                </div>
                {category.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secrets[selectedCategory as keyof typeof secrets]?.map((secret) => (
          <div key={secret.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {secret.title}
                  </h4>
                  {secret.verified && (
                    <div className="w-5 h-5 flex items-center justify-center text-green-500">
                      <i className="ri-verified-badge-fill"></i>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    by {secret.author}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(secret.level)}`}>
                    {secret.level}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getRarityColor(secret.rarity)}`}>
                  {secret.rarity}
                </span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {secret.secret}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-2 py-1 rounded-full">
                  {secret.category}
                </span>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-bookmark-line"></i>
                  </div>
                  <span className="text-sm">{secret.saves}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 transition-colors cursor-pointer">
                  <i className="ri-bookmark-line"></i>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 transition-colors cursor-pointer">
                  <i className="ri-share-line"></i>
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                  Try It
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-2 flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-vip-crown-2-line"></i>
              </div>
              Share Your Secret
            </h4>
            <p className="opacity-90">
              Have a proven marketing secret that delivers results? Share it with the community and earn recognition points.
            </p>
          </div>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Submit Secret
          </button>
        </div>
      </div>
    </div>
  );
}