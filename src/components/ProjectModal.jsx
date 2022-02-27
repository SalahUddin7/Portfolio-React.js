export default function ProjectModal({ project }) {
  const { image, title, description, pills, github, appUrl } = project;
  const pill = pills.map((pill, index) => <li key={index}>{pill}</li>);
  return (
    <div className="modal-project">
      <div className="header">
        <img src={image} alt="" />
      </div>
      <div className="content-wrapper">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>{pill}</ul>
        <div className="btn-container">
          <a href={appUrl} target="_blank" rel="noreferrer">
            <button className="app-btn">Visit website/app</button>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <button className="git-btn">Git repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}
