import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Eu preciso entender de tecnologia ou design?',
    answer: 'Absolutamente não. Esse é o nosso diferencial. Nós cuidamos de toda a parte técnica, layout, textos e configurações. Você só precisa nos contar sobre o seu negócio.',
  },
  {
    question: 'Quanto tempo demora para meu site ficar pronto?',
    answer: 'Para a Página de Vendas (Plano Essencial), entregamos a primeira versão para aprovação em até 3 dias úteis após o recebimento do material. Sites institucionais levam cerca de 7 dias.',
  },
  {
    question: 'E se eu não gostar do resultado?',
    answer: 'Nós ajustamos! Antes de publicar, enviamos um link de prévia. Você pode pedir alterações nas cores, textos ou fotos até ficar exatamente como imaginou. Só publicamos com seu "De acordo".',
  },
  {
    question: 'Eu tenho que pagar mensalidade?',
    answer: 'No Plano Essencial, o pagamento é único pela criação. Você ganha 1 ano de hospedagem grátis. Após esse período, há apenas uma taxa anual pequena de manutenção (hospedagem + domínio), sem mensalidades surpresas.',
  },
  {
    question: 'Já tenho um domínio (www.meunome.com.br), posso usar?',
    answer: 'Sim! Nós configuramos seu domínio existente na sua nova página. Se você ainda não tem, nós te ajudamos a escolher e registrar um.',
  },
  {
    question: 'Qual a diferença para Wix ou Wordpress?',
    answer: 'Nessas plataformas, você recebe uma ferramenta e tem que construir tudo sozinho ("Faça Você Mesmo"). Aqui no Prospera, é "Feito Para Você". Nós somos sua equipe de tecnologia.',
  },
];

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
            Tira-dúvidas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-teal-500 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
