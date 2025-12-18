import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import ProblemStatement from '@/components/ProblemStatement.jsx';
import WhatYouReceive from '@/components/WhatYouReceive.jsx';
import Transformation from '@/components/Transformation.jsx';
import HowItWorks from '@/components/HowItWorks.jsx';
import Portfolio from '@/components/Portfolio.jsx';
import Upgrades from '@/components/Upgrades.jsx';
import Pricing from '@/components/Pricing.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import FAQ from '@/components/FAQ.jsx';
import WizardContact from '@/components/WizardContact.jsx';
import Footer from '@/components/Footer.jsx';
import Chatbot from '@/components/Chatbot.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedUpgrades, setSelectedUpgrades] = useState([]);

  return (
    <>
      <Helmet>
        <title>Prospera - Seu negócio pronto para prosperar online</title>
        <meta name="description" content="Tenha sua página profissional feita por especialistas. Design premium, copy persuasiva e tudo pronto para você vender." />
        <link rel="icon" type="image/png" href="https://horizons-cdn.hostinger.com/836a3bcf-4566-4dea-b476-99ce52484f28/0c64d83e8e5b3ca3e9c13746ec765490.png" />
      </Helmet>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Header />
        <main>
          <Hero />
          <ProblemStatement />
          <WhatYouReceive />
          <Transformation />
          <HowItWorks />
          <Portfolio />
          <Pricing
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
          <Upgrades
            selectedUpgrades={selectedUpgrades}
            setSelectedUpgrades={setSelectedUpgrades}
          />
          <Testimonials />
          <FAQ />
          <WizardContact
            selectedPlan={selectedPlan}
            selectedUpgrades={selectedUpgrades}
          />
        </main>
        <Footer />
        <Chatbot />
        <Toaster />
      </div>
    </>
  );
}

export default App;
