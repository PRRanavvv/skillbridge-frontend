
import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import MyProfile from '@/components/dashboard/MyProfile';
import SkillAssessment from '@/components/dashboard/SkillAssessment';
import JobRecommendations from '@/components/dashboard/JobRecommendations';
import CareerInsights from '@/components/dashboard/CareerInsights';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <MyProfile />;
      case 'assessment':
        return <SkillAssessment />;
      case 'jobs':
        return <JobRecommendations />;
      case 'insights':
        return <CareerInsights />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col">
        <DashboardNavbar 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
