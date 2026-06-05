import React from 'react';

const education = [
  {
    institution: 'Akshaya College of Engineering and Technology',
    location: 'Coimbatore, India (Anna University)',
    duration: '2018 - 2022',
    degree: 'Bachelor of Engineering in Computer Science',
    details: 'Graduated with 7.86 CGPA (First Class with Distinction equivalent). Key Modules: Data Structures, Database Management Systems, Cloud Computing, Software Engineering.'
  },
  {
    institution: 'Christ the King Polytechnic College',
    location: 'Coimbatore, India',
    duration: '2016 - 2018',
    degree: 'Diploma in Computer Science',
    details: 'Graduated with 8.1 CGPA. Laid core foundations in algorithm design, object-oriented programming, and computer systems architecture.'
  }
];

export default function EducationSection() {
  return (
    <div className="container" id="education">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
      </div>

      {/* Timeline Track */}
      <div className="timeline-track mt-5 text-start">
        {education.map((edu, idx) => (
          <div 
            key={idx} 
            className="timeline-item reveal-left"
            style={{ transitionDelay: `${idx * 0.25}s` }}
          >
            <div className="timeline-header">
              <div>
                <h3 className="h5 font-weight-bold" style={{ color: 'var(--white)', margin: 0 }}>
                  {edu.degree}
                </h3>
                <span className="text-secondary" style={{ fontSize: 'var(--text-xs)' }}>
                  {edu.institution} — <span style={{ fontStyle: 'italic' }}>{edu.location}</span>
                </span>
              </div>
              <div>
                <span className="duration-tag">{edu.duration}</span>
              </div>
            </div>
            
            <div className="timeline-body mt-3">
              <p className="text-secondary" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.6', margin: 0 }}>
                {edu.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
