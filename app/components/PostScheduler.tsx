'use client';

import { useState } from 'react';
import { Calendar, Clock, Send, Image, Video, Sparkles } from 'lucide-react';

export default function PostScheduler() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [caption, setCaption] = useState('');
  const [optimizedCaption, setOptimizedCaption] = useState('');

  const platforms = [
    { id: 'instagram', name: 'Instagram', color: 'bg-pink-500' },
    { id: 'facebook', name: 'Facebook', color: 'bg-blue-600' },
    { id: 'twitter', name: 'Twitter/X', color: 'bg-sky-500' },
    { id: 'linkedin', name: 'LinkedIn', color: 'bg-blue-700' },
    { id: 'tiktok', name: 'TikTok', color: 'bg-black' },
  ];

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const optimizeCaption = () => {
    const optimizations = {
      instagram: `${caption}\n\n✨ #InstaDaily #ContentCreator #SocialMediaMarketing #DigitalMarketing #GrowthHacking`,
      facebook: `${caption}\n\n👉 Like, Comment & Share if you agree!\n\n#FacebookMarketing #SocialMedia #Business`,
      twitter: `${caption}\n\n🔥 RT to spread the word!\n\n#Twitter #Viral #Trending`,
      linkedin: `${caption}\n\nWhat are your thoughts on this? Share your perspective in the comments.\n\n#LinkedIn #ProfessionalDevelopment #BusinessGrowth`,
      tiktok: `${caption}\n\n💫 Follow for more! #TikTok #Viral #ForYouPage #Trending`,
    };

    const platform = selectedPlatforms[0] || 'instagram';
    setOptimizedCaption(optimizations[platform as keyof typeof optimizations] || caption);
  };

  return (
    <div className="space-y-6">
      {/* Post Creator */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Create & Schedule Post</h2>

        {/* Platform Selection */}
        <div className="mb-6">
          <label className="block text-purple-200 mb-3 font-semibold">
            Select Platforms
          </label>
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => togglePlatform(platform.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedPlatforms.includes(platform.id)
                    ? `${platform.color} text-white shadow-lg scale-105`
                    : 'bg-white/5 text-purple-200 hover:bg-white/10 border border-white/20'
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Media Upload */}
        <div className="mb-6">
          <label className="block text-purple-200 mb-3 font-semibold">
            Upload Media
          </label>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-purple-200 px-6 py-3 rounded-xl border border-white/20 transition-colors">
              <Image size={20} />
              Upload Image
            </button>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-purple-200 px-6 py-3 rounded-xl border border-white/20 transition-colors">
              <Video size={20} />
              Upload Video
            </button>
          </div>
        </div>

        {/* Caption Input */}
        <div className="mb-6">
          <label className="block text-purple-200 mb-3 font-semibold">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write your caption here..."
            className="w-full bg-white/5 text-white rounded-xl p-4 border border-white/20 focus:border-purple-500 focus:outline-none resize-none"
            rows={4}
          />
        </div>

        {/* AI Optimization */}
        <div className="mb-6">
          <button
            onClick={optimizeCaption}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
          >
            <Sparkles size={20} />
            Optimize Caption with AI
          </button>
          {optimizedCaption && (
            <div className="mt-4 bg-white/5 rounded-xl p-4 border border-purple-500/50">
              <p className="text-purple-200 text-sm mb-2 font-semibold">
                AI Optimized Caption:
              </p>
              <p className="text-white whitespace-pre-wrap">{optimizedCaption}</p>
              <button
                onClick={() => setCaption(optimizedCaption)}
                className="mt-3 text-purple-300 hover:text-purple-100 text-sm font-semibold"
              >
                Use This Caption
              </button>
            </div>
          )}
        </div>

        {/* Schedule Date & Time */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-200 mb-3 font-semibold">
              <Calendar className="inline mr-2" size={18} />
              Schedule Date
            </label>
            <input
              type="date"
              className="w-full bg-white/5 text-white rounded-xl p-3 border border-white/20 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-purple-200 mb-3 font-semibold">
              <Clock className="inline mr-2" size={18} />
              Schedule Time
            </label>
            <input
              type="time"
              className="w-full bg-white/5 text-white rounded-xl p-3 border border-white/20 focus:border-purple-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200">
            <Calendar size={20} />
            Schedule Post
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200">
            <Send size={20} />
            Post Now
          </button>
        </div>
      </div>

      {/* Best Times to Post */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">
          AI Recommended Posting Times
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <h3 className="text-purple-300 font-semibold mb-2">{platform.name}</h3>
              <p className="text-white text-sm mb-1">
                📅 Best Days: Mon, Wed, Fri
              </p>
              <p className="text-white text-sm">
                ⏰ Peak Time: 10:00 AM - 2:00 PM
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
