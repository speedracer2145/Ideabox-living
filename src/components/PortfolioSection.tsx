import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import heroSofa from '@/assets/hero-sofa.jpg';
import diningTable from '@/assets/dining-table.jpg';
import armchair from '@/assets/armchair.jpg';
import sofa from '@/assets/sofa.jpg';
import sofa2 from '@/assets/sofa2.jpg';
import oem from  '@/assets/oem.jpg';
import room from '@/assets/room.jpg';
import chair1 from '@/assets/chair1.jpg';
import chair3 from '@/assets/chair3.jpg';
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Sofas');
  
  const filters = ['Sofas','Chairs','Poofs', 'Tables','Cafe','Outdoor',];
  
  const projects = [
    {
      id: 1,
      title: 'Modern Living Room Sofa',
      category: 'Sofas',
      image: heroSofa,
      description: 'Custom 3-seater with premium fabric and solid wood frame',
      materials: 'Pinewood frame, 40-density foam, 450 GSM fabric',
    },
    {
      id: 2,
      title: 'Executive Dining Table',
      category: 'Tables',
      image: diningTable,
      description: 'Handcrafted wooden dining table with metal accents',
      materials: '18mm A-grade ply, Metal T-code legs',
    },
    {
      id: 3,
      title: 'Designer Armchair',
      category: 'Chairs',
      image: armchair,
      description: 'Ergonomic armchair with premium upholstery',
      materials: 'Pinewood frame, 32-density foam, Premium leather',
    },
    {
      id: 4,
      title: 'Office Collection',
      category: 'Outdoor',
      image: sofa,
      description: 'Complete office furniture solution for corporate client',
      materials: 'Various premium materials as per specification',
    },
    {
      id: 5,
      title: 'Boutique Hotel Suite',
      category: 'Custom',
      image: room,
      description: 'Bespoke furniture collection for luxury hotel',
      materials: 'Custom finishes, premium fabrics, solid wood',
    },
    {
      id: 6,
      title: 'Residential Collection',
      category: 'Custom',
      image: armchair,
      description: 'Complete home furniture solution',
      materials: 'Mixed materials, custom specifications',
    },
    {
      id: 7,
      title: 'OEM Partner Project',
      category: 'Outdoor',
      image: oem,
      description: 'Custom furniture for OEM partner',
      materials: 'Tailored to partner specifications',
    },
    {
      id: 8,
      title: 'Luxury Dining Chairs',
      category: 'Chairs',
      image: chair1,
      description: 'Elegant dining chairs with premium upholstery',
      materials: 'Solid wood frame, high-density foam, luxury fabric',
    },
    {
      id: 9,
      title: 'Contemporary Lounge Sofa',
      category: 'Sofas',
      image:sofa2,
      description: 'Spacious lounge sofa with modern design',
      materials: 'Pinewood frame, 35-density foam, designer fabric',
    },
    {
      id: 10,
      title: 'Scandinavian Dining Chairs',
      category: 'Chairs',
      image: chair3,
      description: 'Minimalist dining chairs with natural wood finish',
      materials: 'Solid beech wood, upholstered seat',
    },
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="section-padding container-max">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-light text-primary mb-6">
            Product Portfolio 
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of premium furniture crafted for diverse spaces and clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group card-elevated overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-display font-medium text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Materials:</span> {project.materials}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/ideaboxliving-catalogue.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-primary group inline-flex items-center">
                  View Complete Portfolio Catalogue
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;