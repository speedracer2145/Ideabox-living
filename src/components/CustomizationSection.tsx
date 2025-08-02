import { useState } from 'react';
import { Palette, Ruler, Scissors, Wrench } from 'lucide-react';

const CustomizationSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const customizationSteps = [
    {
      icon: Wrench,
      title: 'Choose Design',
      description: 'Select from our collection or bring your custom design',
      details: 'Browse our extensive catalog or share your vision with our design team',
    },
    {
      icon: Ruler,
      title: 'Size & Dimensions',
      description: 'Customize dimensions to fit your exact requirements',
      details: 'Any size possible - from compact apartments to large commercial spaces',
    },
    {
      icon: Scissors,
      title: 'Stitching & Details',
      description: 'Choose from various stitching patterns and finishing details',
      details: 'Hand-stitched seams, button tufting, piping options available',
    },
    {
      icon: Palette,
      title: 'Materials & Finish',
      description: 'Select premium fabrics, leather, and leg finishes',
      details: '350-500 GSM fabrics, genuine leather options, wood or metal legs',
    },
  ];

  const materialOptions = {
    fabrics: ['Premium Cotton', 'Linen Blend', 'Velvet', 'Performance Fabric'],
    leather: ['Top Grain', 'Full Grain', 'Distressed', 'Vintage'],
    legs: ['Solid Wood', 'Metal T-Code', 'Powder Coated', 'Brass Finish'],
    foam: ['32 Density', '35 Density', '40 Density', 'Memory Foam'],
  };

  return (
    <section id="customization" className="py-24 gradient-warm">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-light text-primary mb-6">
            Endless Customization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Any design possible. Every piece tailored to your exact specifications 
            and aesthetic preferences.
          </p>
        </div>

        {/* Customization Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-medium text-primary">
              Your Design Journey
            </h3>
            
            <div className="space-y-6">
              {customizationSteps.map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-primary/5 border-primary shadow-soft'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeStep === index ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-medium text-primary mb-2">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {step.description}
                      </p>
                      {activeStep === index && (
                        <p className="text-sm text-primary font-medium">
                          {step.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated">
            <h4 className="text-2xl font-display font-medium text-primary mb-6">
              Material Options
            </h4>
            
            <div className="space-y-6">
              {Object.entries(materialOptions).map(([category, options]) => (
                <div key={category}>
                  <h5 className="font-medium text-primary capitalize mb-3">
                    {category}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-lg font-display font-medium text-primary mb-2">
                  Any Design Possible
                </p>
                <p className="text-muted-foreground text-sm">
                  Don't see what you need? Our team can create anything you envision.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://wa.me/918217421934?text=Hi%20I%20would%20like%20to%20buy%20something" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            Start Your Custom Design
          </a>

        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;