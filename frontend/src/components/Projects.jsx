import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Projects = () => {
  const { projects } = profileData;

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web Application':
        return 'bg-blue-100 text-blue-800';
      case 'Enterprise Tool':
        return 'bg-purple-100 text-purple-800';
      case 'Mobile App':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in frontend development, from enterprise applications to mobile solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links - Appear on hover */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <ArrowRight className="w-3 h-3 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-slate-900 hover:bg-slate-800"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-300 hover:border-slate-400"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;