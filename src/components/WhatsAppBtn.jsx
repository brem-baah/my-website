import { personal } from '../data';

export default function WhatsAppBtn() {
  return (
    <a
      href={`https://wa.me/${personal.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-sticky"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
