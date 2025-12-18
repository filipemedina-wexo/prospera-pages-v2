
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { MessageSquare, Palette, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Conte sobre seu negócio',
    description: 'Preencha um formulário simples com informações básicas sobre sua empresa, produtos ou serviços.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Personalize seu site',
    description: 'Escolha cores, adicione seu logo, textos e imagens. Tudo de forma visual e intuitiva.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Publique e cresça',
    description: 'Seu site está no ar! Compartilhe nas redes sociais e comece a receber clientes agora mesmo.',
    gradient: 'from-green-500 to-teal-500',
  },
];

const HowItWorks = () => {
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

  const steps = [
    {
      number: "01",
      title: "Briefing Rápido",
      description: "Você preenche um formulário simples (2-5 min) contando sobre seu negócio e o que precisa.",
      icon: MessageSquare,
      color: "bg-blue-500"
    },
    {
      number: "02",
      title: "Nós Criamos",
      description: "Nossa equipe de especialistas desenha o layout, escreve os textos e monta tudo.",
      icon: Palette,
      color: "bg-indigo-500"
    },
    {
      number: "03",
      title: "Revisão",
      description: "Você recebe o link da prévia. Se precisar de ajustes, nós fazemos.",
      icon: MessageSquare,
      color: "bg-purple-500"
    },
    {
      number: "04",
      title: "Publicação",
      description: "Tudo aprovado? Colocamos seu site no ar e te entregamos o link pronto para divulgar.",
      icon: Rocket,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-rose-50/50 to-teal-50/50 relative overflow-hidden" ref={ref}>
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-orange-200 to-rose-200 rounded-full blur-[80px] opacity-40"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[80px] opacity-40 mb-32"
        />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            Processo Simplificado
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Como funciona?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sem complicações técnicas. Nós cuidamos de tudo para você focar no seu negócio.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line (Centered) */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-4 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full md:-ml-0.5 z-0"
          />

          <div className="space-y-16 py-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center md:justify-between group">

                  {/* Step Dot on Timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.3, type: "spring" }}
                    className={`absolute left-4 md:left-1/2 w-8 h-8 ${step.color} rounded-full border-4 border-slate-50 shadow-lg z-20 md:-ml-4 flex items-center justify-center transform -translate-x-1/2 md:translate-x-0`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>

                  {/* Content Card */}
                  <div className={`flex w-full ${isEven ? 'md:flex-row-reverse' : ''} md:gap-24 pl-16 md:pl-0`}>
                    <div className="hidden md:block w-1/2" /> {/* Spacer */}

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="w-full md:w-1/2"
                    >
                      <div className={`relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <span className={`absolute -top-5 left-8 px-4 py-1 ${step.color} text-white text-sm font-bold rounded-full shadow-md`}>
                          Passo {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 mt-2">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <Button
            onClick={() => scrollToSection('form')}
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
          >
            Preencher briefing agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
