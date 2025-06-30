
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, GraduationCap, Target, Award } from 'lucide-react';

const ResumeInsights = () => {
  // TODO: Backend Integration Point
  // This data should come from your resume parser API
  // Replace with actual API call: const resumeData = await fetchResumeInsights(userId);
  const resumeData = {
    education: [
      { degree: "B.Tech Computer Science", institution: "IIT Delhi", year: "2024" },
      { degree: "Class XII", institution: "Delhi Public School", year: "2020" }
    ],
    skills: [
      { name: "React", confidence: 85 },
      { name: "Python", confidence: 78 },
      { name: "Machine Learning", confidence: 65 },
      { name: "Node.js", confidence: 72 }
    ],
    goals: ["Software Developer", "Full Stack Engineer", "Product Manager"],
    completeness: 85
  };

  return (
    <Card className="glass dark:glass-dark border-border/20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-primary" />
          <span>Resume Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Resume Completeness */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Profile Completeness</span>
            <span className="text-sm text-muted-foreground">{resumeData.completeness}%</span>
          </div>
          <Progress value={resumeData.completeness} className="h-2" />
        </div>

        {/* Education */}
        <div>
          <h4 className="flex items-center space-x-2 text-sm font-medium mb-3">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>Education</span>
          </h4>
          <div className="space-y-2">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.institution}</p>
                </div>
                <Badge variant="secondary">{edu.year}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Analysis */}
        <div>
          <h4 className="flex items-center space-x-2 text-sm font-medium mb-3">
            <Award className="h-4 w-4 text-primary" />
            <span>Skill Strengths</span>
          </h4>
          <div className="space-y-3">
            {resumeData.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.confidence}%</span>
                </div>
                <Progress value={skill.confidence} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Career Goals */}
        <div>
          <h4 className="flex items-center space-x-2 text-sm font-medium mb-3">
            <Target className="h-4 w-4 text-primary" />
            <span>Career Goals</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {resumeData.goals.map((goal, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {goal}
              </Badge>
            ))}
          </div>
        </div>

        {/* TODO: Backend Integration Point */}
        {/* Add API integration for:
            - Resume parsing results
            - Skill extraction confidence scores
            - Goal recommendations based on profile
            - Completion suggestions
        */}
      </CardContent>
    </Card>
  );
};

export default ResumeInsights;
