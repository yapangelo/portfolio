import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <h2 className="contactpage__title">CONTACT</h2>
      <main className="contactpage__contacts">
        <ul className="contactpage__contact-list">
          <li className="contactpage__contact-list-item">Email</li>
          <li className="contactpage__contact-list-item">Github</li>
          <li className="contactpage__contact-list-item">LinkedIn</li>
          <li className="contactpage__contact-list-item">Instagram</li>
        </ul>
      </main>
      <div className="contactpage__help-me">
        <p className="contactpage__help-message">
          my site looks so bare as of now so please contact me cause I need
          work.
        </p>
      </div>
    </div>
  );
};
export default ContactPage;
