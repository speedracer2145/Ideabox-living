import { CheckCircle, Factory, Shield, Truck } from 'lucide-react';
import workshopImage from '@/assets/workshop.jpg';

const ManufacturingSection = () => {
  const capabilities = [
    {
      metric: '5+',
      label: 'Sofas Daily',
      description: 'Consistent daily production capacity',
    },
    {
      metric: '2-3',
      label: 'Tables Daily',
      description: 'Additional table manufacturing capacity',
    },
    {
      metric: '10',
      label: 'Skilled Artisans',
      description: 'Expert craftspeople on our team',
    },
    {
      metric: '100%',
      label: 'Quality Check',
      description: 'Every piece thoroughly inspected',
    },
  ];

  const materials = [
    {
      name: 'Pinewood Frame',
      description: 'Sustainable, durable foundation for all furniture',
      icon: Shield,
    },
    {
      name: '18mm A-Grade Ply',
      description: 'Premium plywood for structural integrity',
      icon: CheckCircle,
    },
    {
      name: 'T-Code/Metal Legs',
      description: 'Robust leg systems for longevity',
      icon: Truck,
    },
    {
      name: 'Premium Foam',
      description: '32-40 density Dura Flex for comfort',
      icon: Shield,
    },
    {
      name: 'Quality Fabric',
      description: '350-500 GSM fabric for durability',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="manufacturing" className="py-24 bg-background">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-light text-primary mb-6">
            Expert Manufacturing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art facility combining traditional craftsmanship 
            with modern efficiency and quality control.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((item, index) => (
            <div key={index} className="card-elevated text-center">
              <div className="text-4xl font-display font-medium text-primary mb-2">
                {item.metric}
              </div>
              <div className="text-lg font-medium text-primary mb-2">
                {item.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-medium text-primary">
              Our Manufacturing Process
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Design Approval</h4>
                  <p className="text-muted-foreground">Detailed review and finalization of specifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Material Preparation</h4>
                  <p className="text-muted-foreground">Premium materials cut and prepared by skilled artisans</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Expert Assembly</h4>
                  <p className="text-muted-foreground">Handcrafted assembly with attention to every detail</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  4
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Quality Control</h4>
                  <p className="text-muted-foreground">Rigorous testing and inspection before delivery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={workshopImage}
              alt="Ideabox Living manufacturing workshop"
              className="w-full h-auto rounded-3xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Materials Section */}
        <div className="card-elevated">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-medium text-primary mb-4">
              Premium Materials
            </h3>
            <p className="text-muted-foreground">
              We use only the finest materials to ensure durability, comfort, and aesthetic appeal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <material.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">
                    {material.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {material.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;