import React from "react";

export default function ConsultingCard({ consultingProjects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 px-4 sm:px-0">
      {consultingProjects && consultingProjects.map((project, index) => (
        <div 
          key={index} 
          className="consulting-card backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:backdrop-blur-xl hover:border-white/30 hover:-translate-y-2"
          style={{
            background: `linear-gradient(135deg, rgba(0, 68, 255, 0.1), rgba(244, 12, 194, 0.1))`,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div className="relative overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-40 sm:h-48 w-full object-cover"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(0, 68, 255, 0.1), rgba(244, 12, 194, 0.1))`,
              }}
            ></div>
            
            {/* Status Indicator */}
            <div className="absolute top-3 right-3">
              <div 
                className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${
                  project.status === 'completed' 
                    ? 'bg-green-500/20 border-green-400/30 text-green-300' 
                    : project.status === 'ongoing'
                    ? 'bg-blue-500/20 border-blue-400/30 text-blue-300'
                    : 'bg-yellow-500/20 border-yellow-400/30 text-yellow-300'
                }`}
              >
                {project.status === 'completed' ? '✓ Completed' : 
                 project.status === 'ongoing' ? '⟳ Ongoing' : 
                 '⏳ Pending'}
              </div>
            </div>
          </div>
          
          <div className="p-4 text-white">
            <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-white/90 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
            
            {/*some metadata*/}
            <div className="mb-4 space-y-2">
              <div className="flex justify-between items-center text-xs text-white/80">
                <span><i className="fas fa-building mr-1"></i> {project.client}</span>
                <span><i className="fas fa-calendar mr-1"></i> {project.date}</span>
              </div>
              <div className="text-xs text-white/80">
                <span><i className="fas fa-clock mr-1"></i> {project.duration}</span>
              </div>
              <div className="text-xs text-white/90 font-medium">
                <span><i className="fas fa-chart-line mr-1"></i> {project.results}</span>
              </div>
            </div>
            
            {/* Services Offered */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2 text-white/95">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services && project.services.map((service, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-full text-xs border border-white/20 text-white/90"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 68, 255, 0.2), rgba(244, 12, 194, 0.2))`,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-4">
              <h3 className="text-base font-semibold mb-2 text-white/95">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-full text-xs border border-white/20 text-white/90"
                    style={{
                      background: `linear-gradient(135deg, rgba(244, 12, 194, 0.2), rgba(0, 68, 255, 0.2))`,
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>   
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                className="w-full rounded-xl text-white border border-white/30 transition-all duration-300 py-2 px-3 hover:border-white/50"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 68, 255, 0.3), rgba(244, 12, 194, 0.3))`,
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center font-medium">
                  Visit Site <i className="pl-2 fas fa-external-link-alt"></i>
                </a>
              </button>             
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 