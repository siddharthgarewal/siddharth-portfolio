import React, { useState, useEffect } from 'react';
import { ExternalLink, GitBranch, Star, AlertCircle, GitFork, Eye, Calendar, User } from 'lucide-react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const GITHUB_USERNAME = 'siddharthgarewal'; // Replace with your GitHub username

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        // Fetch user repos sorted by stars
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6&direction=desc`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        
        // Fetch additional details for each repo (topics, watchers, etc.)
        const detailedRepos = await Promise.all(
          data.map(async (repo) => {
            try {
              const detailResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}`);
              const detailData = await detailResponse.json();
              return { ...repo, ...detailData };
            } catch {
              return repo;
            }
          })
        );

        // Filter and format repos
        const formattedRepos = detailedRepos
          .filter(repo => !repo.fork) // Exclude forks
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
            technologies: repo.language ? [repo.language] : [],
            topics: repo.topics || [], // GitHub topics
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            category: 'GitHub Repository',
            link: repo.homepage || repo.html_url,
            github: repo.html_url,
            featured: repo.stargazers_count > 5,
            updatedAt: new Date(repo.updated_at),
            pushedAt: new Date(repo.pushed_at),
            openIssues: repo.open_issues_count,
            license: repo.license?.name || null,
          }))
          .slice(0, 3); // Limit to top 3 repos

        setRepos(formattedRepos);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const formatDate = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'from-yellow-400 to-yellow-500',
      'TypeScript': 'from-blue-400 to-blue-500',
      'Python': 'from-blue-600 to-yellow-400',
      'React': 'from-cyan-400 to-blue-500',
      'HTML': 'from-orange-400 to-red-500',
      'CSS': 'from-blue-500 to-purple-500',
      'Java': 'from-orange-600 to-red-600',
      'C++': 'from-blue-600 to-cyan-500',
    };
    return colors[language] || 'from-slate-400 to-slate-500';
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full rounded-xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1"
      >
        {/* Project Image with Overlay */}
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='300'/%3E%3Ctext x='50%25' y='40%25' font-size='48' fill='white' text-anchor='middle' font-weight='bold'%3E${project.title}%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='16' fill='rgba(255,255,255,0.8)' text-anchor='middle'%3EGitHub Repository%3C/text%3E%3C/svg%3E`;
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured Badge with Animation */}
          {project.featured && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md rounded-full p-2 shadow-lg animate-pulse">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
          )}

          {/* Stars Count Badge */}
          {project.stars > 0 && (
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 text-white text-xs font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {project.stars}
            </div>
          )}

          {/* Language Badge with Gradient */}
          {project.technologies[0] && (
            <div className={`absolute bottom-3 left-3 px-3 py-1 bg-gradient-to-r ${getLanguageColor(project.technologies[0])} text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {project.technologies[0]}
            </div>
          )}

          {/* Action Buttons - Appear on hover */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-lg transition-all duration-200 text-white hover:scale-110 shadow-lg"
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
                className="p-2.5 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-lg transition-all duration-200 text-white hover:scale-110 shadow-lg"
                title="View Code"
              >
                <GitBranch className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col bg-white">
          {/* Category Badge */}
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 mb-3 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Topics/Tags */}
          {project.topics && project.topics.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {project.topics.slice(0, 2).map((topic, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-100 font-medium"
                >
                  #{topic}
                </span>
              ))}
              {project.topics.length > 2 && (
                <span className="px-2 py-0.5 text-slate-500 text-xs font-medium">
                  +{project.topics.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 mb-3 py-2 border-y border-slate-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Star className="w-3 h-3 text-amber-500" />
                <span className="font-bold text-slate-900 text-xs">{project.stars}</span>
              </div>
              <span className="text-xs text-slate-500">Stars</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <GitFork className="w-3 h-3 text-blue-500" />
                <span className="font-bold text-slate-900 text-xs">{project.forks}</span>
              </div>
              <span className="text-xs text-slate-500">Forks</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Eye className="w-3 h-3 text-green-500" />
                <span className="font-bold text-slate-900 text-xs">{project.watchers}</span>
              </div>
              <span className="text-xs text-slate-500">Watch</span>
            </div>
          </div>

          {/* Meta Information */}
          <div className="space-y-1 mb-3 text-xs text-slate-500">
            {project.license && (
              <div className="flex items-center gap-2">
                <span className="inline-block w-1 h-1 bg-slate-400 rounded-full"></span>
                <span className="font-medium">{project.license}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              <span>Updated {formatDate(project.updatedAt)}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-2 pt-0">
            {project.link !== '#' && project.link !== project.github && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-xs font-semibold shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-3 h-3" />
                Demo
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg transition-all duration-200 text-xs font-semibold shadow-md ${
                  project.link !== '#' && project.link !== project.github
                    ? 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                    : 'bg-gradient-to-r from-slate-800 to-slate-900 text-white hover:from-slate-900 hover:to-black'
                }`}
              >
                <GitBranch className="w-3 h-3" />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Hover Gradient Border Effect */}
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 border border-gradient" />
      </div>
    );
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                💼 Featured Projects
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || repos.length === 0) {
    return (
      <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                💼 Featured Projects
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Unable to load projects</h3>
              <p className="text-amber-700 text-sm">
                {error ? `Error: ${error}` : 'No public repositories found. Please check your GitHub username in the code.'}
              </p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 font-medium text-sm mt-2 inline-flex items-center gap-2"
              >
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 animate-bounce">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
              ⭐ Featured Projects
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore my latest open-source work and featured repositories showcasing expertise in frontend development, scalable applications, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {repos.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Want to see more?</h3>
          <p className="text-slate-600 mb-6">
            Explore my complete portfolio of projects, contributions, and open-source work on GitHub.
          </p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg hover:from-slate-800 hover:to-slate-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <GitBranch className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
