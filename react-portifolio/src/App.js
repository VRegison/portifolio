
import { Header } from './components/header/header'
import { Nav } from './components/nav/nav'
import { About } from './components/about/about'

import { Experience } from './components/experience/experience'
import { Services } from './components/services/services'
import { Portifolio } from './components/portifolio/portifolio'

import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'

import './app.css'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portifolio />
      <Contact />
      <Footer />


    </>

  );
}

export default App;
