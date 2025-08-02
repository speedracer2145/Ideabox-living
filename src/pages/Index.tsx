import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import CustomizationSection from '@/components/CustomizationSection';
import ManufacturingSection from '@/components/ManufacturingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CustomizationSection />
      <ManufacturingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
