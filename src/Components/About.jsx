import transition from "../transition";
function About() {
  return (
    <div className="about">
      <h1>This is About Page</h1>
    </div>
  );
}

const TransitionAbout = transition(About);

export default TransitionAbout;
