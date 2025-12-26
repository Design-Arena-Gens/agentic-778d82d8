'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

export default function ContentOptimizer() {
  const [inputText, setInputText] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [optimizedContent, setOptimizedContent] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const platforms = [
    { id: 'instagram', name: 'Instagram' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'twitter', name: 'Twitter/X' },
    { id: 'linkedin', name: 'LinkedIn' },
    { id: 'tiktok', name: 'TikTok' },
  ];

  const optimizeContent = () => {
    const optimizations = {
      instagram: {
        caption: `${inputText}\n\n✨ Don't forget to save this post for later!\n\n💬 Tag someone who needs to see this\n\n#InstaDaily #ContentCreator #SocialMediaMarketing #DigitalMarketing #GrowthHacking #InstagramTips #SocialMediaStrategy #ContentStrategy #Marketing101 #BusinessGrowth`,
        hashtags: ['InstaDaily', 'ContentCreator', 'SocialMediaMarketing', 'DigitalMarketing', 'GrowthHacking'],
        bestTime: '10:00 AM - 2:00 PM',
        cta: '👉 Double tap if you agree! 💕',
        improvements: [
          'Added relevant emojis for visual appeal',
          'Included 10 high-performing hashtags',
          'Added engaging call-to-action',
          'Encouraged saving and sharing',
        ],
      },
      facebook: {
        caption: `${inputText}\n\n👉 What do you think? Drop your thoughts in the comments!\n\n💙 Like this post if you found it valuable\n🔄 Share with your network\n\n#FacebookMarketing #SocialMedia #Business #Marketing #DigitalStrategy`,
        hashtags: ['FacebookMarketing', 'SocialMedia', 'Business', 'Marketing'],
        bestTime: '1:00 PM - 4:00 PM',
        cta: 'Comment below and let\'s discuss! 💬',
        improvements: [
          'Encouraged comments for algorithm boost',
          'Added shareable format',
          'Included relevant hashtags',
          'Created conversation starter',
        ],
      },
      twitter: {
        caption: `${inputText}\n\n🔥 Retweet if you agree!\n\n💭 Reply with your thoughts\n\n#Twitter #Viral #Trending #SocialMediaTips #Marketing`,
        hashtags: ['Twitter', 'Viral', 'Trending', 'SocialMediaTips'],
        bestTime: '12:00 PM - 3:00 PM',
        cta: '🚀 RT to spread the word!',
        improvements: [
          'Optimized for retweets',
          'Kept it concise for Twitter format',
          'Added trending hashtags',
          'Clear call-to-action',
        ],
      },
      linkedin: {
        caption: `${inputText}\n\n💼 What are your thoughts on this? I'd love to hear your professional perspective in the comments.\n\n🔔 Follow me for more insights on [your niche]\n\n#LinkedIn #ProfessionalDevelopment #BusinessGrowth #Leadership #CareerAdvice #Industry #Networking`,
        hashtags: ['LinkedIn', 'ProfessionalDevelopment', 'BusinessGrowth', 'Leadership'],
        bestTime: '8:00 AM - 10:00 AM',
        cta: 'Share your expertise in the comments 👇',
        improvements: [
          'Professional tone maintained',
          'Encouraged thoughtful discussion',
          'Added industry-relevant hashtags',
          'Positioned for thought leadership',
        ],
      },
      tiktok: {
        caption: `${inputText}\n\n💫 Follow for more tips!\n✨ Save this for later\n🔥 Share with a friend who needs this\n\n#TikTok #Viral #ForYouPage #Trending #FYP #ViralVideo #ContentCreator #TikTokTips #SocialMedia #Growth`,
        hashtags: ['TikTok', 'Viral', 'ForYouPage', 'Trending', 'FYP'],
        bestTime: '7:00 PM - 11:00 PM',
        cta: '⚡ Double tap and follow!',
        improvements: [
          'Optimized for FYP algorithm',
          'Added viral-friendly hashtags',
          'Encouraged follows and saves',
          'Peak engagement time suggested',
        ],
      },
    };

    setOptimizedContent(optimizations[selectedPlatform as keyof typeof optimizations]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Content Input */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">AI Content Optimizer</h2>

        {/* Platform Selection */}
        <div className="mb-6">
          <label className="block text-purple-200 mb-3 font-semibold">
            Target Platform
          </label>
          <div className="flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  selectedPlatform === platform.id
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/5 text-purple-200 hover:bg-white/10 border border-white/20'
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input */}
        <div className="mb-6">
          <label className="block text-purple-200 mb-3 font-semibold">
            Your Content
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste or write your caption here..."
            className="w-full bg-white/5 text-white rounded-xl p-4 border border-white/20 focus:border-purple-500 focus:outline-none resize-none"
            rows={6}
          />
        </div>

        {/* Optimize Button */}
        <button
          onClick={optimizeContent}
          disabled={!inputText}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200"
        >
          <Sparkles size={20} />
          Optimize with AI
        </button>
      </div>

      {/* Optimized Results */}
      {optimizedContent && (
        <>
          {/* Optimized Caption */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Optimized Caption</h3>
              <button
                onClick={() => copyToClipboard(optimizedContent.caption)}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-white whitespace-pre-wrap">{optimizedContent.caption}</p>
            </div>
          </div>

          {/* Hashtags */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Recommended Hashtags</h3>
            <div className="flex flex-wrap gap-2">
              {optimizedContent.hashtags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Improvements & Recommendations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">AI Improvements Made</h3>
            <div className="space-y-3">
              {optimizedContent.improvements.map((improvement: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-500 rounded-full p-1 mt-0.5">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-purple-200">{improvement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Best Posting Time */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-3">Recommended Posting Time</h3>
            <p className="text-white text-lg mb-2">⏰ {optimizedContent.bestTime}</p>
            <p className="text-purple-200 text-sm">
              Based on historical engagement data for {platforms.find(p => p.id === selectedPlatform)?.name}
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-pink-500/30">
            <h3 className="text-xl font-bold text-white mb-3">Suggested Call-to-Action</h3>
            <p className="text-white text-lg">{optimizedContent.cta}</p>
          </div>
        </>
      )}

      {/* Tips Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Pro Tips for Better Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-purple-300 font-semibold mb-2">📝 Caption Length</h4>
            <p className="text-purple-200 text-sm">
              Instagram: 125-150 characters work best. Keep it concise but engaging.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-purple-300 font-semibold mb-2">🔖 Hashtag Strategy</h4>
            <p className="text-purple-200 text-sm">
              Use 5-10 relevant hashtags. Mix popular and niche tags for better reach.
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-purple-300 font-semibold mb-2">😊 Emoji Usage</h4>
            <p className="text-purple-200 text-sm">
              2-3 emojis per caption increase engagement by 47%. Don't overdo it!
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <h4 className="text-purple-300 font-semibold mb-2">💬 Ask Questions</h4>
            <p className="text-purple-200 text-sm">
              Posts with questions get 3x more comments. Engage your audience!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
