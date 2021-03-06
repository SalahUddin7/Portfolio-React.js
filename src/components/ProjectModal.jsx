export default function ProjectModal({ project }) {
  const { image, title, description, pills, github, appUrl } = project;
  const pill = pills.map((pill, index) => <li key={index}>{pill}</li>);
  return (
    <div className="modal-view">
      <div className="modal-view-left">
        <img src={image} alt="" />
      </div>
      <div className="modal-view-right">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="modal-pills">{pill}</ul>
        <div>
          <a href={appUrl} target="_blank" rel="noreferrer">
            <button className="website-btn">Visit Website</button>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <button className="github-btn">Visit Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
