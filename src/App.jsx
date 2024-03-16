import './App.css'
import { Navbar } from './Navbar'
import { About } from './About'
import { Services } from './Services'
import Testimonies from './Testimonies'

function App() {
  
  return (
    <main>
      <Navbar/>
      
      <div className='panel-body'>
        <section id='about' className='section'>
          {/* <h2 className='section-title'>Hola!</h2> */}
          <About/>
        </section>
        
        <section id='services' className='section'>
          <h2 className='section-title'>Servicios</h2>
          
          <Services/>
        </section>
      </div>

      <section id='testimonies' className='section'>
          <h2 className='section-title'>Testimonios</h2>
          <Testimonies/>
      </section>
      
      <footer>
        <section className='contact-section'>
          <h2 className='contact-title'>Contacto</h2>
          <p>Si necesitas más información, no dudes en comunicarte por Whatsapp o por correo</p>
          <div className='contact-options'>
            <div className='whatsapp'>
              <a href='#'><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className='instagram'>
              <a href='#'><i className="fa-regular fa-envelope"></i></a>
            </div>
       
          </div>
        </section>
        <div className='copyright'>
          <p>&copy; 2023 DemianVelis. Todos los derechos reservados.</p>
        </div>
        
      </footer>
    </main>
    
  )
}

export default App
