'use client';

import { useState } from 'react';
import Dashboard from './components/Dashboard';
import PostScheduler from './components/PostScheduler';
import Analytics from './components/Analytics';
import ContentOptimizer from './components/ContentOptimizer';
import EngagementManager from './components/EngagementManager';
import Settings from './components/Settings';
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Sparkles,
  MessageSquare,
  Settings as SettingsIcon
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'scheduler', label: 'Schedule Posts', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'optimizer', label: 'Content Optimizer', icon: Sparkles },
    { id: 'engagement', label: 'Engagement', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'scheduler':
        return <PostScheduler />;
      case 'analytics':
        return <Analytics />;
      case 'optimizer':
        return <ContentOptimizer />;
      case 'engagement':
        return <EngagementManager />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-2">
              AI Social Media Manager
            </h1>
            <p className="text-purple-200">
              Professional social media management powered by advanced AI
            </p>
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/20">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'text-purple-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-purple-200 text-sm">
          <p>© 2024 AI Social Media Manager - Your Professional Growth Partner</p>
        </footer>
      </div>
    </div>
  );
}
