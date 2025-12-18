

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Smartphone, Layout, MessageSquare, MapPin, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatYouReceive = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Animações únicas para cada ícone
  const iconAnimations = {
    Layout: {
      animate: { scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    MessageSquare: {
      animate: { y: [0, -6, 0], scale: [1, 1.15, 1] },
      transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" }
    },
    ShoppingBag: {
      animate: { rotate: [0, -10, 10, -10, 0], y: [0, -2, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    },
    Search: {
      animate: { scale: [1, 1.2, 1], x: [0, 3, -3, 0] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    MapPin: {
      animate: { y: [0, -8, 0], scale: [1, 1.1, 1] },
      transition: { duration: 1.2, repeat: Infinity, ease: "easeOut", times: [0, 0.4, 1] }
    },
    Smartphone: {
      animate: { rotate: [0, -5, 5, 0], y: [0, -3, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const items = [
    {
      title: "Página Profissional",
      description: "Design premium, responsivo e focado em conversão.",
      icon: Layout,
      iconName: "Layout",
      colSpan: "md:col-span-2",
      bg: "bg-gradient-to-br from-teal-50 to-white border-teal-100",
      iconGlow: "group-hover:shadow-teal-400/40"
    },
    {
      title: "Botão WhatsApp",
      description: "Seus clientes falam com você em um clique. Flutuante e sempre visível.",
      icon: MessageSquare,
      iconName: "MessageSquare",
      colSpan: "md:col-span-1",
      bg: "bg-white border-slate-100",
      iconGlow: "group-hover:shadow-green-400/40"
    },
    {
      title: "Catálogo / Cardápio",
      description: "Exiba seus produtos ou serviços de forma atraente e organizada.",
      icon: ShoppingBag,
      iconName: "ShoppingBag",
      colSpan: "md:col-span-1",
      bg: "bg-white border-slate-100",
      iconGlow: "group-hover:shadow-purple-400/40"
    },
    {
      title: "SEO Básico",
      description: "Sua empresa aparecendo no Google para quem procura.",
      icon: Search,
      iconName: "Search",
      colSpan: "md:col-span-2",
      bg: "bg-gradient-to-br from-blue-50 to-white border-blue-100",
      iconGlow: "group-hover:shadow-blue-400/40"
    },
    {
      title: "Mapa Interativo",
      description: "Facilite a localização do seu negócio.",
      icon: MapPin,
      iconName: "MapPin",
      colSpan: "md:col-span-1",
      bg: "bg-white border-slate-100",
      iconGlow: "group-hover:shadow-red-400/40"
    },
    {
      title: "Mobile First",
      description: "Perfeito em qualquer tamanho de tela.",
      icon: Smartphone,
      iconName: "Smartphone",
      colSpan: "md:col-span-2",
      bg: "bg-white border-slate-100",
      iconGlow: "group-hover:shadow-cyan-400/40"
    }
  ];

  return (
    <section id="what-you-receive" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            O que você recebe?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Uma página completa, feita sob medida para o seu negócio vender mais.
            Sem "faça você mesmo". Nós entregamos tudo pronto.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 relative z-10"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 60,
                      damping: 12
                    }
                  }
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)",
                }}
                className={`${item.colSpan} ${item.bg} p-8 rounded-3xl border border-opacity-60 shadow-lg transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 via-teal-400/0 to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  animate={iconAnimations[item.iconName]?.animate}
                  transition={iconAnimations[item.iconName]?.transition}
                  className={`w-14 h-14 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-300 relative z-10 ${item.iconGlow}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-teal-600 group-hover:text-teal-500 transition-colors" size={28} />
                  </motion.div>
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-transparent to-teal-50/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decorative background element with pulse */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-100/30 via-transparent to-transparent pointer-events-none -z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={() => scrollToSection('form')}
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Quero minha página pronta
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouReceive;
