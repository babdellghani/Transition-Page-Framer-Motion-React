import transition from "../transition";

function Contact() {
  return (
    <div className="contact">
      <h1>This is Contact Page</h1>
    </div>
  );
}

const TransitionContact = transition(Contact);

export default TransitionContact;
