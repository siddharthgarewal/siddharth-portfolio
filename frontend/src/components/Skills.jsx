import React from 'react';
import { Code, Wrench, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { profileData } from '../data/mock';

const Skills = () => {
  const { skills } = profileData;

  const getSkillIcon = (category) => {
    switch (category) {
      case 'framework':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'language':
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case 'styling':
        return <Award className="w-5 h-5 text-purple-500" />;
      case 'ui':
        return <Wrench className="w-5 h-5 text-orange-500" />;
      default:
        return <Code className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-green-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proficient in modern frontend technologies and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Frontend Skills */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                <Code className="w-6 h-6 text-blue-500" />
                Frontend Technologies
              </CardTitle>
              <CardDescription>
                Core technologies and frameworks I work with
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getSkillIcon(skill.category)}
                      <span className="font-medium text-slate-900">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-300`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools & Others */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                <Wrench className="w-6 h-6 text-orange-500" />
                Tools & Testing
              </CardTitle>
              <CardDescription>
                Development tools and testing frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.tools.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-slate-500" />
                      <span className="font-medium text-slate-900">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-300`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skill Categories */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Frontend Frameworks', count: 3, color: 'bg-blue-100 text-blue-800' },
            { name: 'Programming Languages', count: 2, color: 'bg-green-100 text-green-800' },
            { name: 'UI Libraries', count: 2, color: 'bg-purple-100 text-purple-800' },
            { name: 'Development Tools', count: 8, color: 'bg-orange-100 text-orange-800' }
          ].map((category, index) => (
            <Card key={index} className="text-center p-4">
              <div className="text-2xl font-bold text-slate-900 mb-2">{category.count}</div>
              <Badge className={category.color}>
                {category.name}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;