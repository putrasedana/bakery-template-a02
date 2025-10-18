import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "6281234567890"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(
    "Hello! I'm interested in ordering from Dapoer Manis."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-scale-in"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={36} />
    </a>
  );
};

export default WhatsAppButton;
