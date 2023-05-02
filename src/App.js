import { GlobalStorage } from './GlobalContext';
import BackgroundIlustration from './components/BackgroundIlustration/BackgroundIlustration';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import './styles/global.css'

function App() {
  return (
    <GlobalStorage>
    <section id='body' className='container'>
      <BackgroundIlustration/>
      <Header/>
      <IntroSection/>
      <SkillSection/>
      <Footer/>
    </section>
    </GlobalStorage>
  );
}

export default App;
