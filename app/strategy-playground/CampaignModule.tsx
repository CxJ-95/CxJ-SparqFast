'use client';

interface CampaignModuleProps {
  module: {
    type: string;
    title: string;
    icon: string;
    color: string;
  };
  onAdd: (module: any) => void;
}

export default function CampaignModule({ module, onAdd }: CampaignModuleProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'hover:bg-purple-50 dark:hover:bg-purple-900/30 border-purple-200 dark:border-purple-700',
      blue: 'hover:bg-blue-50 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-700',
      green: 'hover:bg-green-50 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700',
      orange: 'hover:bg-orange-50 dark:hover:bg-orange-900/30 border-orange-200 dark:border-orange-700',
      red: 'hover:bg-red-50 dark:hover:bg-red-900/30 border-red-200 dark:border-red-700',
      indigo: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconColor = (color: string) => {
    const colors = {
      purple: 'text-purple-600 dark:text-purple-400',
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      orange: 'text-orange-600 dark:text-orange-400',
      red: 'text-red-600 dark:text-red-400',
      indigo: 'text-indigo-600 dark:text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div
      onClick={() => onAdd(module)}
      className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 ${getColorClasses(module.color)}`}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center mr-3">
          <i className={`${module.icon} text-lg ${getIconColor(module.color)}`}></i>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
            {module.title}
          </h4>
        </div>
      </div>
    </div>
  );
}