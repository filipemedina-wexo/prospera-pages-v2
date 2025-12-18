import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, X, Smartphone, Monitor, Maximize2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Template para Pousadas e Hotéis',
    category: 'Site Completo',
    image: '/portfolio/pousada.png',
    url: 'https://template-pousada.useprospera.com.br/', // Replace with real URLs if available
    isTemplate: true
  },
  {
    title: 'Template para Loja de Jóias',
    category: 'Site Completo',
    image: '/portfolio/joalheria.png',
    url: 'https://premium-joias-completo.useprospera.com.br/',
    isTemplate: true
  },
  {
    title: 'Template para Restaurante',
    category: 'Essencial',
    image: '/portfolio/restaurante.png?auto=format&fit=crop&q=80&w=800',
    url: 'https://template-restaurante-3.useprospera.com.br/',
    isTemplate: true
  }
];

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    closeModal();
  };


  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            O que podemos fazer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Veja como seu site pode ficar
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Temos templates disponíveis para você dimensionar o que podemos fazer com o seu projeto. Mas cada projeto é um projeto, cada desefio é um desafio, e a sua empresa é única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-slate-200">
                {project.isTemplate && (
                  <div className="absolute top-3 left-3 z-10 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Template
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-teal-400 text-sm font-bold mb-1">{project.category}</span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-white text-sm font-medium">
                    Ver projeto <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-slate-900 w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800">
                  <div className="flex items-center gap-4">
                    <h3 className="text-white font-bold text-lg hidden sm:block">{selectedProject.title}</h3>
                    <div className="flex bg-slate-700 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('desktop')}
                        className={`p-2 rounded-md transition-colors ${viewMode === 'desktop' ? 'bg-slate-600 text-teal-400' : 'text-slate-400 hover:text-white'}`}
                        title="Desktop View"
                      >
                        <Monitor size={20} />
                      </button>
                      <button
                        onClick={() => setViewMode('mobile')}
                        className={`p-2 rounded-md transition-colors ${viewMode === 'mobile' ? 'bg-slate-600 text-teal-400' : 'text-slate-400 hover:text-white'}`}
                        title="Mobile View"
                      >
                        <Smartphone size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      onClick={() => scrollToSection('form')}
                      className="bg-teal-600 hover:bg-teal-700 text-white hidden sm:flex"
                    >
                      Quero uma página assim
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <button
                      onClick={closeModal}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Modal Content - Iframe */}
                <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                  <div
                    className={`transition-all duration-500 bg-white rounded-lg overflow-hidden shadow-2xl ${viewMode === 'mobile' ? 'w-[375px] h-full' : 'w-full h-full'
                      }`}
                  >
                    {/* Loading indicator */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-0">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-slate-500 text-sm">Carregando preview...</p>
                      </div>
                    </div>
                    {/* Iframe */}
                    <iframe
                      src={selectedProject.url}
                      title={selectedProject.title}
                      className="w-full h-full border-0 relative z-10"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Mobile Floating CTA (only visible on small screens inside modal) */}
                <div className="sm:hidden p-4 bg-slate-800 border-t border-slate-700">
                  <Button
                    onClick={() => scrollToSection('form')}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    Quero uma página assim
                  </Button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default Portfolio;