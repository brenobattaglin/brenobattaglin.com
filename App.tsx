import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/About';
import { WorkList } from './components/WorkList';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-white selection:text-black transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="relative z-10">
        <Hero />
        <WorkList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;