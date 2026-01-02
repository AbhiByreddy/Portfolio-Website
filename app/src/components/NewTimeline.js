import React from "react";

export default function NewTimeline() {
    const event = {
        title: "CTFGuide",
        job: "Co-Founder & Systems Architect",
        image: "./darkLogo.png",
        date: "Oct 2022 - Present",
        description: "Co-Founded CTFGuide, an AI cybersecurity learning platform that supported thousands of students. Created and managed core architectural backend systems on AWS and GCP. Wrote frontend code using React/Next & TailwindCSS. Wrote backend code with JS, Node.js. Frequently attended B2B investor meetings and maintained customer relations. Managed a team of 7 core developers, hosting daily and weekly standups as well as managing product timelines and deadlines.",
        website: "https://ctfguide.com"
    }
    const event2 = {
        title: "Nittany AI Hackathon",
        image: "./pennstatetransparent.png",
        date: "Oct 2023",
        description: "Created Workbook, an open-source workbook with a live Linux container that allows professors to write markdown/HTML, and execute code in an online terminal. Workbook was created using Google Kubernetes Engine and HTML/TailwindCSS.",
    }
    const event3 = {
      title: "HackPSU",
      image: "./pennstatetransparent.png",
      date: "Oct 2022",
      description: "Created QuickQuiz, a program that uses GPT-3 to generate questions and answers for a quiz. QuickQuiz was created using AWS, Tensorflow, GPT-3, Firebase, and HTML/TailwindCSS.",
    }

    const event4 = {
        title: "Comcast",
        job: "Technical Project Manager Intern",
        image: "./CMCSA.png",
        date: "Summer 2025",
        description: "Managed thousands of nationwide deployments across Comcasts vCMTS infrastructure.",
        website: "https://corporate.comcast.com/"
    }
    const event5 = {
        title: "Amazon (AWS)",
        job: "Software Development Engineer Intern",
        image: "./aws-logo-scaled.jpg",
        date: "Fall 2025",
        description: "Optimized EC2 and EBS instance availability for all FSx engines. Launched 3 FSxZ deployment types in 20+ regions.",
        website: "https://aws.amazon.com"
    }

    const events = [event, event5, event4, event2, event3];
    
    return (
        <div className="w-full max-w-4xl mx-auto px-4 space-y-6">
            {events && events.map((project, index) => (
                <div 
                    key={index} 
                    className="timeline-card backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:backdrop-blur-xl hover:border-white/30 hover:-translate-y-2"
                    style={{
                        background: `linear-gradient(135deg, rgba(0, 68, 255, 0.1), rgba(244, 12, 194, 0.1))`,
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backdropFilter = 'blur(20px)';
                        e.currentTarget.style.WebkitBackdropFilter = 'blur(20px)';
                        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 68, 255, 0.4), 0 8px 32px 0 rgba(244, 12, 194, 0.3), 0 0 60px 0 rgba(0, 68, 255, 0.2), 0 0 60px 0 rgba(244, 12, 194, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backdropFilter = 'blur(16px)';
                        e.currentTarget.style.WebkitBackdropFilter = 'blur(16px)';
                        e.currentTarget.style.boxShadow = '';
                    }}
                >
                    <div className="p-3">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                                <div 
                                    className="logo-container w-20 h-20 rounded-xl flex items-center justify-center p-2 border border-white/15 transition-all duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, rgba(0, 68, 255, 0.15), rgba(244, 12, 194, 0.15))`,
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={`${project.title} Logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <span 
                                        className="date-badge text-sm text-white px-3 py-1 rounded-full flex-shrink-0 border border-white/15 transition-all duration-300"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(0, 68, 255, 0.2), rgba(244, 12, 194, 0.2))`,
                                            backdropFilter: 'blur(12px)',
                                            WebkitBackdropFilter: 'blur(12px)',
                                        }}
                                    >
                                        {project.date}
                                    </span>
                                </div>
                                
                                {project.job && (
                                    <p className="text-white/90 font-medium mb-1 text-lg">
                                        {project.job}
                                    </p>
                                )}
                            </div>
                        </div>
                        
                        <div className="mt-3">
                            <p className="text-white/95 leading-relaxed text-lg">
                                {project.description}
                            </p>
                            
                            {project.website && (
                                <div className="mt-3">
                                    <button 
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white border border-white/30 transition-all duration-300 hover:border-white/50 text-sm font-medium"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(0, 68, 255, 0.3), rgba(244, 12, 194, 0.3))`,
                                            backdropFilter: 'blur(12px)',
                                            WebkitBackdropFilter: 'blur(12px)',
                                        }}
                                        onClick={() => window.open(project.website, '_blank')}
                                    >
                                        Visit
                                        <i className="fas fa-external-link-alt"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}