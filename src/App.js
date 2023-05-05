import { GlobalStorage } from './GlobalContext';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import './styles/global.css'

function App() {
  return (
    <GlobalStorage>
    <section id='body' className='container'>
      <Background/>
      <Header/>
      <IntroSection/>
      <SkillSection/>
      <Footer/>
    </section>
    </GlobalStorage>
  );
}

export default App;
