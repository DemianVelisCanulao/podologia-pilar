import { useState } from 'react';
import './Services.css';

export function Services() {
  const [isHover, setIsHover] = useState(-1);

  const services = {
    service_1:{
      id: "1",
      title: "Tratamiento de pie diabetico",
      for_whom: "Personas con diabetes, especialmente con riesgo de complicaciones.",
      img: "/pies.jpeg",
      what_it_offer: [
        {offer: "Prevenir problemas graves en pies."},
        {offer: "Mejorar calidad de vida."},
        {offer: "Reducir riesgo de amputación."},
      ]
    },
    service_2: {
      id: "2",
      title: "Tratamiento de uña encarnada",
      for_whom: "Personas con diabetes, especialmente con riesgo de complicaciones.",
      img: "/Pies_2.jpeg",
      what_it_offer: [
        {offer: "Técnica especializada."},
        {offer: "Alivio inmediato."},
        {offer: "Prevención de futuras complicaciones."},
        {offer: "Infecciones o secreción purulenta."},
      ]
    }
  }
  
  const handleMouseEnter = (index) => setIsHover(index);
  const handleMouseLeave = () => setIsHover(-1);
  
  return( 
    <div className="services-container">
      {Object.keys(services).map((keyService, index) => (
        
        <div key={services[keyService].id} className='service-box' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
            <div className='service-img'>
              <img src={services[keyService].img} alt="" className={isHover == index ? 'hovered-img' : 'bandw-image'}/>
            </div>
            <div className='service-description'>
              <h3>{services[keyService].title}</h3>
              <h4>¿Para quién?</h4>
              <p>{services[keyService].for_whom}</p>
              <h4>¿Qué ofrece?</h4>
              {/* {services[keyService].what_it_offer.map((offer) => (
                <li key={offer}>{offer}</li>
              ))} */}
            </div>
        </div>
        
      ))}
    </div>
  );
  
}
