
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Edit, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const MyProfile = () => {
  const skills = ['JavaScript', 'React', 'Python', 'Data Analysis', 'Communication'];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">My Profile</h2>
        <Button className="bg-gradient-primary">
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 glass dark:glass-dark">
          <CardContent className="p-6 text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl">RK</AvatarFallback>
            </Avatar>
            
            <h3 className="text-xl font-semibold mb-2">Rahul Kumar</h3>
            <p className="text-muted-foreground mb-4">Computer Science Student</p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm">B.Tech CSE, IIT Delhi</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm">Looking for SDE roles</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Education */}
          <Card className="glass dark:glass-dark">
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">B.Tech Computer Science</h4>
                  <p className="text-muted-foreground">Indian Institute of Technology, Delhi</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025 • CGPA: 8.5</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold">Class XII</h4>
                  <p className="text-muted-foreground">Delhi Public School</p>
                  <p className="text-sm text-muted-foreground">2021 • 94.2%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills */}
          <Card className="glass dark:glass-dark">
            <CardHeader>
              <CardTitle>Key Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Goals */}
          <Card className="glass dark:glass-dark">
            <CardHeader>
              <CardTitle>Career Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seeking a Software Development Engineer role at a product-based company. 
                Interested in full-stack development, machine learning, and building scalable systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
