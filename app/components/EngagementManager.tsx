'use client';

import { useState } from 'react';
import { MessageSquare, Heart, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function EngagementManager() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const comments = [
    {
      id: 1,
      platform: 'Instagram',
      author: '@sarah_marketing',
      content: 'This is exactly what I needed! Thank you for sharing 🙌',
      post: 'Summer collection launch',
      time: '5 minutes ago',
      status: 'pending',
      sentiment: 'positive',
    },
    {
      id: 2,
      platform: 'Facebook',
      author: 'John Smith',
      content: 'How can I get more information about your services?',
      post: 'New product announcement',
      time: '12 minutes ago',
      status: 'pending',
      sentiment: 'neutral',
    },
    {
      id: 3,
      platform: 'LinkedIn',
      author: 'Emily Chen',
      content: 'Great insights! Would love to connect and discuss further.',
      post: 'Industry insights article',
      time: '1 hour ago',
      status: 'pending',
      sentiment: 'positive',
    },
    {
      id: 4,
      platform: 'Twitter/X',
      author: '@spam_account',
      content: '🚨 Click here for free money 💰💰💰',
      post: 'Product tips thread',
      time: '2 hours ago',
      status: 'flagged',
      sentiment: 'spam',
    },
    {
      id: 5,
      platform: 'TikTok',
      author: '@creative_user',
      content: 'Love this content! Following for more 💕',
      post: 'Behind the scenes video',
      time: '3 hours ago',
      status: 'replied',
      sentiment: 'positive',
    },
  ];

  const suggestedReplies = {
    1: [
      "Thank you so much! 💕 We're glad you found it helpful. Stay tuned for more valuable content!",
      "We appreciate your support! 🙌 Make sure to follow us for daily tips and updates.",
      "Thanks for the love! ❤️ Feel free to share this with anyone who might benefit from it.",
    ],
    2: [
      "Great question! 👍 You can find all the details about our services at [link]. Feel free to DM us if you have any specific questions!",
      "Thanks for your interest! 😊 I'll send you a detailed message with all the information you need.",
      "We'd love to help! 💼 Check out [link] for comprehensive information, or contact us directly at [email].",
    ],
    3: [
      "Thank you, Emily! 🙏 I'd be happy to connect. Let's continue this conversation and explore potential synergies.",
      "Appreciate your kind words! 💼 I've sent you a connection request. Looking forward to discussing more.",
      "Thanks for reaching out! 🤝 Always excited to network with professionals in our field. Let's connect!",
    ],
  };

  const dms = [
    {
      id: 1,
      platform: 'Instagram',
      author: '@potential_client',
      preview: 'Hi! I saw your post about social media management...',
      time: '10 minutes ago',
      unread: true,
    },
    {
      id: 2,
      platform: 'Facebook',
      author: 'Lisa Anderson',
      preview: 'Can you help with my business page?',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      platform: 'LinkedIn',
      author: 'David Wilson',
      preview: 'Thanks for accepting my connection request!',
      time: '5 hours ago',
      unread: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Comments', count: comments.length },
    { id: 'pending', label: 'Pending', count: comments.filter(c => c.status === 'pending').length },
    { id: 'flagged', label: 'Flagged', count: comments.filter(c => c.status === 'flagged').length },
    { id: 'replied', label: 'Replied', count: comments.filter(c => c.status === 'replied').length },
  ];

  const filteredComments = selectedFilter === 'all'
    ? comments
    : comments.filter(c => c.status === selectedFilter);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400';
      case 'negative': return 'text-red-400';
      case 'spam': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '😊';
      case 'negative': return '😞';
      case 'spam': return '⚠️';
      default: return '😐';
    }
  };

  return (
    <div className="space-y-6">
      {/* DMs Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Direct Messages</h2>
        <div className="space-y-3">
          {dms.map((dm) => (
            <div
              key={dm.id}
              className={`bg-white/5 rounded-xl p-4 border cursor-pointer hover:bg-white/10 transition-colors ${
                dm.unread ? 'border-purple-500/50' : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${dm.unread ? 'bg-purple-500' : 'bg-gray-500'}`} />
                  <span className="text-purple-300 font-semibold">{dm.platform}</span>
                  <span className="text-white font-semibold">{dm.author}</span>
                </div>
                <span className="text-purple-200 text-sm">{dm.time}</span>
              </div>
              <p className="text-white ml-5">{dm.preview}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Management */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Comment Management</h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-purple-200 hover:bg-white/10 border border-white/20'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {filteredComments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              {/* Comment Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-300 text-sm font-semibold">
                    {comment.platform}
                  </span>
                  <span className="text-white font-semibold">{comment.author}</span>
                  <span className={`text-xl ${getSentimentColor(comment.sentiment)}`}>
                    {getSentimentEmoji(comment.sentiment)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {comment.status === 'pending' && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Clock size={12} />
                      Pending
                    </span>
                  )}
                  {comment.status === 'flagged' && (
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <AlertTriangle size={12} />
                      Flagged
                    </span>
                  )}
                  {comment.status === 'replied' && (
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle size={12} />
                      Replied
                    </span>
                  )}
                  <span className="text-purple-200 text-sm">{comment.time}</span>
                </div>
              </div>

              {/* Comment Content */}
              <p className="text-white mb-2 ml-2">{comment.content}</p>
              <p className="text-purple-300 text-sm ml-2 mb-4">
                On post: "{comment.post}"
              </p>

              {/* AI Suggested Replies */}
              {comment.status === 'pending' && suggestedReplies[comment.id as keyof typeof suggestedReplies] && (
                <div className="bg-white/5 rounded-lg p-3 mt-3 border border-purple-500/30">
                  <p className="text-purple-300 text-sm font-semibold mb-2">
                    AI Suggested Replies:
                  </p>
                  <div className="space-y-2">
                    {suggestedReplies[comment.id as keyof typeof suggestedReplies].map((reply, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left bg-white/5 hover:bg-white/10 text-white text-sm p-3 rounded-lg border border-white/10 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {comment.status === 'pending' && (
                <div className="flex gap-2 mt-4">
                  <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <MessageSquare size={16} />
                    Reply
                  </button>
                  <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    <Heart size={16} />
                    Like
                  </button>
                  {comment.sentiment === 'spam' && (
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      <AlertTriangle size={16} />
                      Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Auto-Reply Settings */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">Auto-Reply Settings</h2>
        <div className="space-y-4">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">FAQ Auto-Responses</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            <p className="text-purple-200 text-sm">
              Automatically respond to common questions with pre-approved answers
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">Spam Detection</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            <p className="text-purple-200 text-sm">
              Automatically flag and hide spam comments
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">Sentiment Analysis</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
            <p className="text-purple-200 text-sm">
              Analyze comment sentiment and prioritize responses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
