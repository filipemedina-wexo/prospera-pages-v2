import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackMetaEvent } from '@/lib/tracking';

const projects = [
  {
    name: 'Site Institucional',
    subtitle: 'Clareza para apresentar sua marca',
    description: 'Um site pensado para explicar sua empresa, seus serviços e o próximo passo que o cliente deve dar.',
    features: ['Arquitetura de páginas e navegação', 'Textos organizados para a sua oferta', 'Seções de serviços, diferenciais e prova', 'Formulário e canais de contato', 'Design responsivo', 'Publicação e estrutura para buscas'],
    accentClass: 'bg-blue-500',
  },
  {
    name: 'Dashboards',
    subtitle: 'Dados claros para decidir melhor',
    description: 'Painéis sob medida para acompanhar a operação, os resultados e os indicadores que realmente importam.',
    features: ['Definição dos indicadores prioritários', 'Visão de metas e resultados', 'Filtros por período, equipe ou operação', 'Gráficos e tabelas fáceis de explorar', 'Integração com fontes de dados disponíveis', 'Acesso responsivo para o time'],
    accentClass: 'bg-teal-500',
  },
  {
    name: 'Automações',
    subtitle: 'Menos trabalho repetitivo',
    description: 'Fluxos conectados para reduzir tarefas manuais, organizar informações e fazer a operação andar com menos atrito.',
    features: ['Mapeamento do fluxo atual', 'Conexão entre ferramentas', 'Atualizações e disparos automáticos', 'Alertas para o time agir na hora certa', 'Regras de aprovação quando necessário', 'Documentação do processo entregue'],
    accentClass: 'bg-purple-500',
  },
  {
    name: 'Páginas de Lançamento',
    subtitle: 'Uma campanha com caminho claro',
    description: 'Página estratégica para apresentar uma novidade, captar interesse e conduzir a audiência para a conversão.',
    features: ['Estrutura alinhada à campanha', 'Mensagem principal e chamadas para ação', 'Seções de benefícios, prova e objeções', 'Captação por formulário ou WhatsApp', 'Rastreio de conversões', 'Publicação pronta para divulgar'],
    accentClass: 'bg-orange-500',
  },
];

const Pricing = ({ selectedPlan, setSelectedPlan }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isInView) trackMetaEvent('ViewContent', { content_name: 'Projetos Prospera', content_type: 'service' });
  }, [isInView]);

  const handleSelectProject = (projectName) => {
    setSelectedPlan(projectName);
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projects" className="py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase">Projetos sob medida</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">O que podemos construir juntos</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Cada projeto começa entendendo o seu contexto, objetivo e o resultado que você quer alcançar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const isSelected = selectedPlan === project.name;
            return (
              <motion.div key={project.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border ${isSelected ? 'border-4 border-teal-500 ring-4 ring-teal-500/20' : 'border-slate-100'}`}>
                <div className={`h-2 ${project.accentClass}`} />
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-slate-900">{project.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mt-2 mb-4">{project.subtitle}</p>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {project.features.map((feature) => <li key={feature} className="flex items-start gap-3"><Check className="flex-shrink-0 mt-0.5 text-teal-500" size={20} /><span className="text-slate-700 text-sm leading-relaxed">{feature}</span></li>)}
                  </ul>
                  <Button onClick={() => handleSelectProject(project.name)} className="w-full py-7 bg-slate-900 hover:bg-slate-800 text-white rounded-xl">
                    {isSelected ? 'Projeto selecionado' : 'Quero esse projeto'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
