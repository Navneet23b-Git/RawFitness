import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import TrainingProgrammes from './components/TrainingProgrammes';
import EliteCoaches from './components/EliteCoaches';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <TrainingProgrammes />
        <EliteCoaches />
      </main>
      <Footer />
    </>
  );
}

export default App;
