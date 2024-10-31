import React from 'react';
import Fullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fullpage
      licenseKey="YOUR_LICENSE_KEY" // Upewnij się, że masz swój klucz licencyjny
      scrollingSpeed={700}
      navigation
      navigationTooltips={['Home', 'Oferta', 'Cennik', 'O nas', 'Kontakt']}
      scrollOverflow={true}
      render={({ state, fullpageApi }) => {
        return (
          <Fullpage.Wrapper>
            <div className="section" id="hero">
              <Hero />
            </div>
            <div className="section" id="listings">
              <Listings />
            </div>
            <div className="section" id="pricing">
              <Pricing />
            </div>
            <div className="section" id="about">
              <About />
            </div>
            <div className="section" id="contact">
              <Footer />
            </div>
          </Fullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;