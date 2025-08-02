import { useState } from 'react';
import { Mail, Phone, MapPin, Upload, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Direct Customer',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 gradient-warm">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-light text-primary mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your furniture vision to life? Get in touch for a 
            personalized quote and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-display font-medium text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're an interior designer looking for custom solutions, 
                an architect planning a project, or a customer seeking premium furniture, 
                we're here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 82174 21934</p>
                  <p className="text-muted-foreground">+91 88809 92978</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">sales@ideaboxliving.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">16/2, Site No. 12-14,Vittasandra,</h4>
                  <p className="text-muted-foreground">
                    Bettadasanapura Road, Near Ration Depo,<br />
                    Begur Po, Bangalore,<br />
                    Karnataka - 560068, India
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h4 className="text-xl font-display font-medium text-primary mb-4">
                Why Choose Ideabox Living?
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• First come, first serve production system</li>
                <li>• Dedicated logistics with GPS tracking</li>
                <li>• Fully insured delivery</li>
                <li>• 24-48 hour service response</li>
                <li>• 1-3 year comprehensive warranty</li>
                <li>• Complaint tracking with customer login</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-display font-medium text-primary mb-6">
              Request a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  I am a *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="Direct Customer">Direct Customer</option>
                  <option value="Interior Designer">Interior Designer</option>
                  <option value="Architect">Architect</option>
                  <option value="OEM Partner">OEM Partner</option>
                  <option value="Distributor">Distributor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Tell us about your requirements, preferred materials, dimensions, or any specific needs..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Upload Reference Files
                </label>
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Drop files here or click to upload<br />
                    (Images, drawings, specifications)
                  </p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;