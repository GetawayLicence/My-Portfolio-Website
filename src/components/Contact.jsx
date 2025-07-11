import {
  GithubIcon,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const clearMessage = () => {
  setTimeout(() => {
    setFormStatus((prev) => ({
      ...prev,
      message: "",
      success: false,
      error: false,
    }));
  }, 3000);
};

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      clearMessage()

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
      
      clearMessage()

    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> Get In </span> Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in working together? 
          Let's connect — I'm always open to discussing new opportunities.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 bg-card p-8 rounded-lg shadow-md">
    <h3 className="text-2xl font-semibold mb-6 text-center"> My Contact Information</h3>

    <div className="space-y-6 text-left">
      
      {/* Email */}
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/15 flex items-center justify-center">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Email</h4>
          <a href="mailto:manasvi.sruthi@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            manasvi.sruthi@gmail.com
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/15 flex items-center justify-center">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Phone</h4>
          <a href="tel:+6589318172" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            (+65) 8931 8172
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/15 flex items-center justify-center">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Location</h4>
          <p className="text-muted-foreground text-sm">
            Singapore, Singapore
          </p>
        </div>
      </div>

      {/* Connect with me - Centered */}
      <div className="pt-8 text-center">
        <h4 className="font-medium mb-4">Connect with me!</h4>
        <div className="flex justify-center space-x-4">
          <a target="_blank" href="https://www.linkedin.com/in/sruthi-sathishkumar-bab327286/"><Linkedin /></a>
          <a target="_blank" href="https://github.com/GetawayLicence"><GithubIcon /></a>
        </div>
      </div>
    </div>
  </div>
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="janedoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn("button w-full flex items-center justify-center gap-2")}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {formStatus.message && (
                <div className={`form-status ${formStatus.success ? "success" : "error"}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
