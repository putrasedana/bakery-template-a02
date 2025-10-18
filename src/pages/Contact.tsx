import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to know more about Dapoer Manis."
  );

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Jl. Manis No. 123, Jakarta, Indonesia",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Jl.+Manis+123+Jakarta",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+62 812-3456-7890",
      action: "Call Now",
      link: "tel:+6281234567890",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@dapoermanis.com",
      action: "Send Email",
      link: "mailto:hello@dapoermanis.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Open daily 9 AM – 6 PM",
      action: null,
      link: null,
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-heading text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to us for orders, questions, or just
            to say hello.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-3xl shadow-sm border-2 border-transparent hover:border-primary/30 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.content}</p>
              {item.action && item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  {item.action} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full w-full sm:w-auto">
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
            </Button>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto">
              <Instagram className="mr-2" size={20} />
              Follow on Instagram
            </Button>
          </a>
        </div>

        {/* Google Maps */}
        <div className="rounded-3xl overflow-hidden shadow-xl animate-fade-up">
          <iframe
            title="Dapoer Manis Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1751453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
            Stay Sweet with Us!
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow us on Instagram for the latest treats, special offers, and baking
            inspiration!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full">
              <Instagram className="mr-2" size={20} />
              Follow @dapoermanis
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
