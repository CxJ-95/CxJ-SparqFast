
'use client';

import { useState } from 'react';

interface PollOption {
  text: string;
  votes: number;
}

interface Poll {
  id: number;
  question: string;
  options: PollOption[];
  totalVotes: number;
  timeLeft: string;
  creator: string;
  userHasVoted?: boolean;
  userVotedOption?: number;
  duration: number;
  createdAt: Date;
}

export default function PollCreator() {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: 1,
      question: 'What is your biggest marketing challenge in 2024?',
      options: [
        { text: 'Attribution and ROI measurement', votes: 45 },
        { text: 'Content creation at scale', votes: 38 },
        { text: 'Customer acquisition costs', votes: 62 },
        { text: 'Keeping up with platform changes', votes: 29 }
      ],
      totalVotes: 174,
      timeLeft: '18h remaining',
      creator: 'Marketing Team',
      userHasVoted: false,
      duration: 24,
      createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000) // 6 hours ago
    },
    {
      id: 2,
      question: 'Which AI tool has been most valuable for your marketing?',
      options: [
        { text: 'ChatGPT for content creation', votes: 89 },
        { text: 'Midjourney for visuals', votes: 34 },
        { text: 'Analytics AI for insights', votes: 67 },
        { text: 'Automation platforms', votes: 52 }
      ],
      totalVotes: 242,
      timeLeft: '2d remaining',
      creator: 'AI Marketing Hub',
      userHasVoted: true,
      userVotedOption: 0,
      duration: 72,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
    }
  ]);

  const [newPoll, setNewPoll] = useState({
    question: '',
    options: ['', ''],
    duration: '24'
  });
  const [isCreating, setIsCreating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validatePoll = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!newPoll.question.trim()) {
      newErrors.question = 'Poll question is required';
    }
    
    const validOptions = newPoll.options.filter(option => option.trim());
    if (validOptions.length < 2) {
      newErrors.options = 'At least 2 options are required';
    }
    
    newPoll.options.forEach((option, index) => {
      if (!option.trim()) {
        newErrors[`option_${index}`] = 'Option cannot be empty';
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreatePoll = async () => {
    if (!validatePoll()) return;
    
    setIsCreating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const validOptions = newPoll.options.filter(option => option.trim());
    const newPollObj: Poll = {
      id: polls.length + 1,
      question: newPoll.question,
      options: validOptions.map(text => ({ text, votes: 0 })),
      totalVotes: 0,
      timeLeft: `${newPoll.duration}h remaining`,
      creator: 'You',
      userHasVoted: false,
      duration: parseInt(newPoll.duration),
      createdAt: new Date()
    };
    
    setPolls([newPollObj, ...polls]);
    setNewPoll({ question: '', options: ['', ''], duration: '24' });
    setIsCreating(false);
    setShowSuccess(true);
    setErrors({});
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleVote = (pollId: number, optionIndex: number) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId && !poll.userHasVoted) {
        const updatedOptions = [...poll.options];
        updatedOptions[optionIndex].votes += 1;
        
        return {
          ...poll,
          options: updatedOptions,
          totalVotes: poll.totalVotes + 1,
          userHasVoted: true,
          userVotedOption: optionIndex
        };
      }
      return poll;
    }));
  };

  const addOption = () => {
    if (newPoll.options.length < 6) {
      setNewPoll({
        ...newPoll,
        options: [...newPoll.options, '']
      });
    }
  };

  const removeOption = (index: number) => {
    if (newPoll.options.length > 2) {
      setNewPoll({
        ...newPoll,
        options: newPoll.options.filter((_, i) => i !== index)
      });
      
      // Clear error for removed option
      const newErrors = { ...errors };
      delete newErrors[`option_${index}`];
      setErrors(newErrors);
    }
  };

  const updateOption = (index: number, value: string) => {
    const updatedOptions = [...newPoll.options];
    updatedOptions[index] = value;
    setNewPoll({
      ...newPoll,
      options: updatedOptions
    });
    
    // Clear option error when user starts typing
    if (value.trim() && errors[`option_${index}`]) {
      const newErrors = { ...errors };
      delete newErrors[`option_${index}`];
      setErrors(newErrors);
    }
  };

  const getRemainingTime = (poll: Poll): string => {
    const now = new Date();
    const endTime = new Date(poll.createdAt.getTime() + poll.duration * 60 * 60 * 1000);
    const remaining = endTime.getTime() - now.getTime();
    
    if (remaining <= 0) return 'Ended';
    
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h remaining`;
    }
    return `${hours}h remaining`;
  };

  return (
    <div className="space-y-6">
      {showSuccess && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center text-green-600">
              <i className="ri-check-circle-line"></i>
            </div>
            <span className="text-green-800 dark:text-green-400 font-medium">
              Poll created successfully!
            </span>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Create New Poll
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Question *
            </label>
            <input
              type="text"
              value={newPoll.question}
              onChange={(e) => {
                setNewPoll({ ...newPoll, question: e.target.value });
                if (errors.question && e.target.value.trim()) {
                  const newErrors = { ...errors };
                  delete newErrors.question;
                  setErrors(newErrors);
                }
              }}
              placeholder="Ask your marketing question..."
              className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                errors.question ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              }`}
              disabled={isCreating}
              maxLength={200}
            />
            {errors.question && (
              <p className="text-red-500 text-xs mt-1">{errors.question}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">{newPoll.question.length}/200</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Options * (2-6 options)
            </label>
            <div className="space-y-2">
              {newPoll.options.map((option, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                      className={`flex-1 p-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors[`option_${index}`] ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      disabled={isCreating}
                      maxLength={100}
                    />
                    {newPoll.options.length > 2 && (
                      <button
                        onClick={() => removeOption(index)}
                        disabled={isCreating}
                        className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    )}
                  </div>
                  {errors[`option_${index}`] && (
                    <p className="text-red-500 text-xs mt-1">{errors[`option_${index}`]}</p>
                  )}
                </div>
              ))}
            </div>
            {errors.options && (
              <p className="text-red-500 text-xs mt-2">{errors.options}</p>
            )}
            {newPoll.options.length < 6 && (
              <button
                onClick={addOption}
                disabled={isCreating}
                className="mt-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium cursor-pointer disabled:opacity-50"
              >
                + Add Option
              </button>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration
              </label>
              <select
                value={newPoll.duration}
                onChange={(e) => setNewPoll({ ...newPoll, duration: e.target.value })}
                disabled={isCreating}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
              >
                <option value="1">1 hour</option>
                <option value="6">6 hours</option>
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
                <option value="72">72 hours</option>
                <option value="168">1 week</option>
              </select>
            </div>
            <button
              onClick={handleCreatePoll}
              disabled={isCreating}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
            >
              {isCreating ? 'Creating...' : 'Create Poll'}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Active Polls ({polls.length})
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {polls.map((poll) => {
            const timeLeft = getRemainingTime(poll);
            const isExpired = timeLeft === 'Ended';
            
            return (
              <div key={poll.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    by {poll.creator}
                  </span>
                  <span className={`text-sm ${isExpired ? 'text-red-500' : 'text-purple-600 dark:text-purple-400'}`}>
                    {timeLeft}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {poll.question}
                </h4>
                
                <div className="space-y-3">
                  {poll.options.map((option, index) => {
                    const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0;
                    const isUserChoice = poll.userHasVoted && poll.userVotedOption === index;
                    
                    return (
                      <div key={index}>
                        <button
                          onClick={() => !poll.userHasVoted && !isExpired && handleVote(poll.id, index)}
                          disabled={poll.userHasVoted || isExpired}
                          className={`w-full text-left p-3 border rounded-lg transition-colors ${
                            poll.userHasVoted || isExpired
                              ? 'cursor-not-allowed'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'
                          } ${
                            isUserChoice
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                              : 'border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 dark:text-gray-300 flex items-center">
                              {option.text}
                              {isUserChoice && (
                                <div className="w-4 h-4 flex items-center justify-center text-purple-600 ml-2">
                                  <i className="ri-check-line"></i>
                                </div>
                              )}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {option.votes} votes ({percentage.toFixed(1)}%)
                            </span>
                          </div>
                          {(poll.userHasVoted || poll.totalVotes > 0) && (
                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  isUserChoice ? 'bg-purple-600' : 'bg-gray-400'
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {poll.totalVotes} total votes
                    </span>
                    {poll.userHasVoted && (
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        ✓ You voted
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
