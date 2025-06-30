
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, Sun, Moon, Bell } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DashboardNavbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const DashboardNavbar = ({ toggleSidebar, sidebarOpen }: DashboardNavbarProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="md:hidden"
          >
            <Menu className="h-4 w-4" />
          </Button>
          
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Rahul!</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>RK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
