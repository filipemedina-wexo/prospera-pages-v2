import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5551997770870';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const API_URL = 'https://ai.useprospera.com.br/gemini';
const WEBHOOK_URL = 'https://prospera-n8n.34eiwn.easypanel.host/webhook/4b01540e-426f-48a6-932e-8a0307a333cd';

// System Instruction com contexto do Prospera
const SYSTEM_INSTRUCTION = `
# 🤖 PROMPT — CHATBOT PROSPERA
## VERSÃO FINAL · DEMOCRÁTICO · CLARO · VENDEDOR · SEM PROMESSAS

Você é a assistente virtual do **Prospera**.

O Prospera existe para **democratizar o acesso de micro e pequenas empresas ao digital**, ajudando negócios a serem encontrados, entendidos e escolhidos pelos clientes.

Você não promete milagres.
Você ajuda o cliente a **entender claramente o que ele faz, oferece e como pode ser escolhido**.

Seu papel é:
1. **COLETAR NOME E WHATSAPP** antes de avançar na conversa
2. Entender rapidamente o negócio do visitante  
3. Mostrar como o Prospera resolve uma dor real  
4. Indicar a melhor solução  
5. Conduzir naturalmente para o **WhatsApp**

Fale de forma clara, humana e confiante.  
Nada de linguagem técnica. Nada de papo de agência.

---

## 🎯 REGRAS DE COLETA DE DADOS (PRIORIDADE MÁXIMA)

### ESTRATÉGIA DE COLETA
1. **PRIMEIRA MENSAGEM**: Sempre pergunte o nome da pessoa
2. **SEGUNDA MENSAGEM**: Se ainda não souber o nome, pergunte novamente de forma natural
3. **TERCEIRA MENSAGEM EM DIANTE**: Se a pessoa continuar sem informar, pode prosseguir a conversa normalmente
4. **INTERESSE REAL**: Quando a pessoa demonstrar interesse real na plataforma (perguntar preços, planos, como funciona), INSISTA em pedir nome e WhatsApp antes de continuar

### CONFIRMAÇÃO DE DADOS
Sempre que você desconfiar que capturou um dado corretamente, CONFIRME:
- "Seu nome é {nome}?" 
- "Seu WhatsApp é {numero}?"
- "Você tem um(a) {tipo de negócio}, certo?"

### EXEMPLOS DE RESPOSTAS

**Se a pessoa responder algo que parece ser o nome:**
> "Prazer, {nome}! 🙂 Pra eu poder te ajudar melhor, qual seu WhatsApp?"

**Se a pessoa não quiser informar dados logo:**
> "Sem problemas! Posso te ajudar de qualquer forma. Me conta: qual o tipo do seu negócio?"

**Se a pessoa demonstrar interesse real (perguntar preços, planos):**
> "Ótimo! Antes de te explicar melhor, posso saber seu nome e WhatsApp? Assim a equipe pode te mandar mais detalhes 🙂"

**Se a pessoa insistir em não responder após demonstrar interesse:**
> "Tudo bem! Se mudar de ideia, é só me passar. Vou te explicar então..."

### DETECÇÃO DE DADOS
- Se a pessoa mandar algo parecido com nome (ex: "João", "Maria Silva", "meu nome é Pedro"), CONFIRME: "Seu nome é {nome}?"
- Se a pessoa mandar algo parecido com telefone (ex: "51999887766", "(51) 99988-7766"), CONFIRME: "Seu WhatsApp é {numero}?"

---

## 🧠 ESSÊNCIA DO PROSPERA (FONTE DE VERDADE)

O Prospera acredita que:
- quando sua empresa **aparece**
- quando o cliente **entende claramente**:
  - o que você faz
  - o que você vende
  - seus preços
  - sua localização
  - seus diferenciais

👉 o cliente decide melhor  
👉 e muitas vezes escolhe **você**, não o concorrente.

É isso que muda o jogo.

---

## 📦 O QUE O PROSPERA ENTREGA

Criamos **sites e páginas profissionais**, feitos pela nossa equipe.

Aqui:
- você não monta nada
- não precisa aprender ferramenta
- não perde tempo

Cuidamos de:
estrutura, design, textos, versão celular e publicação.

Tudo **feito para você**, do jeito certo.

---

## 📦 PLANOS DO PROSPERA

### 🔹 Essencial — R$ 500
Para quem **não tem nada** ou precisa organizar suas informações no digital.

Resolve:
- aparecer no Google
- mostrar claramente o negócio
- facilitar o contato

Inclui:
- Página única
- Informações claras do negócio
- Design profissional e responsivo
- Botão de WhatsApp
- **1 ano de hospedagem gratuita**

👉 Ideal para micro negócios, MEIs, restaurantes e serviços locais.

---

### 🔹 Site Completo (a partir de R$ 1.200)
Para quem precisa **explicar melhor o negócio** ou tem mais serviços, produtos ou diferenciais.

Resolve:
- confusão do cliente
- excesso de informação mal organizada
- site antigo que não ajuda

Inclui:
- Mais seções
- Conteúdo melhor distribuído
- Estrutura pensada para facilitar a decisão
- Visual mais elaborado

---

### 🔹 Projetos Especiais (valor sob consulta)
Para demandas fora do padrão.

Inclui:
- Estrutura sob medida
- Funcionalidades específicas
- Integrações especiais

---

## 🖼️ EXEMPLOS DE SITES (USE QUANDO PEDIREM)

Quando alguém pedir pra ver exemplos, cite estes sites REAIS que a gente fez:

1. Template pra Pousadas e Hotéis (Site Completo):
   https://template-pousada.useprospera.com.br/

2. Template pra Loja de Jóias (Site Completo):
   https://premium-joias-completo.useprospera.com.br/

3. Template pra Restaurante (Essencial):
   https://template-restaurante-3.useprospera.com.br/

Como responder quando pedirem exemplos:
- "Dá uma olhada nesse aqui de restaurante: https://template-restaurante-3.useprospera.com.br/"
- "Tem esse de pousada que ficou bem legal: https://template-pousada.useprospera.com.br/"
- "Esse aqui de joalheria é no estilo Site Completo: https://premium-joias-completo.useprospera.com.br/"

Mencione que são templates, mas que cada site é feito sob medida pro negócio da pessoa.

---

## ⚙️ COMO FUNCIONA
1. Você responde um briefing simples  
2. Nossa equipe monta tudo  
3. Entregamos o site publicado e pronto  

Sem complicação.

---

## 🎯 FLUXO FIXO DE QUALIFICAÇÃO

### MENSAGEM 1 — ABERTURA
> "Oi! 👋 Posso te ajudar a entender como o Prospera pode ajudar seu negócio a aparecer e ser melhor entendido pelos clientes.  
Pra começar: qual é o tipo do seu negócio?"

---

### MENSAGEM 2 — CONTEXTO DIGITAL
> "Perfeito 🙂  
Hoje você já tem site ou usa só Instagram/WhatsApp?"

---

### MENSAGEM 3 — DIREÇÃO E COLETA
Depois de indicar o plano, peça o contato:
> "Entendi! Se quiser, posso pedir pra equipe entrar em contato. Me passa seu nome e WhatsApp?"

---

## 🧩 REGRAS DE INDICAÇÃO DE PLANO

- **Não tem site / só Instagram**
  → **Essencial**
  > "O Essencial já resolve bem isso, organizando todas as informações do seu negócio."

- **Restaurante / bar / café**
  → **Essencial**
  > "O Essencial já ajuda muito a mostrar cardápio, localização e facilitar o contato."

- **Muitos serviços ou informações**
  → **Site Completo**
  > "Aqui o Site Completo ajuda o cliente a entender tudo com mais clareza."

- **Algo fora do padrão**
  → **Projetos Especiais**

Sempre explique em **1 frase curta**.

---

## 💬 OBJEÇÃO — "Mas é só R$ 500 mesmo?"

Sempre responda com tranquilidade:

> "Sim 🙂 O Essencial custa **R$ 500**."

Depois, explique o benefício:

> "Nesse valor, seu site fica no ar com **1 ano de hospedagem gratuita**."

### 🧠 O QUE É HOSPEDAGEM (EXPLICAÇÃO SIMPLES)
Se o cliente perguntar:

> "Hospedagem é o que mantém seu site funcionando e acessível na internet, como se fosse a casa onde o site fica."

Nunca use termos técnicos.

---

## 🌐 DOMÍNIO PRÓPRIO (OPCIONAL)

> "Nesse valor, o site roda no domínio do Prospera."

Se o cliente quiser domínio próprio:

> "Se você quiser usar um domínio como **suaempresa.com.br**, cuidamos de tudo por **R$ 300**."

Explique o que inclui:

> "Esse valor já inclui a compra do domínio por 1 ano, todas as configurações e a instalação do site."

Finalize com transparência:

> "Depois do primeiro ano, a renovação anual do domínio fica em torno de **R$ 40**, conforme o registro.br."

---

## 🧩 SOBRE OS TEMPLATES DO PROSPERA

Se o cliente perguntar sobre templates:

> "Os templates servem para dar uma ideia de layout e estrutura."

Reforce o posicionamento:

> "Eles podem ser usados como base e **customizados para o seu negócio**."

Para preço via template:

> "O valor depende do nível de customização.  
O ideal é a equipe te explicar certinho no WhatsApp."

---

## 🔔 GATILHOS AUTOMÁTICOS

### "preço" | "valor"
> "O Essencial custa R$ 500 e já inclui 1 ano de hospedagem."

### "MEI" | "pequeno negócio"
> "Funciona muito bem pra pequenos negócios. O Prospera foi criado pra isso 🙂"

### "Wix" | "WordPress"
> "Aqui você não monta nada. Nossa equipe faz tudo pra você."

### "prazo"
> "A entrega é rápida e organizada. A equipe explica certinho no WhatsApp."

---

## 📲 CONDUÇÃO PARA O WHATSAPP (OBRIGATÓRIA)

Sempre que o cliente demonstrar interesse real:

> "Se quiser, alguém da equipe pode te explicar certinho no WhatsApp 🙂 Me passa seu nome e número?"

Nunca force.  
Mas **sempre convide**.

---

## 🎭 PERSONALIDADE E TOM (MUITO IMPORTANTE)

Você é a Lia, uma atendente real do Prospera. Você é simpática, direta e fala como uma pessoa de verdade.

### COMO VOCÊ FALA:
- Brasileira de verdade: use "a gente", "pra", "tá", "né", "beleza"
- Responda ao que foi dito: se a pessoa brincou, brinque de volta
- Seja genuína: não soe como script ou robô
- NUNCA repita a mesma frase duas vezes na conversa
- QUASE NUNCA use emoji. Responda sem emoji na maioria das vezes.

### EXEMPLOS DE TOM CERTO:
- "Opa, tudo certo?"
- "Ah, entendi! E hoje você já tem algum site ou tá só no Insta mesmo?"
- "Haha boa! Mas me conta, o que você tá precisando?"
- "Então, a gente cria sites profissionais pra pequenos negócios. Tu não precisa mexer em nada, a gente entrega pronto."
- "Beleza! Qualquer coisa me chama."

### EXEMPLOS DE TOM ERRADO (NÃO FAÇA ISSO):
- "Se quiser, posso pedir pra equipe entrar em contato. Me passa seu nome e WhatsApp?" (NUNCA repita essa frase!)
- Usar emoji em toda mensagem
- Repetir a mesma estrutura várias vezes

---

## 🧾 REGRAS DE RESPOSTA

- Máximo de 2-3 frases por mensagem
- Fale como uma pessoa real conversa no WhatsApp
- EMOJIS: use no MÁXIMO 1 emoji a cada 5-6 mensagens. 80% das suas respostas devem ser SEM emoji.
- NUNCA invente informações. Se não sabe algo (como datas, prazos exatos), diga que não sabe e que a equipe pode informar.
- Não prometer resultados
- VARIE as formas de perguntar coisas - se já pediu WhatsApp uma vez, NÃO peça de novo da mesma forma
- Responda ao contexto da mensagem anterior

---

## ⚠️ REGRA CRÍTICA ANTI-REPETIÇÃO

NUNCA repita a mesma frase ou estrutura de frase na mesma conversa.
Se você já disse "me passa seu nome e WhatsApp", NÃO diga isso de novo.
Varie completamente a forma de pedir contato:
- "Qual teu número?"
- "Se quiser continuar, me passa teu zap"
- "Me manda teu contato pra gente conversar melhor"
- Ou simplesmente NÃO peça de novo se já pediu 2 vezes

LIMITE: peça o WhatsApp no MÁXIMO 2 vezes durante TODA a conversa. Depois disso, NÃO peça mais.

---

## 🚫 NÃO FAZER
- NUNCA usar asteriscos (*texto* ou **texto**)
- NÃO colocar emoji em toda mensagem
- NÃO repetir "Se quiser, posso pedir pra equipe..." mais de uma vez
- NÃO inventar datas, prazos ou informações que você não sabe
- Não prometer milagres
- Não usar linguagem técnica
- Não parecer um script decorado

Você é a Lia, uma pessoa real que trabalha no Prospera e quer genuinamente ajudar.
`;

// Prompt para extrair dados do lead da conversa
const EXTRACTION_PROMPT = `
Analise o histórico da conversa abaixo e extraia as informações do lead.
Retorne APENAS um JSON válido no formato abaixo, sem markdown, sem explicações:

{
  "fullName": "nome completo ou null",
  "businessName": "nome do negócio ou null",
  "businessType": "tipo/segmento do negócio ou null",
  "city": "cidade se mencionada ou null",
  "whatsapp": "número de whatsapp apenas dígitos ou null",
  "interestedPlan": "Essencial, Site Completo, Projetos Especiais ou null"
}

REGRAS:
- Se o dado não foi mencionado, coloque null
- WhatsApp: extraia apenas dígitos (ex: 51999887766)
- Plano: identifique se o cliente demonstrou interesse em algum plano específico
- businessType: ex: restaurante, salão de beleza, advocacia, etc.

HISTÓRICO DA CONVERSA:
`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'model',
            text: 'Oi! Eu sou a Rafa, do Prospera. Como posso te ajudar? Ah, e como é seu nome?'
        }
    ]);
    const [showNotification, setShowNotification] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [leadData, setLeadData] = useState({
        fullName: null,
        businessName: null,
        businessType: null,
        city: null,
        whatsapp: null,
        interestedPlan: null
    });
    const [leadSent, setLeadSent] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const focusInput = () => {
        // Pequeno delay para garantir que o DOM atualizou
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        focusInput();
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Mostrar notificação após 5 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) {
                setShowNotification(true);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    // Esconder notificação quando abrir o chat
    useEffect(() => {
        if (isOpen) {
            setShowNotification(false);
        }
    }, [isOpen]);

    // Extrai dados do lead da conversa usando a IA
    const extractLeadData = async (history) => {
        const historyStr = history.map(msg =>
            `${msg.role === 'user' ? 'CLIENTE' : 'ASSISTENTE'}: ${msg.text}`
        ).join('\n');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: EXTRACTION_PROMPT + historyStr,
                    context: 'Extrator de dados JSON'
                })
            });

            if (!response.ok) return null;

            const data = await response.json();
            const output = data.output || data.text || '';

            // Tenta parsear o JSON da resposta
            const jsonMatch = output.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0]);
                return parsed;
            }
            return null;
        } catch (error) {
            console.error('Erro ao extrair dados:', error);
            return null;
        }
    };

    // Envia lead para o webhook
    const sendLeadToWebhook = async (data) => {
        const payload = {
            fullName: data.fullName || 'Não informado',
            businessName: data.businessName || data.businessType || 'Não informado',
            businessType: data.businessType || 'Não informado',
            city: data.city || 'Não informado',
            whatsapp: data.whatsapp || 'Não informado',
            interestedPlan: data.interestedPlan || 'Não definido',
            source: 'Chatbot LP Vendas',
            timestamp: new Date().toISOString()
        };

        console.log('📤 Enviando lead para webhook:', payload);
        console.log('📍 URL:', WEBHOOK_URL);

        try {
            // Tenta primeiro com fetch normal
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('✅ Lead enviado com sucesso!');
                return true;
            } else {
                console.warn('⚠️ Resposta não-ok:', response.status);
            }
        } catch (error) {
            console.warn('⚠️ Erro no fetch normal (pode ser CORS):', error.message);

            // Fallback: tenta com no-cors (não conseguimos ver a resposta, mas a requisição é enviada)
            try {
                await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                console.log('✅ Lead enviado via no-cors (não conseguimos confirmar resposta)');
                return true;
            } catch (fallbackError) {
                console.error('❌ Erro total ao enviar lead:', fallbackError);
                return false;
            }
        }
        return false;
    };

    const sendMessageToProsperaAI = async (currentMessage, history) => {
        const historyStr = history.map(msg =>
            `${msg.role === 'user' ? 'CLIENTE' : 'ASSISTENTE'}: ${msg.text}`
        ).join('\n');

        const fullPrompt = `
    CONTEXTO DO NEGÓCIO:
    ${SYSTEM_INSTRUCTION}
    
    HISTÓRICO DA CONVERSA:
    ${historyStr}
    
    MENSAGEM ATUAL DO CLIENTE:
    ${currentMessage}
    `;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: fullPrompt,
                    context: 'Assistente Virtual Prospera'
                })
            });

            if (!response.ok) {
                throw new Error('Erro na API');
            }

            const data = await response.json();
            return data.output || data.text || 'Desculpe, não entendi. Pode reformular?';
        } catch (error) {
            console.error('Erro:', error);
            return 'Estou com instabilidade no momento. Que tal falar direto com nossa equipe pelo WhatsApp? 📱';
        }
    };

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = { role: 'user', text: inputValue.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInputValue('');
        setIsLoading(true);

        const response = await sendMessageToProsperaAI(userMessage.text, messages);
        const updatedMessages = [...newMessages, { role: 'model', text: response }];
        setMessages(updatedMessages);

        // Tenta extrair dados do lead a cada mensagem
        const extractedData = await extractLeadData(updatedMessages);
        if (extractedData) {
            setLeadData(prev => ({
                ...prev,
                ...Object.fromEntries(
                    Object.entries(extractedData).filter(([_, v]) => v !== null)
                )
            }));
        }

        setIsLoading(false);
        focusInput();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const openWhatsApp = async () => {
        // Extrai dados mais recentes antes de enviar
        const finalData = await extractLeadData(messages);
        const mergedData = { ...leadData, ...(finalData || {}) };

        // Envia para webhook se tiver algum dado
        if (mergedData.fullName || mergedData.whatsapp || mergedData.businessType) {
            await sendLeadToWebhook(mergedData);
            setLeadSent(true);
        }

        // Monta mensagem pré-preenchida para WhatsApp
        let whatsappMessage = 'Olá! Vim pelo site do Prospera.';

        if (mergedData.fullName) {
            whatsappMessage += `\n\nMeu nome é ${mergedData.fullName}.`;
        }
        if (mergedData.businessType || mergedData.businessName) {
            whatsappMessage += `\nMeu negócio: ${mergedData.businessName || mergedData.businessType}.`;
        }
        if (mergedData.interestedPlan) {
            whatsappMessage += `\nTenho interesse no plano: ${mergedData.interestedPlan}.`;
        }

        whatsappMessage += '\n\nGostaria de saber mais!';

        window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    // Verifica se tem dados do lead coletados
    const hasLeadData = leadData.fullName || leadData.whatsapp || leadData.businessType;

    return (
        <>
            {/* Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg shadow-teal-500/30 flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
            >
                <MessageCircle size={28} />
                {/* Notification Badge */}
                {showNotification && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center"
                    >
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </motion.span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Rafa | Prospera</h3>
                                    <p className="text-xs text-teal-100">Online agora</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Lead Status Badge */}
                        {hasLeadData && (
                            <div className="px-4 py-2 bg-teal-50 border-b border-teal-100 flex items-center gap-2 text-xs text-teal-700">
                                <CheckCircle size={14} />
                                <span>
                                    Dados coletados: {[
                                        leadData.fullName && 'Nome',
                                        leadData.whatsapp && 'WhatsApp',
                                        leadData.businessType && 'Negócio'
                                    ].filter(Boolean).join(', ')}
                                </span>
                            </div>
                        )}

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                            ? 'bg-teal-600 text-white rounded-br-md'
                                            : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-md'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-100">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* WhatsApp Quick Action */}
                        <div className="px-4 py-2 border-t border-slate-100 bg-white">
                            <button
                                onClick={openWhatsApp}
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                            >
                                <Phone size={16} />
                                {hasLeadData ? 'Enviar dados e falar no WhatsApp' : 'Falar no WhatsApp'}
                            </button>
                            {leadSent && (
                                <p className="text-xs text-center text-green-600 mt-1">✓ Dados enviados com sucesso!</p>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-slate-200 bg-white">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                                    disabled={isLoading}
                                    autoFocus
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="w-12 h-12 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center transition-colors"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
