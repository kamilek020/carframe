import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Section = ({ children }) => (
  <div style={{ textAlign: 'center', padding: '100px 0' }}>
    {children}
  </div>
);

const App = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section>
              <h1>Section 1</h1>
              <button onClick={() => fullpageApi.moveSectionDown()}>Next</button>
            </Section>
            <Section>
              <h1>Section 2</h1>
              <button onClick={() => fullpageApi.moveSectionDown()}>Next</button>
            </Section>
            <Section>
              <h1>Section 3</h1>
            </Section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;