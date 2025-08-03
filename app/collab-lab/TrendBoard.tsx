
'use client';

import { useState } from 'react';

export default function TrendBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedTrends, setSavedTrends] = useState<number[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState<any>(null);
  const [sortBy, setSortBy] = useState<'growth' | 'engagement' | 'recent'>('growth');

  const [allTrends] = useState([
    {
      id: 1,
      title: "AI-Powered Customer Service",
      category: "Technology",
      growth: "+156%",
      engagement: 2400,
      description: "Businesses integrating AI chatbots seeing massive customer satisfaction improvements",
      tags: ["AI", "Customer Service", "Automation"],
      timeframe: "Last 3 months",
      relevance: 95,
      image: "https://readdy.ai/api/search-image?query=modern%20ai%20customer%20service%20interface%20with%20chatbots%20and%20automated%20responses%20in%20a%20clean%20business%20environment&width=400&height=240&seq=trend1&orientation=landscape"
    },
    {
      id: 2,
      title: "Sustainable Packaging Revolution",
      category: "Sustainability",
      growth: "+89%",
      engagement: 1800,
      description: "Eco-friendly packaging solutions driving consumer purchasing decisions",
      tags: ["Sustainability", "Packaging", "Consumer Trends"],
      timeframe: "Last 6 months",
      relevance: 87,
      image: "https://readdy.ai/api/search-image?query=eco-friendly%20sustainable%20packaging%20materials%20and%20biodegradable%20containers%20in%20a%20modern%20clean%20environment&width=400&height=240&seq=trend2&orientation=landscape"
    },
    {
      id: 3,
      title: "Micro-Influencer Marketing",
      category: "Marketing",
      growth: "+234%",
      engagement: 3200,
      description: "Brands shifting focus from mega-influencers to authentic micro-creators",
      tags: ["Influencer", "Marketing", "Social Media"],
      timeframe: "Last 2 months",
      relevance: 92,
      image: "https://readdy.ai/api/search-image?query=social%20media%20micro-influencer%20creating%20authentic%20content%20with%20smartphone%20and%20ring%20light%20in%20cozy%20home%20setting&width=400&height=240&seq=trend3&orientation=landscape"
    },
    {
      id: 4,
      title: "Remote Work Technology",
      category: "Technology",
      growth: "+67%",
      engagement: 1500,
      description: "New collaboration tools revolutionizing distributed team productivity",
      tags: ["Remote Work", "Technology", "Productivity"],
      timeframe: "Last 4 months",
      relevance: 78,
      image: "https://readdy.ai/api/search-image?query=modern%20remote%20work%20setup%20with%20multiple%20monitors%20video%20conferencing%20and%20collaboration%20tools%20in%20professional%20home%20office&width=400&height=240&seq=trend4&orientation=landscape"
    },
    {
      id: 5,
      title: "Voice Commerce Growth",
      category: "E-commerce",
      growth: "+145%",
      engagement: 2100,
      description: "Voice-activated shopping through smart speakers gaining mainstream adoption",
      tags: ["Voice Commerce", "E-commerce", "Smart Speakers"],
      timeframe: "Last 5 months",
      relevance: 83,
      image: "https://readdy.ai/api/search-image?query=smart%20speaker%20device%20with%20voice%20commerce%20interface%20showing%20shopping%20cart%20and%20product%20recommendations%20in%20modern%20home&width=400&height=240&seq=trend5&orientation=landscape"
    },
    {
      id: 6,
      title: "Mental Health Tech",
      category: "Health",
      growth: "+198%",
      engagement: 2800,
      description: "Digital wellness platforms seeing unprecedented user growth",
      tags: ["Mental Health", "Technology", "Wellness"],
      timeframe: "Last 3 months",
      relevance: 89,
      image: "https://readdy.ai/api/search-image?query=mental%20health%20and%20wellness%20technology%20app%20interface%20showing%20meditation%20and%20mindfulness%20features%20in%20calming%20design&width=400&height=240&seq=trend6&orientation=landscape"
    }
  ]);

  const categories = ['all', 'Technology', 'Marketing', 'Sustainability', 'E-commerce', 'Health'];

  const filteredTrends = allTrends
    .filter(trend => {
      const matchesSearch = trend.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trend.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           trend.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || trend.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'growth') {
        return parseInt(b.growth.replace(/[^0-9]/g, '')) - parseInt(a.growth.replace(/[^0-9]/g, ''));
      } else if (sortBy === 'engagement') {
        return b.engagement - a.engagement;
      } else {
        return b.relevance - a.relevance;
      }
    });

  const handleSaveTrend = (trendId: number) => {
    if (savedTrends.includes(trendId)) {
      setSavedTrends(savedTrends.filter(id => id !== trendId));
    } else {
      setSavedTrends([...savedTrends, trendId]);
    }
  };

  const handleShareTrend = (trend: any) => {
    setSelectedTrend(trend);
    setShowShareModal(true);

    // Simulate sharing process
    setTimeout(() => {
      setShowShareModal(false);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    }, 1500);
  };

  const getTrendGrowthColor = (growth: string) => {
    const growthNum = parseInt(growth.replace(/[^0-9]/g, ''));
    if (growthNum >= 150) return 'text-green-600 bg-green-100 dark:bg-green-900/30';
    if (growthNum >= 100) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
    if (growthNum >= 50) return 'text-orange-600 bg-orange-100 dark:bg-orange-900/30';
    return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
  };

  const getEngagementLevel = (engagement: number) => {
    if (engagement >= 2500) return { level: 'High', color: 'text-green-600' };
    if (engagement >= 1500) return { level: 'Medium', color: 'text-orange-600' };
    return { level: 'Low', color: 'text-gray-600' };
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Trend Board</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover and track the latest marketing trends
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search trends..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
            </div>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'growth' | 'engagement' | 'recent')}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="growth">Sort by Growth</option>
            <option value="engagement">Sort by Engagement</option>
            <option value="recent">Sort by Relevance</option>
          </select>
        </div>
      </div>

      {/* Success notification */}
      {shareSuccess && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
          <div className="flex items-center">
            <div className="w-5 h-5 flex items-center justify-center mr-2">
              <i className="ri-check-line text-green-600"></i>
            </div>
            <span className="text-green-800 dark:text-green-300 font-medium">
              Trend shared successfully with your team!
            </span>
          </div>
        </div>
      )}

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'all' ? 'All Categories' : category}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {filteredTrends.length} trends found
        </p>
        {savedTrends.length > 0 && (
          <p className="text-sm text-purple-600 dark:text-purple-400">
            {savedTrends.length} trends saved
          </p>
        )}
      </div>

      {/* Trends grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrends.map((trend) => {
          const engagementData = getEngagementLevel(trend.engagement);
          const isSaved = savedTrends.includes(trend.id);

          return (
            <div key={trend.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                    {trend.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleSaveTrend(trend.id)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                      isSaved
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-400 hover:bg-purple-500 hover:text-white'
                    }`}
                  >
                    <i className={isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">
                    {trend.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getTrendGrowthColor(trend.growth)}`}>
                    {trend.growth}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {trend.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {trend.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span>{trend.timeframe}</span>
                  <span className={engagementData.color}>
                    {engagementData.level} Engagement ({trend.engagement.toLocaleString()})
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleSaveTrend(trend.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      isSaved
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className={isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
                    </div>
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    onClick={() => handleShareTrend(trend)}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-share-line"></i>
                    </div>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTrends.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4">
            <i className="ri-search-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No trends found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or category filters
          </p>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4">
                <i className="ri-share-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Sharing Trend
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sharing "{selectedTrend?.title}" with your team...
              </p>
              <div className="flex justify-center">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-loader-4-line animate-spin text-blue-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
