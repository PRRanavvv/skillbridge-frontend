
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, IndianRupee, Star } from 'lucide-react';

const JobRecommendations = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Flipkart',
      location: 'Bangalore',
      salary: '8-12 LPA',
      match: 92,
      type: 'Full-time',
      skills: ['React', 'JavaScript', 'CSS'],
      isTop: true
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Zomato',
      location: 'Gurgaon',
      salary: '10-15 LPA',
      match: 88,
      type: 'Full-time',
      skills: ['Node.js', 'React', 'MongoDB'],
      isTop: true
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Swiggy',
      location: 'Bangalore',
      salary: '12-18 LPA',
      match: 85,
      type: 'Full-time',
      skills: ['React', 'Node.js', 'AWS'],
      isTop: false
    },
    {
      id: 4,
      title: 'Junior Developer',
      company: 'Paytm',
      location: 'Noida',
      salary: '6-10 LPA',
      match: 78,
      type: 'Full-time',
      skills: ['JavaScript', 'React', 'Python'],
      isTop: false
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Job Recommendations</h2>
        <Button variant="outline">Filter Jobs</Button>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Matches', value: '47', icon: '🎯' },
          { label: 'Applied', value: '12', icon: '📝' },
          { label: 'In Review', value: '5', icon: '👀' },
          { label: 'Interviews', value: '2', icon: '💼' },
        ].map((stat, index) => (
          <Card key={index} className="glass dark:glass-dark">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card 
            key={job.id} 
            className={`glass dark:glass-dark transition-all hover:scale-[1.02] ${
              job.isTop ? 'ring-2 ring-primary/20 bg-primary/5' : ''
            }`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.isTop && (
                      <Badge className="bg-gradient-primary text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Top Match
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-3">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{job.match}%</div>
                    <p className="text-sm text-muted-foreground">Match</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Save</Button>
                    <Button className="bg-gradient-primary" size="sm">Apply</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
