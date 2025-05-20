import "../styles/whatsApp.css";
const WhatsApp = () => {
  const phoneNumber = "9199999999"; // Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsApp;
