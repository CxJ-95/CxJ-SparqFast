
'use client';

import { useState } from 'react';

interface AIPersonalizerProps {
  onPersonalize: (data: any) => void;
}

export default function AIPersonalizer({ onPersonalize }: AIPersonalizerProps) {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({
    businessType: '',
    industry: '',
    goals: '',
    budget: '',
    challenges: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 'businessType',
      question: 'What type of business are you?',
      options: ['Startup', 'Local Shop', 'E-commerce', 'Service Provider', 'Restaurant', 'Other']
    },
    {
      id: 'industry',
      question: 'Which industry best describes your business?',
      options: ['Technology', 'Retail', 'Food & Beverage', 'Health & Fitness', 'Education', 'Creative Services']
    },
    {
      id: 'goals',
      question: 'What is your primary marketing goal?',
      options: ['Increase Brand Awareness', 'Generate More Leads', 'Boost Sales', 'Build Community', 'Launch New Product']
    },
    {
      id: 'budget',
      question: 'What is your monthly marketing budget?',
      options: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+']
    },
    {
      id: 'challenges',
      question: 'What is your biggest marketing challenge?',
      options: ['Limited Time', 'Tight Budget', 'Lack of Expertise', 'Poor ROI', 'Competition', 'Measuring Results']
    }
  ];

  const handleResponse = (value: string) => {
    const newResponses = { ...responses, [questions[step].id]: value };
    setResponses(newResponses);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
      // Auto-generate insights when survey is complete
      setTimeout(() => {
        onPersonalize(newResponses);
      }, 1500); // Small delay to show completion screen briefly
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleEditResponse = (questionIndex: number) => {
    setStep(questionIndex);
    setIsCompleted(false);
  };

  const handleSubmit = () => {
    onPersonalize(responses);
  };

  const handleRestart = () => {
    setStep(0);
    setResponses({
      businessType: '',
      industry: '',
      goals: '',
      budget: '',
      challenges: ''
    });
    setIsCompleted(false);
  };

  const getCurrentAnswer = () => {
    return responses[questions[step]?.id as keyof typeof responses];
  };

  if (isCompleted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full mx-auto mb-4 animate-pulse">
            <i className="ri-check-line text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Survey Complete!
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Generating your personalized insights...
          </p>

          {/* Loading animation */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {questions.map((question, index) => {
            const answer = responses[question.id as keyof typeof responses];
            return (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                    {question.question}
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold">
                    {answer}
                  </p>
                </div>
                <button
                  onClick={() => handleEditResponse(index)}
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer whitespace-nowrap"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-edit-line"></i>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Generate My Insights
          </button>
          <button
            onClick={handleRestart}
            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            AI Personalization Survey
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {step + 1} of {questions.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Getting Started</span>
          <span>Almost Done</span>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {questions[step].question}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleResponse(option)}
                className={`p-4 text-left rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                  getCurrentAnswer() === option
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                    : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-purple-300 hover:bg-purple-25 dark:hover:bg-purple-900/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300">
                    {option}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      getCurrentAnswer() === option
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300 dark:border-gray-500'
                    }`}
                  >
                    {getCurrentAnswer() === option && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            className={`flex items-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              step === 0
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line"></i>
            </div>
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => responses[questions[index].id as keyof typeof responses] && setStep(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === step
                    ? 'bg-purple-600'
                    : responses[questions[index].id as keyof typeof responses]
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gray-300 dark:bg-gray-600'
                } ${
                  responses[questions[index].id as keyof typeof responses] ? 'cursor-pointer' : 'cursor-default'
                }`}
                disabled={!responses[questions[index].id as keyof typeof responses]}
              />
            ))}
          </div>

          <button
            onClick={() => getCurrentAnswer() && (step < questions.length - 1 ? setStep(step + 1) : setIsCompleted(true))}
            disabled={!getCurrentAnswer()}
            className={`flex items-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
              !getCurrentAnswer()
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            }`}
          >
            <span>{step === questions.length - 1 ? 'Complete' : 'Next'}</span>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={step === questions.length - 1 ? 'ri-check-line' : 'ri-arrow-right-line'}></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
