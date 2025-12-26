'use client';

import { TrendingUp, Users, Heart, MessageCircle, Share2, Eye } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Reach', value: '124.5K', change: '+12.5%', icon: Eye, color: 'bg-blue-500' },
    { label: 'Engagement Rate', value: '8.3%', change: '+2.1%', icon: Heart, color: 'bg-pink-500' },
    { label: 'New Followers', value: '2,847', change: '+18.2%', icon: Users, color: 'bg-purple-500' },
    { label: 'Total Comments', value: '1,293', change: '+5.7%', icon: MessageCircle, color: 'bg-green-500' },
    { label: 'Shares', value: '856', change: '+15.3%', icon: Share2, color: 'bg-orange-500' },
    { label: 'Growth Rate', value: '24.7%', change: '+4.2%', icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  const recentPosts = [
    {
      platform: 'Instagram',
      content: 'Summer collection launch 🌞',
      engagement: '2.4K',
      time: '2 hours ago',
      status: 'Published'
    },
    {
      platform: 'Facebook',
      content: 'New product announcement',
      engagement: '1.8K',
      time: '5 hours ago',
      status: 'Published'
    },
    {
      platform: 'LinkedIn',
      content: 'Industry insights article',
      engagement: '956',
      time: '1 day ago',
      status: 'Published'
    },
  ];

  const upcomingPosts = [
    {
      platform: 'TikTok',
      content: 'Behind the scenes video',
      scheduledFor: 'Today, 6:00 PM',
      status: 'Scheduled'
    },
    {
      platform: 'Twitter/X',
      content: 'Product tips thread',
      scheduledFor: 'Tomorrow, 10:00 AM',
      status: 'Scheduled'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-400 text-sm font-semibold">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-purple-200 text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-semibold">{post.platform}</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.status}
                </span>
              </div>
              <p className="text-white mb-2">{post.content}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">{post.time}</span>
                <span className="text-pink-400 font-semibold">
                  {post.engagement} engagements
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Posts */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Upcoming Posts</h2>
        <div className="space-y-4">
          {upcomingPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 font-semibold">{post.platform}</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.status}
                </span>
              </div>
              <p className="text-white mb-2">{post.content}</p>
              <div className="text-sm text-purple-200">
                Scheduled for: {post.scheduledFor}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
