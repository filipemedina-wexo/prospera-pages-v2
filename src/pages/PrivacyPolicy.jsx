import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 py-4">
                <div className="container mx-auto px-4">
                    <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
                        <ArrowLeft size={20} />
                        <span>Voltar ao site</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-800 mb-8">Política de Privacidade</h1>

                <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
                    <p className="text-sm text-slate-500">Última atualização: Dezembro de 2024</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">1. Introdução</h2>
                        <p>
                            O Prospera está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como
                            coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">2. Informações que Coletamos</h2>
                        <p>Podemos coletar as seguintes informações:</p>

                        <h3 className="text-xl font-medium text-slate-700">2.1 Informações fornecidas por você:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Nome completo</li>
                            <li>Número de telefone/WhatsApp</li>
                            <li>Endereço de e-mail</li>
                            <li>Nome e tipo do seu negócio</li>
                            <li>Informações do briefing do projeto</li>
                            <li>Conteúdo para o site (textos, imagens, logotipos)</li>
                        </ul>

                        <h3 className="text-xl font-medium text-slate-700">2.2 Informações coletadas automaticamente:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Endereço IP</li>
                            <li>Tipo de navegador</li>
                            <li>Páginas visitadas e tempo de permanência</li>
                            <li>Dados de interação com o chatbot</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">3. Como Usamos suas Informações</h2>
                        <p>Utilizamos suas informações para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Desenvolver e entregar o projeto contratado</li>
                            <li>Entrar em contato sobre o andamento do seu projeto</li>
                            <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
                            <li>Melhorar nossos produtos e serviços</li>
                            <li>Cumprir obrigações legais</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">4. Compartilhamento de Dados</h2>
                        <p>
                            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.
                            Podemos compartilhar dados apenas nas seguintes situações:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Com prestadores de serviço essenciais (hospedagem, registro de domínio)</li>
                            <li>Quando exigido por lei ou ordem judicial</li>
                            <li>Para proteger nossos direitos legais</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">5. Armazenamento e Segurança</h2>
                        <p>
                            Suas informações são armazenadas em servidores seguros e protegidas por medidas técnicas e organizacionais
                            adequadas contra acesso não autorizado, alteração ou destruição.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Utilizamos conexões criptografadas (HTTPS)</li>
                            <li>Acesso restrito apenas a funcionários autorizados</li>
                            <li>Backups regulares dos dados</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">6. Cookies e Tecnologias Similares</h2>
                        <p>
                            Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência.
                            Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">7. Seus Direitos (LGPD)</h2>
                        <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Acesso:</strong> Solicitar uma cópia dos seus dados pessoais</li>
                            <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou incorretos</li>
                            <li><strong>Exclusão:</strong> Solicitar a exclusão dos seus dados pessoais</li>
                            <li><strong>Portabilidade:</strong> Solicitar a transferência dos seus dados para outro serviço</li>
                            <li><strong>Revogação:</strong> Revogar o consentimento dado anteriormente</li>
                        </ul>
                        <p>
                            Para exercer qualquer um desses direitos, entre em contato conosco pelos canais indicados abaixo.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">8. Retenção de Dados</h2>
                        <p>
                            Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política,
                            ou conforme exigido por lei. Após o encerramento do projeto, podemos manter os dados por até 5 anos
                            para fins de garantia e eventual suporte.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">9. Alterações nesta Política</h2>
                        <p>
                            Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente.
                            Alterações significativas serão comunicadas através dos nossos canais oficiais.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-800">10. Contato</h2>
                        <p>
                            Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
                        </p>
                        <ul className="list-none space-y-1">
                            <li><strong>WhatsApp:</strong> (51) 99777-0870</li>
                            <li><strong>E-mail:</strong> contato@prospera.com.br</li>
                            <li><strong>Instagram:</strong> @useprospera.oficial</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
                        <ArrowLeft size={20} />
                        <span>Voltar ao site</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
