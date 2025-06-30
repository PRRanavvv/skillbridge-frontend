
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Play, Trophy, Target } from 'lucide-react';

const SkillAssessment = () => {
  const recentAssessments = [
    { name: 'JavaScript Fundamentals', score: 85, date: '2 days ago', status: 'completed' },
    { name: 'React Development', score: 78, date: '1 week ago', status: 'completed' },
    { name: 'Data Structures', score: 0, date: 'Not started', status: 'pending' },
  ];

  const skillGaps = [
    { skill: 'JavaScript', current: 85, required: 90, gap: 5 },
    { skill: 'React', current: 78, required: 85, gap: 7 },
    { skill: 'Node.js', current: 60, required: 80, gap: 20 },
    { skill: 'System Design', current: 40, required: 75, gap: 35 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Skill Assessment</h2>
        <Button className="bg-gradient-primary">
          <Play className="h-4 w-4 mr-2" />
          Start New Assessment
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Assessments */}
        <Card className="glass dark:glass-dark">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Recent Assessments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAssessments.map((assessment, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <h4 className="font-medium">{assessment.name}</h4>
                    <p className="text-sm text-muted-foreground">{assessment.date}</p>
                  </div>
                  <div className="text-right">
                    {assessment.status === 'completed' ? (
                      <div className="text-lg font-semibold text-primary">{assessment.score}%</div>
                    ) : (
                      <Button size="sm" variant="outline">Start</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Gap Analysis */}
        <Card className="glass dark:glass-dark">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Skill Gap vs Job Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillGaps.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">
                      {item.current}% / {item.required}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={item.current} className="h-2" />
                    <div 
                      className="absolute top-0 h-2 bg-red-500/20 rounded-full"
                      style={{ 
                        left: `${item.current}%`, 
                        width: `${item.gap}%` 
                      }}
                    />
                  </div>
                  {item.gap > 15 && (
                    <p className="text-xs text-red-500">
                      Gap: {item.gap}% - Needs improvement
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Technical Skills', count: 12, icon: '💻' },
          { title: 'Soft Skills', count: 8, icon: '🤝' },
          { title: 'Industry Knowledge', count: 5, icon: '🏢' },
        ].map((category, index) => (
          <Card key={index} className="glass dark:glass-dark cursor-pointer hover:scale-105 transition-transform">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.count} assessments</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillAssessment;
