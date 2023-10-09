import ContactForm from "../components/ContactForm";
import { ContactHeader } from "../components/ContactHeader";
import { MapContact } from "../components/MapContact";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <MapContact />
    </div>
  );
};

export default Contact;
