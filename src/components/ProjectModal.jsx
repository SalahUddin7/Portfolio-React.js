export default function ProjectModal({ project }) {
  const { image, title, description, pills, github, appUrl } = project;
  const pill = pills.map((pill, index) => <li key={index}>{pill}</li>);
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>{pill}</ul>
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
