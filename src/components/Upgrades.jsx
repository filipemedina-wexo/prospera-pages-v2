import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Globe, MessageCircle, ShoppingCart, Users, Heart, Plus, Clock, Check } from 'lucide-react';

const upgrades = [
    {
        title: 'Domínio Próprio',
        description: 'Instalação do seu endereço exclusivo (ex: suaempresa.com.br). Passa autoridade imediata.',
        icon: Globe,
        color: 'bg-blue-100 text-blue-600',
        comingSoon: false
    },
    {
        title: 'Chatbot Inteligente',
        description: 'Atendimento automático 24h para responder dúvidas frequentes e agendar clientes.',
        icon: MessageCircle,
        color: 'bg-green-100 text-green-600',
        comingSoon: false
    },
    {
        title: 'Catálogo Avançado',
        description: 'Filtros, categorias e busca para lojas com muitos produtos.',
        icon: ShoppingCart,
        color: 'bg-purple-100 text-purple-600',
        comingSoon: false
    },
    {
        title: 'Automação de Chat',
        description: 'Whatsapp e Direct do Instagram automáticos para não perder vendas.',
        icon: MessageCircle,
        color: 'bg-teal-100 text-teal-600',
        comingSoon: true
    },
    {
        title: 'CRM de Clientes',
        description: 'Controle total da sua carteira de clientes, histórico e organização.',
        icon: Users,
        color: 'bg-indigo-100 text-indigo-600',
        comingSoon: true
    },
    {
        title: 'Fidelidade e Feedback',
        description: 'Sistema para recompensar clientes recorrentes e coletar avaliações.',
        icon: Heart,
        color: 'bg-rose-100 text-rose-600',
        comingSoon: true
    }
];

const Upgrades = ({ selectedUpgrades, setSelectedUpgrades }) => {
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

    const toggleUpgrade = (upgradeTitle) => {
        if (selectedUpgrades.includes(upgradeTitle)) {
            setSelectedUpgrades(selectedUpgrades.filter(item => item !== upgradeTitle));
        } else {
            setSelectedUpgrades([...selectedUpgrades, upgradeTitle]);
        }
    };

    return (
        <section id="upgrades" className="py-24 bg-white" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Potencialize seu Projeto
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Upgrades Disponíveis
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Você pode adicionar agora ou depois. O ecossistema Prospera está sempre evoluindo para impulsionar seu negócio.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {upgrades.map((upgrade, index) => {
                        const Icon = upgrade.icon;
                        const isSelected = selectedUpgrades?.includes(upgrade.title);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`relative bg-slate-50 rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden ${isSelected ? 'border-teal-500 ring-2 ring-teal-500/20 bg-teal-50/30' : 'border-slate-100 hover:border-teal-200'
                                    }`}
                            >
                                {upgrade.comingSoon && (
                                    <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Clock size={12} />
                                        EM BREVE
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-xl ${upgrade.color} flex items-center justify-center mb-6`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{upgrade.title}</h3>
                                <p className="text-slate-600 mb-8 flex-1">{upgrade.description}</p>

                                {upgrade.comingSoon ? (
                                    <Button
                                        onClick={() => scrollToSection('form')}
                                        variant="outline"
                                        className="w-full border-2 border-slate-200 hover:border-teal-500 hover:text-teal-600 flex items-center justify-center gap-2 group"
                                    >
                                        <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                                        Tenho interesse
                                    </Button>
                                ) : (
                                    <div className="mt-auto">
                                        <label className={`
                                            flex items-center justify-between w-full p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                                            ${isSelected
                                                ? 'border-teal-500 bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                                                : 'border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600'
                                            }
                                        `}>
                                            <span className="font-bold text-sm">
                                                {isSelected ? 'Adicionado ao projeto' : 'Adicionar ao projeto'}
                                            </span>
                                            <div className={`
                                                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                                                ${isSelected ? 'border-white bg-white/20' : 'border-slate-300'}
                                            `}>
                                                {isSelected && <Check size={14} className="text-white" />}
                                            </div>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={isSelected}
                                                onChange={() => toggleUpgrade(upgrade.title)}
                                            />
                                        </label>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Upgrades;
