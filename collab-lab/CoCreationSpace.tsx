
'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  participants: number;
  progress: number;
  deadline: string;
  status: string;
  tags: string[];
  contributions: Array<{
    type: string;
    author: string;
    status: string;
  }>;
  isJoined?: boolean;
  isSaved?: boolean;
  isShared?: boolean;
}

export default function CoCreationSpace() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'Holiday Campaign 2024',
      description: 'Collaborative campaign for small businesses during the holiday season',
      category: 'Campaign',
      participants: 12,
      progress: 75,
      deadline: '2024-12-01',
      status: 'Active',
      tags: ['Holiday', 'SmallBusiness', 'Seasonal'],
      contributions: [
        { type: 'Creative Brief', author: 'Sarah M.', status: 'Completed' },
        { type: 'Visual Assets', author: 'Design Team', status: 'In Progress' },
        { type: 'Copy Writing', author: 'Content Team', status: 'Review' }
      ],
      isJoined: false,
      isSaved: false,
      isShared: false
    },
    {
      id: 2,
      title: 'Local Business SEO Guide',
      description: 'Community-driven guide for local SEO best practices',
      category: 'Resource',
      participants: 8,
      progress: 60,
      deadline: '2024-11-15',
      status: 'Active',
      tags: ['SEO', 'LocalBusiness', 'Guide'],
      contributions: [
        { type: 'Research', author: 'Marcus R.', status: 'Completed' },
        { type: 'Writing', author: 'Emma T.', status: 'In Progress' },
        { type: 'Examples', author: 'Community', status: 'Open' }
      ],
      isJoined: true,
      isSaved: false,
      isShared: false
    },
    {
      id: 3,
      title: 'AI Marketing Tools Database',
      description: 'Crowdsourced database of AI tools for marketing professionals',
      category: 'Database',
      participants: 25,
      progress: 45,
      deadline: '2024-12-31',
      status: 'Open',
      tags: ['AI', 'Tools', 'Database'],
      contributions: [
        { type: 'Tool Reviews', author: 'Community', status: 'Ongoing' },
        { type: 'Categorization', author: 'Tech Team', status: 'In Progress' },
        { type: 'Testing', author: 'Beta Users', status: 'Open' }
      ],
      isJoined: false,
      isSaved: true,
      isShared: false
    }
  ]);

  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
    deadline: '',
    tags: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const categories = ['Campaign', 'Resource', 'Database', 'Guide', 'Research', 'Tool'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Open':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Completed':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getContributionStatus = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 dark:text-green-400';
      case 'In Progress':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Review':
        return 'text-blue-600 dark:text-blue-400';
      case 'Open':
        return 'text-purple-600 dark:text-purple-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const validateProject = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!newProject.title.trim()) {
      newErrors.title = 'Project title is required';
    }
    
    if (!newProject.description.trim()) {
      newErrors.description = 'Project description is required';
    }
    
    if (!newProject.category) {
      newErrors.category = 'Please select a category';
    }
    
    if (!newProject.deadline) {
      newErrors.deadline = 'Project deadline is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateProject = async () => {
    if (!validateProject()) return;

    setIsCreatingProject(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const projectTags = newProject.tags 
      ? newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];

    const newProjectObj: Project = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      category: newProject.category,
      participants: 1,
      progress: 0,
      deadline: newProject.deadline,
      status: 'Open',
      tags: projectTags,
      contributions: [
        { type: 'Project Planning', author: 'You', status: 'In Progress' },
        { type: 'Team Recruitment', author: 'Community', status: 'Open' }
      ],
      isJoined: true,
      isSaved: false,
      isShared: false
    };

    setProjects([newProjectObj, ...projects]);
    setNewProject({ title: '', description: '', category: '', deadline: '', tags: '' });
    setShowNewProjectForm(false);
    setIsCreatingProject(false);
    setErrors({});
    
    setSuccessMessage('New project created successfully!');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleJoinProject = (projectId: number) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          isJoined: !project.isJoined,
          participants: project.isJoined 
            ? project.participants - 1 
            : project.participants + 1
        };
      }
      return project;
    }));

    const project = projects.find(p => p.id === projectId);
    if (project) {
      const message = project.isJoined 
        ? 'Left project successfully!' 
        : 'Joined project successfully!';
      
      setSuccessMessage(message);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleSaveProject = (projectId: number) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        return { ...project, isSaved: !project.isSaved };
      }
      return project;
    }));

    const project = projects.find(p => p.id === projectId);
    if (project) {
      const message = project.isSaved 
        ? 'Removed from saved projects!' 
        : 'Project saved for later!';
      
      setSuccessMessage(message);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleShareProject = async (projectId: number) => {
    // Simulate sharing process
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, isShared: true } : p
    ));

    // Reset share status after animation
    setTimeout(() => {
      setProjects(projects.map(p => 
        p.id === projectId ? { ...p, isShared: false } : p
      ));
    }, 1000);

    setSuccessMessage('Project shared with your network!');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
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
              {successMessage}
            </span>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Active Co-Creation Projects
          </h3>
          <button 
            onClick={() => setShowNewProjectForm(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Start New Project
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Join collaborative projects with the community. Share your expertise, learn from others, and create amazing marketing resources together.
        </p>
      </div>

      {/* New Project Form Modal */}
      {showNewProjectForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Create New Project
              </h3>
              <button
                onClick={() => {
                  setShowNewProjectForm(false);
                  setNewProject({ title: '', description: '', category: '', deadline: '', tags: '' });
                  setErrors({});
                }}
                disabled={isCreatingProject}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer disabled:opacity-50"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => {
                    setNewProject({ ...newProject, title: e.target.value });
                    if (errors.title && e.target.value.trim()) {
                      const newErrors = { ...errors };
                      delete newErrors.title;
                      setErrors(newErrors);
                    }
                  }}
                  placeholder="Enter your project title..."
                  className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  disabled={isCreatingProject}
                  maxLength={100}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">{newProject.title.length}/100</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => {
                    setNewProject({ ...newProject, description: e.target.value });
                    if (errors.description && e.target.value.trim()) {
                      const newErrors = { ...errors };
                      delete newErrors.description;
                      setErrors(newErrors);
                    }
                  }}
                  placeholder="Describe your project and what kind of collaboration you're looking for..."
                  rows={4}
                  className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                    errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  disabled={isCreatingProject}
                  maxLength={300}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">{newProject.description.length}/300</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={newProject.category}
                    onChange={(e) => {
                      setNewProject({ ...newProject, category: e.target.value });
                      if (errors.category && e.target.value) {
                        const newErrors = { ...errors };
                        delete newErrors.category;
                        setErrors(newErrors);
                      }
                    }}
                    className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8 ${
                      errors.category ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    disabled={isCreatingProject}
                  >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Deadline *
                  </label>
                  <input
                    type="date"
                    value={newProject.deadline}
                    min={getTodayDate()}
                    onChange={(e) => {
                      setNewProject({ ...newProject, deadline: e.target.value });
                      if (errors.deadline && e.target.value) {
                        const newErrors = { ...errors };
                        delete newErrors.deadline;
                        setErrors(newErrors);
                      }
                    }}
                    className={`w-full p-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.deadline ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    disabled={isCreatingProject}
                  />
                  {errors.deadline && (
                    <p className="text-red-500 text-xs mt-1">{errors.deadline}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={newProject.tags}
                  onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
                  placeholder="e.g., Marketing, Social Media, Content Creation"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  disabled={isCreatingProject}
                />
                <p className="text-xs text-gray-500 mt-1">Add relevant tags to help others find your project</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={() => {
                  setShowNewProjectForm(false);
                  setNewProject({ title: '', description: '', category: '', deadline: '', tags: '' });
                  setErrors({});
                }}
                disabled={isCreatingProject}
                className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProject}
                disabled={isCreatingProject}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isCreatingProject ? (
                  <span className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-loader-4-line animate-spin"></i>
                    </div>
                    Creating...
                  </span>
                ) : (
                  'Create Project'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {project.participants} participants
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Due: {new Date(project.deadline).toLocaleDateString()}
                </span>
              </div>
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                {project.progress}% complete
              </span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="space-y-2 mb-4">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Contributions Needed:
              </h5>
              {project.contributions.map((contribution, index) => (
                <div key={index} className="flex items-center justify-between py-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {contribution.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-500">
                      {contribution.author}
                    </span>
                    <span className={`text-xs font-medium ${getContributionStatus(contribution.status)}`}>
                      {contribution.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => handleJoinProject(project.id)}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  project.isJoined
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {project.isJoined ? 'Joined' : 'Join Project'}
              </button>
              <button 
                onClick={() => handleSaveProject(project.id)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer ${
                  project.isSaved
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
              >
                <i className={project.isSaved ? 'ri-bookmark-fill' : 'ri-bookmark-line'}></i>
              </button>
              <button 
                onClick={() => handleShareProject(project.id)}
                disabled={project.isShared}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors cursor-pointer disabled:opacity-50 ${
                  project.isShared
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600'
                    : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20'
                }`}
              >
                <i className={project.isShared ? 'ri-check-line' : 'ri-share-line'}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
