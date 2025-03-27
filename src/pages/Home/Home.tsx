import NavBar from "../../components/NavBar/NavBar"
import AboutSection from "./sections/AboutSection/AboutSection"
import Hero from "./sections/Hero/Hero"
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection"



const Home = () => {

    return (
      <>
        <NavBar />
        <Hero/>
        <AboutSection />
        <ProjectsSection />
      </>
    )
  }
  
  export default Home
  