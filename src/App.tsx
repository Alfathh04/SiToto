import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificateSection } from './components/CertificateSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CursorAndBackground } from './components/CursorAndBackground';
import { CustomizerStudioModal } from './components/CustomizerStudioModal';
import { AICopilotModal } from './components/AICopilotModal';

import {
  defaultProfileData,
  defaultSkills,
  defaultProjects,
  defaultExperiences,
  defaultCertificates,
} from './data/defaultData';
import { ProfileData, SkillItem, ProjectItem } from './types';

export default function App() {
  // Load State from LocalStorage or Fallback to Defaults
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('royal_portfolio_profile');
    return saved ? JSON.parse(saved) : defaultProfileData;
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = localStorage.getItem('royal_portfolio_skills');
    return saved ? JSON.parse(saved) : defaultSkills;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('royal_portfolio_projects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  // Modal Controls
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isAICopilotOpen, setIsAICopilotOpen] = useState(false);

  // Sync Changes to LocalStorage
  const handleUpdateProfile = (updated: ProfileData) => {
    setProfile(updated);
    localStorage.setItem('royal_portfolio_profile', JSON.stringify(updated));
  };

  const handleUpdateSkills = (updated: SkillItem[]) => {
    setSkills(updated);
    localStorage.setItem('royal_portfolio_skills', JSON.stringify(updated));
  };

  const handleUpdateProjects = (updated: ProjectItem[]) => {
    setProjects(updated);
    localStorage.setItem('royal_portfolio_projects', JSON.stringify(updated));
  };

  const handleResetDefault = () => {
    if (window.confirm('Reset semua data ke pengaturan awal?')) {
      setProfile(defaultProfileData);
      setSkills(defaultSkills);
      setProjects(defaultProjects);
      localStorage.removeItem('royal_portfolio_profile');
      localStorage.removeItem('royal_portfolio_skills');
      localStorage.removeItem('royal_portfolio_projects');
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden relative">
      {/* Background Lighting & Custom Cursor */}
      <CursorAndBackground />

      {/* Header Navigation */}
      <Navbar
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenAICopilot={() => setIsAICopilotOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <AboutSection profile={profile} />

        <SkillsSection skills={skills} />

        <ProjectsSection projects={projects} />

        <ExperienceSection experiences={defaultExperiences} />

        <CertificateSection certificates={defaultCertificates} />

        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Portfolio Customizer Studio Modal Drawer */}
      <CustomizerStudioModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        skills={skills}
        onUpdateSkills={handleUpdateSkills}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        onResetDefault={handleResetDefault}
      />

      {/* Gemini AI Copilot Assistant Chat Modal */}
      <AICopilotModal
        isOpen={isAICopilotOpen}
        onClose={() => setIsAICopilotOpen(false)}
        profile={profile}
        skills={skills}
        projects={projects}
      />
    </div>
  );
}
