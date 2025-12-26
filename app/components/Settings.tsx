'use client';

import { useState } from 'react';
import { Save, Calendar, Bell, Zap, Shield, Languages } from 'lucide-react';

export default function Settings() {
  const [language, setLanguage] = useState('english');
  const [autoOptimize, setAutoOptimize] = useState(false);

  const platforms = [
    { id: 'instagram', name: 'Instagram', connected: true },
    { id: 'facebook', name: 'Facebook', connected: true },
    { id: 'twitter', name: 'Twitter/X', connected: false },
    { id: 'linkedin', name: 'LinkedIn', connected: true },
    { id: 'tiktok', name: 'TikTok', connected: false },
  ];

  const postingSchedule = [
    { day: 'Monday', times: ['10:00 AM', '2:00 PM', '6:00 PM'], active: true },
    { day: 'Tuesday', times: ['10:00 AM', '2:00 PM'], active: true },
    { day: 'Wednesday', times: ['10:00 AM', '2:00 PM', '6:00 PM'], active: true },
    { day: 'Thursday', times: ['10:00 AM', '2:00 PM'], active: true },
    { day: 'Friday', times: ['10:00 AM', '2:00 PM', '6:00 PM'], active: true },
    { day: 'Saturday', times: ['12:00 PM', '4:00 PM'], active: false },
    { day: 'Sunday', times: ['12:00 PM', '4:00 PM'], active: false },
  ];

  return (
    <div className="space-y-6">
      {/* Platform Connections */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6">Platform Connections</h2>
        <div className="space-y-4">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-500'}`} />
                <span className="text-white font-semibold">{platform.name}</span>
              </div>
              <button
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  platform.connected
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {platform.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Posting Schedule */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="text-purple-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Posting Schedule</h2>
        </div>
        <div className="space-y-3">
          {postingSchedule.map((schedule) => (
            <div
              key={schedule.day}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{schedule.day}</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={schedule.active}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex flex-wrap gap-2">
                {schedule.times.map((time, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-lg text-sm border border-purple-500/50"
                  >
                    {time}
                  </span>
                ))}
                <button className="text-purple-300 hover:text-purple-100 text-sm font-semibold px-3">
                  + Add Time
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automation Settings */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-2 mb-6">
          <Zap className="text-yellow-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Automation Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold">Auto-Optimize Captions</h3>
                <p className="text-purple-200 text-sm">
                  Automatically improve captions with hashtags and emojis
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={autoOptimize}
                  onChange={(e) => setAutoOptimize(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold">Auto-Adjust Posting Times</h3>
                <p className="text-purple-200 text-sm">
                  Optimize posting times based on engagement analytics
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold">Auto-Reply to FAQs</h3>
                <p className="text-purple-200 text-sm">
                  Automatically respond to common questions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-white font-semibold">Content Frequency Suggestions</h3>
                <p className="text-purple-200 text-sm">
                  Get AI recommendations for optimal posting frequency
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="text-blue-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Notification Preferences</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white">New Comments</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white">Direct Messages</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white">Weekly Reports</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white">Performance Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Language & Communication */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-2 mb-6">
          <Languages className="text-green-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Language & Communication</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-purple-200 mb-2 font-semibold">
              Preferred Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-white/5 text-white rounded-xl p-3 border border-white/20 focus:border-purple-500 focus:outline-none"
            >
              <option value="english">English</option>
              <option value="roman_urdu">Roman Urdu</option>
              <option value="urdu">Urdu</option>
            </select>
          </div>

          <div>
            <label className="block text-purple-200 mb-2 font-semibold">
              Brand Voice
            </label>
            <select className="w-full bg-white/5 text-white rounded-xl p-3 border border-white/20 focus:border-purple-500 focus:outline-none">
              <option value="professional">Professional</option>
              <option value="casual">Casual & Friendly</option>
              <option value="enthusiastic">Enthusiastic</option>
              <option value="informative">Informative</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-2 mb-6">
          <Shield className="text-red-400" size={24} />
          <h2 className="text-2xl font-bold text-white">Security & Privacy</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Require Approval Before Posting</h3>
            <p className="text-purple-200 text-sm mb-3">
              All content must be reviewed and approved before publishing
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Two-Factor Authentication</h3>
            <p className="text-purple-200 text-sm mb-3">
              Add an extra layer of security to your account
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200">
          <Save size={20} />
          Save All Settings
        </button>
      </div>
    </div>
  );
}
