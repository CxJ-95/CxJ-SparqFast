'use client';

import { useState, useEffect } from 'react';

export default function LiveChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Junior Onunze',
      avatar: 'SC',
      message: 'Anyone here experimenting with AI-generated video content? Just tried a new tool and the results are amazing!',
      timestamp: '10:30 AM',
      isOnline: true
    },
    {
      id: 2,
      user: 'Marcus Rodriguez',
      avatar: 'MR',
      message: 'Which tool are you using? I\'ve been looking for something for our restaurant clients.',
      timestamp: '10:32 AM',
      isOnline: true
    },
    {
      id: 3,
      user: 'Chrisia Borda',
      avatar: 'ET',
      message: 'I can share some insights on video content. Currently working on a campaign that increased engagement by 200%',
      timestamp: '10:35 AM',
      isOnline: false
    }
  ]);

  const [onlineUsers] = useState([
    { name: 'Junior Onunze', avatar: 'SC', status: 'Marketing Director' },
    { name: 'Marcus Rodriguez', avatar: 'MR', status: 'Growth Hacker' },
    { name: 'Lisa Park', avatar: 'LP', status: 'Content Strategist' },
    { name: 'David Kim', avatar: 'DK', status: 'SEO Specialist' },
    { name: 'Rachel Green', avatar: 'RG', status: 'Social Media Manager' }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(Math.random() > 0.7);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        avatar: 'YU',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isOnline: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-96">
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Online Now ({onlineUsers.length})
          </h3>
          <div className="space-y-3">
            {onlineUsers.map((user, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user.avatar}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Marketing Professionals Chat
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time discussions about marketing trends and strategies
            </p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {message.avatar}
                    </span>
                  </div>
                  {message.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {message.user}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {message.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {message.message}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-sm">Someone is typing...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-send-plane-line"></i>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}