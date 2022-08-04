import "../App.css";
import ContactForm from "./ContactForm";
import ContactImage from "../images/contact_us.jpg";
import SmileyImage from "../images/smiley.jpg";


function ContactUs() {

  return (
    <div className="App">
      <p>
      </p>
      <img src= {ContactImage} alt="Contact Fit Me"></img>
      <h2>While we’re good with smoke signals, there are simpler ways for us to get in touch... like social media:</h2>
      <img src="https://img.icons8.com/plasticine/200/000000/instagram-new--v2.png"/>
      <img src="https://img.icons8.com/plasticine/200/000000/facebook-new.png"/>
      <img src="https://img.icons8.com/plasticine/200/000000/tiktok.png"/>
      <img src="https://img.icons8.com/plasticine/200/000000/twitter.png"/>
      <br>
      </br>
      <br>
      </br>
      <h2>Haven't found your answer yet?  Drop us a mail!</h2>
      <header className="App-header">
        <div className="py-6">
          <ContactForm /><img src= {SmileyImage} alt="Fit Me Smiley"></img>
          <p>© Fit-Me Ltd. 2022</p>
        </div>
      </header>
    </div>
  );
}

export default ContactUs;