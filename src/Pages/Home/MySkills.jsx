import data from "../../data/index.json"

export default function MySkills() {
  return (<section className="skills--section"
    id="myskills">
    <div className="portfolio--container">
      <p className="section--title">My Skills</p>
      <h2 className="skills--section--heading">My expertise</h2>
    </div>
    <div className="skills--section--container">
      {data?.skills?.map((item, index) => (

        <div key={index} className="skills--section--card">
          <div className="skills--secction--img">
            <img src={item.src} alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{item.title}</h3>
            <p className="skills--section--description"></p>{item.description}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}