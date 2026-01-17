import React from 'react';
import { ExternalLink, Github, Star, Code2 } from 'lucide-react';
import { profileData } from '../data/mock';

const Projects = () => {
  const { projects } = profileData;

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full rounded-xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
      >
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured Badge */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>

          {/* Action Buttons - Appear on hover */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg transition-all duration-200 text-white hover:scale-110"
                title="View Live"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-lg transition-all duration-200 text-white hover:scale-110"
                title="View Code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200 hover:border-blue-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                <Code2 className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Subtle gradient border effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              💼 Featured Projects
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work featuring enterprise applications, interactive dashboards, and innovative solutions built with modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <p className="text-slate-600 mb-6">
            Interested in seeing more of my work? Check out my full portfolio on GitHub.
          </p>
          <a
            href="https://github.com/siddharthgarewal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            Explore More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;