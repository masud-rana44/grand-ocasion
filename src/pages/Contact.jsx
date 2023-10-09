import ContactForm from "../components/ContactForm";
import { ContactHeader } from "../components/ContactHeader";
import { Footer } from "../components/Footer";
import { MapContact } from "../components/MapContact";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <MapContact />
      <Footer/>
    </div>
  );
};

export default Contact;
