
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import StrategyBuilder from './StrategyBuilder';
import CampaignModule from './CampaignModule';
import AIAssistant from './AIAssistant';
import EmailCaptureModal from '../../components/EmailCaptureModal';
import AuthModal from '../../components/AuthModal';
import { useAuth } from '../../hooks/useAuth';

export default function StrategyPlayground() {
  const [selectedModules, setSelectedModules] = useState<any[]>([]);
  const [isBuilding, setIsBuilding] = useState(false);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [generatedStrategy, setGeneratedStrategy] = useState<any>(null);
  
  const { hasAccess, captureEmail, loading } = useAuth();

  const addModule = (module: any) => {
    setSelectedModules([...selectedModules, { ...module, id: Date.now() }]);
  };

  const removeModule = (id: number) => {
    setSelectedModules(selectedModules.filter(module => module.id !== id));
  };

  const handleStrategyGenerated = (strategy: any) => {
    setGeneratedStrategy(strategy);
    // Show email capture after strategy is generated (if not already captured)
    if (!hasAccess('strategy-playground')) {
      setTimeout(() => {
        setShowEmailCapture(true);
      }, 1500); // Give users a moment to see their results
    }
  };

  const handleEmailSuccess = async (email: string) => {
    const success = await captureEmail(email, 'strategy-playground');
    if (success) {
      setShowEmailCapture(false);
    }
  };

  const handleUpgradeToFullAccount = () => {
    setShowEmailCapture(false);
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[80vh]">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin text-purple-600"></i>
            </div>
            <span className="text-gray-600 dark:text-gray-400">Loading your workspace...</span>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Strategy Playground
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Build your marketing campaigns with our interactive drag-and-drop tools. 
              Get AI-powered suggestions as you create your perfect strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3">
                    <i className="ri-apps-line text-white"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Campaign Modules
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    { type: 'content', title: 'Content Strategy', icon: 'ri-article-line', color: 'purple' },
                    { type: 'social', title: 'Social Media', icon: 'ri-share-line', color: 'blue' },
                    { type: 'email', title: 'Email Marketing', icon: 'ri-mail-line', color: 'green' },
                    { type: 'seo', title: 'SEO Optimization', icon: 'ri-search-line', color: 'orange' },
                    { type: 'ads', title: 'Paid Advertising', icon: 'ri-advertisement-line', color: 'red' },
                    { type: 'analytics', title: 'Analytics', icon: 'ri-bar-chart-line', color: 'indigo' }
                  ].map((module) => (
                    <CampaignModule
                      key={module.type}
                      module={module}
                      onAdd={addModule}
                    />
                  ))}
                </div>
                
                {hasAccess('strategy-playground') && (
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span className="text-sm font-medium text-green-700 dark:text-green-400">
                        Premium Access Active
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <StrategyBuilder
                modules={selectedModules}
                onRemoveModule={removeModule}
                isBuilding={isBuilding}
                setIsBuilding={setIsBuilding}
                onStrategyGenerated={handleStrategyGenerated}
              />
            </div>

            <div className="lg:col-span-1">
              <AIAssistant
                selectedModules={selectedModules}
                isBuilding={isBuilding}
              />
            </div>
          </div>
        </div>
      </main>

      <EmailCaptureModal
        isOpen={showEmailCapture}
        onClose={() => setShowEmailCapture(false)}
        onSuccess={handleEmailSuccess}
        onUpgrade={handleUpgradeToFullAccount}
        source="strategy-playground"
        title="Save Your Marketing Strategy"
        description="You've created an amazing strategy! Enter your email to save it and unlock advanced features for your marketing campaigns."
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
        mode="signup"
      />
    </div>
  );
}
