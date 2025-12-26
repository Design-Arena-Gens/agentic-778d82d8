'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const engagementData = [
    { date: 'Mon', likes: 420, comments: 80, shares: 45 },
    { date: 'Tue', likes: 380, comments: 65, shares: 38 },
    { date: 'Wed', likes: 550, comments: 110, shares: 62 },
    { date: 'Thu', likes: 490, comments: 95, shares: 51 },
    { date: 'Fri', likes: 680, comments: 145, shares: 78 },
    { date: 'Sat', likes: 720, comments: 160, shares: 85 },
    { date: 'Sun', likes: 590, comments: 120, shares: 68 },
  ];

  const growthData = [
    { month: 'Jan', followers: 12500 },
    { month: 'Feb', followers: 14200 },
    { month: 'Mar', followers: 16800 },
    { month: 'Apr', followers: 19500 },
    { month: 'May', followers: 23400 },
    { month: 'Jun', followers: 28900 },
  ];

  const platformPerformance = [
    { platform: 'Instagram', engagement: 8.5, reach: 45000, color: '#E4405F' },
    { platform: 'Facebook', engagement: 6.2, reach: 38000, color: '#1877F2' },
    { platform: 'LinkedIn', engagement: 5.8, reach: 22000, color: '#0A66C2' },
    { platform: 'TikTok', engagement: 12.3, reach: 67000, color: '#000000' },
    { platform: 'Twitter/X', engagement: 4.5, reach: 18000, color: '#1DA1F2' },
  ];

  const topPosts = [
    {
      content: 'Summer collection reveal 🌞',
      platform: 'Instagram',
      engagement: '12.4K',
      reach: '89.3K',
      score: 9.5,
    },
    {
      content: 'Behind the scenes video',
      platform: 'TikTok',
      engagement: '18.7K',
      reach: '124.5K',
      score: 9.2,
    },
    {
      content: 'Industry insights article',
      platform: 'LinkedIn',
      engagement: '5.2K',
      reach: '34.8K',
      score: 8.8,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Weekly Engagement Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="date" stroke="#ffffff60" />
            <YAxis stroke="#ffffff60" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e1b4b',
                border: '1px solid #ffffff20',
                borderRadius: '12px',
                color: '#ffffff',
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="likes" stroke="#ec4899" strokeWidth={3} />
            <Line type="monotone" dataKey="comments" stroke="#8b5cf6" strokeWidth={3} />
            <Line type="monotone" dataKey="shares" stroke="#06b6d4" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Follower Growth */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Follower Growth (6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={growthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="month" stroke="#ffffff60" />
            <YAxis stroke="#ffffff60" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e1b4b',
                border: '1px solid #ffffff20',
                borderRadius: '12px',
                color: '#ffffff',
              }}
            />
            <Bar dataKey="followers" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Platform Performance */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Platform Performance</h2>
        <div className="space-y-4">
          {platformPerformance.map((platform, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">{platform.platform}</h3>
                <span className="text-purple-300 font-semibold">
                  {platform.engagement}% engagement
                </span>
              </div>
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm text-purple-200 mb-1">
                  <span>Engagement Rate</span>
                  <span>{platform.engagement}%</span>
                </div>
                <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(platform.engagement / 15) * 100}%`,
                      backgroundColor: platform.color,
                    }}
                  />
                </div>
              </div>
              <div className="text-sm text-purple-200">
                Total Reach: {platform.reach.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Top Performing Posts</h2>
        <div className="space-y-4">
          {topPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="text-white font-semibold mb-2">{post.content}</p>
                  <span className="text-purple-300 text-sm">{post.platform}</span>
                </div>
                <div className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-bold">
                  {post.score}/10
                </div>
              </div>
              <div className="flex gap-6 text-sm">
                <span className="text-pink-400">
                  ❤️ {post.engagement} engagements
                </span>
                <span className="text-blue-400">
                  👁️ {post.reach} reach
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">AI Insights & Recommendations</h2>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white">
              ✅ <strong>Peak Engagement:</strong> Your Friday posts consistently get 40% more engagement. Consider posting more content on Fridays.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white">
              📈 <strong>Growth Opportunity:</strong> TikTok shows the highest engagement rate at 12.3%. Increase posting frequency there.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white">
              ⏰ <strong>Timing Optimization:</strong> Posts between 10 AM - 2 PM get 2.5x more engagement than evening posts.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white">
              💡 <strong>Content Strategy:</strong> Behind-the-scenes content gets 65% more shares. Create more authentic, raw content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
