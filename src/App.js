import { GlobalStorage } from './GlobalContext';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IntroSection from './components/MainSection/IntroSection/IntroSection';
import AboutSection from './components/MainSection/AboutSection/AboutSection';
import './styles/global.css'

function App() {
  return (
    <GlobalStorage>
    <section id='body' className='container'>
      <Background/>
      <Header/>
      <IntroSection/>
      <AboutSection/>
      <Footer/>
    </section>
    </GlobalStorage>
  );
}

export default App;
