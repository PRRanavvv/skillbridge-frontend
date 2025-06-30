
import { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import MyProfile from '@/components/dashboard/MyProfile';
import SkillAssessment from '@/components/dashboard/SkillAssessment';
import JobRecommendations from '@/components/dashboard/JobRecommendations';
import CareerInsights from '@/components/dashboard/CareerInsights';
import ResumeInsights from '@/components/dashboard/ResumeInsights';
import AssessmentOverview from '@/components/dashboard/AssessmentOverview';
import ScrollAnimation from '@/components/ui/scroll-animation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // TODO: Backend Integration Point
  // Replace with actual user data from authentication context
  // const { user, userRole } = useAuth(); // student, employee, recruiter
  const userRole = 'student'; // Mock data - replace with actual user role

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <ScrollAnimation animation="fade-in">
              <MyProfile />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <ResumeInsights />
            </ScrollAnimation>
          </div>
        );
      case 'assessment':
        return (
          <div className="space-y-6">
            <ScrollAnimation animation="fade-in">
              <SkillAssessment />
            </ScrollAnimation>
            <ScrollAnimation animation="slide-up" delay={200}>
              <AssessmentOverview />
            </ScrollAnimation>
          </div>
        );
      case 'jobs':
        return (
          <ScrollAnimation animation="fade-in">
            <JobRecommendations />
          </ScrollAnimation>
        );
      case 'insights':
        return (
          <ScrollAnimation animation="fade-in">
            <CareerInsights />
          </ScrollAnimation>
        );
      default:
        return (
          <ScrollAnimation animation="fade-in">
            <MyProfile />
          </ScrollAnimation>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background flex">
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
        
        <main className="flex-1 p-6 overflow-auto bg-background dark:bg-background">
          <div className="animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
