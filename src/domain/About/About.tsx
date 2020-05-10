import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import util from '@/utils/utilExample';

function About() {
  useEffect(() => {
    util();
  }, []);

  return (
    <main>
      <h1>About Page</h1>
      <Navigation />
    </main>
  );
}

export default About;
