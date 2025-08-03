
'use client';

import { useState } from 'react';

interface Module {
  id: number;
  type: string;
  title: string;
  icon: string;
  color: string;
}

interface StrategyBuilderProps {
  modules: Module[];
  onRemoveModule: (id: number) => void;
  isBuilding: boolean;
  setIsBuilding: (building: boolean) => void;
  onStrategyGenerated: (strategy: any) => void;
}

export default function StrategyBuilder({
  modules,
  onRemoveModule,
  isBuilding,
  setIsBuilding,
  onStrategyGenerated
}: StrategyBuilderProps) {
  const [draggedModule, setDraggedModule] = useState<number | null>(null);
  const [generatedStrategy, setGeneratedStrategy] = useState<any>(null);
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [showInputs, setShowInputs] = useState(false);
  const [expectedROI, setExpectedROI] = useState('');

  const handleDragStart = (id: number) => {
    setDraggedModule(id);
  };

  const handleDragEnd = () => {
    setDraggedModule(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const calculateROI = (timelineWeeks: number, budgetAmount: number) => {
    const baseROI = 200;
    const timelineMultiplier = Math.max(0.5, Math.min(2, (24 - timelineWeeks) / 12));
    const budgetMultiplier = Math.max(0.8, Math.min(1.5, Math.log(budgetAmount / 1000) / 10));
    const moduleBonus = modules.length * 25;

    const calculatedROI = Math.round(baseROI * timelineMultiplier * budgetMultiplier + moduleBonus);
    return `${calculatedROI}-${calculatedROI + 100}%`;
  };

  const handleTimelineChange = (value: string) => {
    setTimeline(value);
    if (value && budget) {
      const timelineWeeks = parseInt(value);
      const budgetAmount = parseInt(budget.replace(/[^0-9]/g, ''));
      setExpectedROI(calculateROI(timelineWeeks, budgetAmount));
    }
  };

  const handleBudgetChange = (value: string) => {
    setBudget(value);
    if (timeline && value) {
      const timelineWeeks = parseInt(timeline);
      const budgetAmount = parseInt(value.replace(/[^0-9]/g, ''));
      setExpectedROI(calculateROI(timelineWeeks, budgetAmount));
    }
  };

  const handleGenerateStrategy = () => {
    if (modules.length === 0) {
      setShowInputs(true);
      return;
    }

    if (!timeline || !budget) {
      setShowInputs(true);
      return;
    }

    generateStrategy();
  };

  const generateStrategy = () => {
    setIsBuilding(true);
    setTimeout(() => {
      const strategy = {
        title: "Comprehensive Marketing Strategy",
        timeline: timeline + " weeks",
        budget: budget,
        expectedROI: expectedROI,
        phases: modules.map((module, index) => ({
          phase: index + 1,
          module: module.title,
          duration: "2-3 weeks",
          keyActions: getKeyActions(module.type),
          metrics: getMetrics(module.type)
        })),
        recommendations: [
          "Start with foundational modules first",
          "Implement tracking from day one",
          "Budget 30% for testing and optimization",
          "Review performance weekly"
        ]
      };
      setGeneratedStrategy(strategy);
      setIsBuilding(false);
      setShowInputs(false);

      // Notify parent component that strategy was generated
      onStrategyGenerated(strategy);
    }, 3000);
  };

  const getKeyActions = (type: string) => {
    const actions = {
      content: ["Create content calendar", "Develop brand voice", "Produce pillar content"],
      social: ["Set up social profiles", "Create posting schedule", "Engage with community"],
      email: ["Build email list", "Design templates", "Set up automation"],
      seo: ["Keyword research", "On-page optimization", "Link building"],
      ads: ["Campaign setup", "Audience targeting", "A/B test creatives"],
      analytics: ["Install tracking", "Set up dashboards", "Define KPIs"]
    };
    return actions[type as keyof typeof actions] || ["Plan implementation", "Execute strategy", "Monitor results"];
  };

  const getMetrics = (type: string) => {
    const metrics = {
      content: ["Engagement rate", "Content shares", "Time on page"],
      social: ["Follower growth", "Reach", "Engagement"],
      email: ["Open rate", "Click rate", "Conversion rate"],
      seo: ["Organic traffic", "Keyword rankings", "Backlinks"],
      ads: ["CTR", "CPC", "ROAS"],
      analytics: ["Traffic sources", "User behavior", "Conversion tracking"]
    };
    return metrics[type as keyof typeof metrics] || ["Performance metrics", "ROI tracking", "Goal completion"];
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 border-purple-300 dark:bg-purple-900/30 dark:border-purple-700',
      blue: 'bg-blue-100 border-blue-300 dark:bg-blue-900/30 dark:border-blue-700',
      green: 'bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700',
      orange: 'bg-orange-100 border-orange-300 dark:bg-orange-900/30 dark:border-orange-700',
      red: 'bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700',
      indigo: 'bg-indigo-100 border-indigo-300 dark:bg-indigo-900/30 dark:border-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mr-3">
              <i className="ri-layout-grid-line text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Strategy Canvas
            </h3>
          </div>
          <button
            onClick={handleGenerateStrategy}
            disabled={isBuilding}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
          >
            {isBuilding ? (
              <span className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-loader-4-line animate-spin"></i>
                </div>
                Building...
              </span>
            ) : (
              'Generate Strategy'
            )}
          </button>
        </div>

        <div
          className="min-h-96 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {modules.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <i className="ri-drag-drop-line text-4xl"></i>
              </div>
              <p className="text-lg font-medium">Drag modules here to build your strategy</p>
              <p className="text-sm mt-2">Start by selecting campaign modules from the left panel</p>
            </div>
          ) : (
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  draggable
                  onDragStart={() => handleDragStart(module.id)}
                  onDragEnd={handleDragEnd}
                  className={`p-4 rounded-lg border-2 cursor-move transition-all duration-300 ${
                    draggedModule === module.id ? 'opacity-50 transform scale-95' : 'hover:shadow-md'
                  } ${getColorClasses(module.color)}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-3">
                        <i className={`${module.icon} text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">
                          {module.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Step {index + 1} of your strategy
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveModule(module.id)}
                      className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors cursor-pointer"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {modules.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              Strategy Timeline
            </h4>
            <div className="flex items-center space-x-2">
              {modules.map((module, index) => (
                <div key={module.id} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full bg-${module.color}-500`}></div>
                  {index < modules.length - 1 && (
                    <div className="w-8 h-px bg-gray-300 dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showInputs && modules.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3">
              <i className="ri-settings-3-line text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Strategy Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timeline (weeks)
              </label>
              <select
                value={timeline}
                onChange={(e) => handleTimelineChange(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
              >
                <option value="">Select timeline</option>
                <option value="4">4 weeks - Quick Launch</option>
                <option value="8">8 weeks - Standard</option>
                <option value="12">12 weeks - Comprehensive</option>
                <option value="16">16 weeks - Enterprise</option>
                <option value="24">24 weeks - Long-term</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => handleBudgetChange(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
              >
                <option value="">Select budget</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000+">$100,000+</option>
              </select>
            </div>
          </div>

          {timeline && budget && expectedROI && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full mr-2">
                      <i className="ri-trophy-line text-white"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Expected ROI
                    </h4>
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {expectedROI}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Based on your timeline and budget selection
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button
              onClick={generateStrategy}
              disabled={!timeline || !budget || isBuilding}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
            >
              {isBuilding ? (
                <span className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                  </div>
                  Building Strategy...
                </span>
              ) : (
                'Generate Detailed Strategy'
              )}
            </button>
          </div>
        </div>
      )}

      {generatedStrategy && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3">
              <i className="ri-check-line text-white"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Generated Strategy Report
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Timeline</h4>
              <p className="text-2xl font-bold text-purple-600">{generatedStrategy.timeline}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Budget Range</h4>
              <p className="text-lg font-bold text-blue-600">{generatedStrategy.budget}</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Expected ROI</h4>
              <p className="text-2xl font-bold text-green-600">{generatedStrategy.expectedROI}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Implementation Phases</h4>
            {generatedStrategy.phases.map((phase: any, index: number) => (
              <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200">
                    Phase {phase.phase}: {phase.module}
                  </h5>
                  <span className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {phase.duration}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Actions</h6>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {phase.keyActions.map((action: string, i: number) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Metrics</h6>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {phase.metrics.map((metric: string, i: number) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-lg">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Strategic Recommendations</h4>
            <ul className="space-y-2">
              {generatedStrategy.recommendations.map((rec: string, index: number) => (
                <li key={index} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-lightbulb-line text-orange-500"></i>
                  </div>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
