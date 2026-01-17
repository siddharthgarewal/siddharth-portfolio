import React from 'react';
import { Calendar, MapPin, ChevronRight, Code, TestTube, Users, Accessibility } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { profileData } from '../data/mock';

const Experience = () => {
  const { experience } = profileData;

  const getProjectIcon = (projectName) => {
    if (projectName.toLowerCase().includes('test')) return <TestTube className="w-5 h-5" />;
    if (projectName.toLowerCase().includes('flow')) return <Code className="w-5 h-5" />;
    if (projectName.toLowerCase().includes('loop')) return <Users className="w-5 h-5" />;
    return <Accessibility className="w-5 h-5" />;
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            4.5+ years of experience building scalable web applications and collaborating with cross-functional teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((job, jobIndex) => (
            <div key={job.id} className="mb-12">
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {job.company.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900">{job.company}</h3>
                  <p className="text-lg text-slate-600 font-medium">{job.position}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {job.projects.map((project, projectIndex) => (
                  <Card key={projectIndex} className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-blue-600">
                            {getProjectIcon(project.name)}
                          </div>
                          <div>
                            <CardTitle className="text-xl text-slate-900">{project.name}</CardTitle>
                            <CardDescription className="text-slate-600 mt-1">
                              {project.duration}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-slate-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-slate-700">
                              <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;