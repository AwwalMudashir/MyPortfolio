import './App.css'
// import Display from './Display'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Skills from './components/SkillSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import BackToTopButton from './BackToTop'

function App() {

  return (
    <>
      <div className='hg'>
        <NavBar />
        <HeroSection />
      </div>
      <AboutSection />
      <Skills />
      <ProjectsSection/>
      <ContactSection />
      <Footer/>
      <BackToTopButton/>
      {/* <Display /> */}
    </>
  )
}

export default App
