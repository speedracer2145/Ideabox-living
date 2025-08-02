import { Award, Heart, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion for Craft',
      description: 'Every piece is crafted with meticulous attention to detail and genuine love for furniture design.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '10 skilled artisans with years of experience in premium furniture manufacturing.',
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Efficient production with daily capacity of 5 sofas and 2-3 tables without compromising quality.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium materials, rigorous testing, and comprehensive warranty on all our products.',
    },
  ];

  return (
    <section id="about" className="py-24 gradient-warm">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-light text-primary mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ideabox Living Private Limited is your trusted partner in creating 
            exceptional furniture that transforms spaces and inspires living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated text-center group hover:scale-105 transform transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl font-display font-medium text-primary">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between exceptional design 
              and accessible luxury, Ideabox Living has grown into a trusted name 
              in the furniture industry. We serve interior designers, architects, 
              and discerning customers who value quality, customization, and craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our manufacturing facility combines traditional woodworking techniques 
              with modern precision, ensuring every piece meets the highest standards 
              of quality and durability.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="card-elevated">
              <h4 className="text-2xl font-display font-medium text-primary mb-4">
                Our Capabilities
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Custom Design & Manufacturing</li>
                <li>• OEM Solutions</li>
                <li>• White Labelling Services</li>
                <li>• Bulk Production</li>
                <li>• Quality Assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;