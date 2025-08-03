
'use client';

import { useState } from 'react';

interface Post {
  id: number;
  author: string;
  role: string;
  company: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  isLiked?: boolean;
  userComments?: Array<{
    id: number;
    author: string;
    content: string;
    time: string;
  }>;
  showComments?: boolean;
}

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Junior Onunze',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      time: '2 hours ago',
      content: 'Just launched our new customer persona mapping tool! The AI-generated insights are incredible. Seeing 40% better targeting already. Who else is using AI for persona development?',
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ['AI', 'PersonaDevelopment', 'MarketingTech'],
      isLiked: false,
      userComments: [
        { id: 1, author: 'Sarah M.', content: 'Which tool are you using? Would love to try it!', time: '1h ago' },
        { id: 2, author: 'Mike Chen', content: 'AI personas have been game-changing for our campaigns too', time: '45m ago' }
      ],
      showComments: false
    },
    {
      id: 2,
      author: 'Marcus Rodriguez',
      role: 'Growth Hacker',
      company: 'LocalEats',
      time: '4 hours ago',
      content: 'Quick tip for local businesses: Google My Business posts with photos get 42% more clicks. Just tested this with our restaurant clients. What content performs best for you?',
      likes: 18,
      comments: 12,
      shares: 7,
      tags: ['LocalSEO', 'GoogleMyBusiness', 'RestaurantMarketing'],
      isLiked: true,
      userComments: [
        { id: 1, author: 'Lisa Park', content: 'Great insight! We saw similar results with behind-the-scenes photos', time: '3h ago' }
      ],
      showComments: false
    },
    {
      id: 3,
      author: 'Chrisia Borda',
      role: 'Content Strategist',
      company: 'Creative Collective',
      time: '6 hours ago',
      content: 'Hosting a virtual brainstorm session tomorrow at 3 PM EST: "Interactive Content That Converts". Bringing case studies from our recent campaigns. Who\'s in?',
      likes: 31,
      comments: 15,
      shares: 9,
      tags: ['ContentStrategy', 'VirtualEvent', 'Collaboration'],
      isLiked: false,
      userComments: [],
      showComments: false
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newComment, setNewComment] = useState<{[key: number]: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const mockUsers = [
    { name: 'You', role: 'Marketing Professional', company: 'Your Company' },
    { name: 'Emma Thompson', role: 'Social Media Manager', company: 'Digital Agency' },
    { name: 'David Kim', role: 'SEO Specialist', company: 'Growth Co' },
    { name: 'Rachel Green', role: 'Brand Manager', company: 'Creative Studio' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const currentUser = mockUsers[0];
    const newPostObj: Post = {
      id: posts.length + 1,
      author: currentUser.name,
      role: currentUser.role,
      company: currentUser.company,
      content: newPost,
      time: 'Just now',
      likes: 0,
      comments: 0,
      shares: 0,
      tags: extractHashtags(newPost),
      isLiked: false,
      userComments: [],
      showComments: false
    };
    
    setPosts([newPostObj, ...posts]);
    setNewPost('');
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const extractHashtags = (text: string): string[] => {
    const hashtags = text.match(/#[\w]+/g);
    return hashtags ? hashtags.map(tag => tag.slice(1)) : [];
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const toggleComments = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, showComments: !post.showComments };
      }
      return post;
    }));
  };

  const handleAddComment = (postId: number) => {
    const commentText = newComment[postId];
    if (!commentText?.trim()) return;

    const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const newCommentObj = {
      id: Date.now(),
      author: randomUser.name,
      content: commentText,
      time: 'Just now'
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1,
          userComments: [...(post.userComments || []), newCommentObj],
          showComments: true
        };
      }
      return post;
    }));

    setNewComment({ ...newComment, [postId]: '' });
  };

  const handleShare = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, shares: post.shares + 1 };
      }
      return post;
    }));
    
    // Show share feedback
    alert('Post shared to your network!');
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
              Post shared successfully!
            </span>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-white"></i>
            </div>
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your marketing insights, ask questions, or start a discussion... Use #hashtags to categorize your post!"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
                maxLength={500}
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-4">
                  <button type="button" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 cursor-pointer" disabled={isSubmitting}>
                    <i className="ri-image-line"></i>
                  </button>
                  <button type="button" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 cursor-pointer" disabled={isSubmitting}>
                    <i className="ri-poll-line"></i>
                  </button>
                  <button type="button" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600 cursor-pointer" disabled={isSubmitting}>
                    <i className="ri-hashtag"></i>
                  </button>
                  <span className="text-xs text-gray-500">{newPost.length}/500</span>
                </div>
                <button
                  type="submit"
                  disabled={!newPost.trim() || isSubmitting}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Sharing...' : 'Share'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    {post.author}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {post.role} at {post.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.time}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.content}
              </p>
              
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center space-x-6 mb-4">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                    post.isLiked 
                      ? 'text-red-500' 
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={post.isLiked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                  </div>
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button 
                  onClick={() => toggleComments(post.id)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-chat-3-line"></i>
                  </div>
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button 
                  onClick={() => handleShare(post.id)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors cursor-pointer"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-share-line"></i>
                  </div>
                  <span className="text-sm">{post.shares}</span>
                </button>
              </div>

              {post.showComments && (
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="space-y-3 mb-4">
                    {post.userComments?.map((comment) => (
                      <div key={comment.id} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {comment.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              {comment.author}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {comment.time}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={newComment[post.id] || ''}
                      onChange={(e) => setNewComment({...newComment, [post.id]: e.target.value})}
                      placeholder="Write a comment..."
                      className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      maxLength={300}
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      disabled={!newComment[post.id]?.trim()}
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-send-plane-line"></i>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
