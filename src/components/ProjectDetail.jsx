import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // This would typically come from a database or API
  const project = {
    id: id,
    title: "Project Title",
    description: "Detailed project description goes here.",
    image: "/api/placeholder/800/400",
    tools: ["Tool 1", "Tool 2"],
    link: "#"
  };

  return (
    <div className="project-detail">
      <Link to="/" className="back-button">← Back to Portfolio</Link>
      <div className="project-content">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <div className="project-info">
          <p>{project.description}</p>
          <div className="tools">
            {project.tools.map(tool => (
              <span key={tool} className="tool-tag">{tool}</span>
            ))}
          </div>
          <a href={project.link} className="view-project-button">
            View Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;