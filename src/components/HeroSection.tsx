import { ArrowRight, Play } from 'lucide-react';
import heroSofa from '@/assets/hero-sofa.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      <div className="section-padding container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="hero-text text-primary">
                Furniture for Inspired Living
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Premium, customizable furniture for interior designers, 
                architects & modern spaces. Crafted with precision, 
                delivered with care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a href="/ideaboxliving-office-catalogue-final.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center">
                  Explore Our Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/ideabox.living" target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group inline-flex items-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Visit our Instagram
                </a>

            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-3xl font-display font-medium text-primary">5+</div>
                <div className="text-muted-foreground">Sofas Daily</div>
              </div>
              <div>
                <div className="text-3xl font-display font-medium text-primary">10</div>
                <div className="text-muted-foreground">Skilled Artisans</div>
              </div>
              <div>
                <div className="text-3xl font-display font-medium text-primary">3</div>
                <div className="text-muted-foreground">Year Warranty</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroSofa}
                alt="Premium modern sofa crafted by Ideabox Living"
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-luxury-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-warm-stone/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;