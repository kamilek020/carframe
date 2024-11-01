import React from 'react';
import Fullpage from '@fullpage/react-fullpage';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fullpage
      licenseKey="YOUR_LICENSE_KEY"
      scrollingSpeed={700}
      navigation
      navigationTooltips={['Home', 'Oferta', 'Cennik', 'O nas', 'Kontakt']}
      scrollOverflow={false} // Ustaw na false
      render={({ state, fullpageApi }) => (
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 min-h-screen">
          <Fullpage.Wrapper>
            <div className="section">
              <Hero fullpageApi={fullpageApi} /> {/* Przekazanie fullpageApi */}
            </div>
            <div className="section">
              <Listings />
            </div>
            <div className="section">
              <Pricing />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section">
              <Footer />
            </div>
          </Fullpage.Wrapper>
        </div>
      )}
    />
  );
};

export default App;
