import React from 'react';
import { Code, Zap, Palette, Wrench } from 'lucide-react';
import { profileData } from '../data/mock';

const Skills = () => {
  const { skills } = profileData;

  const categoryConfig = [
    {
      key: 'coreTech',
      label: 'Core Tech',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      key: 'frameworks',
      label: 'Frameworks',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      key: 'styling',
      label: 'Styling',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      key: 'tools',
      label: 'Tools & Testing',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  const SkillCard = ({ skill, category }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/40" />
      <div className={`relative p-4 rounded-lg border-2 ${category.borderColor} ${category.bgColor} transition-all duration-300 hover:shadow-lg cursor-pointer`}>
        <p className="text-sm font-semibold text-slate-900 text-center">{skill.name}</p>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive expertise across modern frontend technologies, frameworks, and development tools
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {categoryConfig.map((category) => {
            const CategoryIcon = category.icon;
            const categorySkills = skills[category.key] || [];

            return (
              <div key={category.key}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.label}</h3>
                    <p className="text-sm text-slate-400">{categorySkills.length} skills</p>
                  </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} category={category} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {categoryConfig.map((category) => {
            const count = (skills[category.key] || []).length;
            return (
              <div
                key={category.key}
                className={`p-6 rounded-lg border-2 ${category.borderColor} ${category.bgColor} text-center backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {count}
                </div>
                <p className="text-sm font-semibold text-slate-900">{category.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;