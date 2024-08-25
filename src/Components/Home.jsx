import transition from "../transition";

function Home() {
  return (
    <div className="home">
      <h1>This is Home Page</h1>
    </div>
  );
}

const TransitionHome = transition(Home);

export default TransitionHome;
