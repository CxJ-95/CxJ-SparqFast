'use client';

import { useState, useEffect } from 'react';

export default function EasterEggHunt() {
  const [foundEggs, setFoundEggs] = useState<number[]>([1, 3]);
  const [currentClue, setCurrentClue] = useState('');
  const [isHunting, setIsHunting] = useState(false);

  const easterEggs = [
    {
      id: 1,
      name: 'The Konami Marketer',
      description: 'Found by typing the classic gaming sequence',
      reward: 'Exclusive retro marketing templates',
      difficulty: 'Easy',
      hint: 'Up, Up, Down, Down, Left, Right, Left, Right...',
      found: true,
      rarity: 'Common',
      points: 50
    },
    {
      id: 2,
      name: 'Midnight Analytics',
      description: 'Appears only when checking analytics at midnight',
      reward: '24-hour premium dashboard access',
      difficulty: 'Medium',
      hint: 'When the clock strikes twelve, insights reveal themselves',
      found: false,
      rarity: 'Uncommon',
      points: 150
    },
    {
      id: 3,
      name: 'The Hidden Fibonacci',
      description: 'Discovered by clicking elements in Fibonacci sequence',
      reward: 'Golden ratio design templates',
      difficulty: 'Hard',
      hint: '1, 1, 2, 3, 5, 8, 13... the pattern of nature and beauty',
      found: true,
      rarity: 'Rare',
      points: 300
    },
    {
      id: 4,
      name: 'Rainbow Connection',
      description: 'Unlocked by creating a campaign with all 7 color categories',
      reward: 'Chromatic branding toolkit',
      difficulty: 'Medium',
      hint: 'Somewhere over the rainbow, colors tell a story',
      found: false,
      rarity: 'Uncommon',
      points: 200
    },
    {
      id: 5,
      name: 'The Time Traveler',
      description: 'Found by setting campaign dates exactly 88 days in the future',
      reward: 'Retro-futuristic design assets',
      difficulty: 'Easy',
      hint: 'Great Scott! The future is exactly 88 days away',
      found: false,
      rarity: 'Common',
      points: 75
    },
    {
      id: 6,
      name: 'Binary Whisper',
      description: 'Activated by entering your name in binary code',
      reward: 'Matrix-style animated backgrounds',
      difficulty: 'Hard',
      hint: '01001000 01100101 01101100 01101100 01101111',
      found: false,
      rarity: 'Rare',
      points: 400
    },
    {
      id: 7,
      name: 'The Philosopher\'s Click',
      description: 'Legendary egg found by those who truly understand marketing',
      reward: 'Legendary status and exclusive mentor access',
      difficulty: 'Legendary',
      hint: 'The answer lies not in the clicking, but in the thinking',
      found: false,
      rarity: 'Legendary',
      points: 1000
    }
  ];

  const clues = [
    'Look for patterns where others see chaos...',
    'Sometimes the oldest tricks are the newest discoveries...',
    'The universe speaks in numbers, listen carefully...',
    'What appears at the stroke of digital midnight?',
    'Colors tell stories when arranged in perfect harmony...',
    'Binary whispers hold ancient secrets...',
    'The greatest treasures require the deepest thought...'
  ];

  useEffect(() => {
    if (isHunting) {
      const interval = setInterval(() => {
        setCurrentClue(clues[Math.floor(Math.random() * clues.length)]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHunting]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      case 'Uncommon':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Rare':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Epic':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Legendary':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 dark:text-green-400';
      case 'Medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Hard':
        return 'text-orange-600 dark:text-orange-400';
      case 'Legendary':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const totalPoints = foundEggs.reduce((sum, eggId) => {
    const egg = easterEggs.find(e => e.id === eggId);
    return sum + (egg?.points || 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Easter Egg Hunt
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover hidden treasures throughout the platform. Each egg unlocks exclusive rewards and bragging rights!
            </p>
          </div>
          <button
            onClick={() => setIsHunting(!isHunting)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              isHunting
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {isHunting ? 'Stop Hunting' : 'Start Hunt'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {foundEggs.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Found</div>
          </div>
          <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {easterEggs.length - foundEggs.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Hidden</div>
          </div>
          <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {totalPoints}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Points</div>
          </div>
          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round((foundEggs.length / easterEggs.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Complete</div>
          </div>
        </div>

        {isHunting && (
          <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-flashlight-line text-purple-600 animate-pulse"></i>
              </div>
              <h4 className="font-medium text-purple-800 dark:text-purple-300">
                Hunt Mode Active
              </h4>
            </div>
            <p className="text-center text-purple-700 dark:text-purple-400 italic">
              "{currentClue || 'The hunt begins... stay vigilant for hidden clues.'}"
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {easterEggs.map((egg) => (
          <div key={egg.id} className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${!egg.found ? 'opacity-60' : ''}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                  <i className={`ri-${egg.found ? 'treasure-map-fill' : 'treasure-map-line'} text-white text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {egg.found ? egg.name : '???'}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(egg.rarity)}`}>
                      {egg.rarity}
                    </span>
                    <span className={`text-xs font-medium ${getDifficultyColor(egg.difficulty)}`}>
                      {egg.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                  {egg.points}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">points</div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              {egg.found ? egg.description : 'A mysterious treasure awaits discovery...'}
            </p>
            
            {egg.found ? (
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-gift-line text-green-600 dark:text-green-400"></i>
                    </div>
                    <span className="font-medium text-green-800 dark:text-green-300">
                      Reward Unlocked
                    </span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    {egg.reward}
                  </p>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors cursor-pointer">
                  Claim Reward
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-question-line text-gray-500 dark:text-gray-400"></i>
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Cryptic Clue
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    {egg.hint}
                  </p>
                </div>
                <button className="w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium cursor-not-allowed">
                  Not Found
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-2 flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-3">
                <i className="ri-trophy-line"></i>
              </div>
              Leaderboard Champion
            </h4>
            <p className="opacity-90">
              Find all Easter eggs to claim your spot on the global leaderboard and earn legendary status!
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold mb-2">
              #{foundEggs.length > 5 ? '1' : Math.floor(Math.random() * 50) + 10}
            </div>
            <div className="text-sm opacity-80">Current Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
}