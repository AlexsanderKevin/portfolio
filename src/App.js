import BackgroundIlustration from './components/BackgroundIlustration/BackgroundIlustration';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection/IntroSection';
import SkillSection from './components/SkillSection/SkillSection';
import './styles/global.css'

function App() {
  return (
    <section id='body'>
      <BackgroundIlustration/>
      <Header/>
      <IntroSection/>
      <SkillSection/>
    </section>
  );
}

export default App;
