import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonies.css"

export default function Testimonies(){
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <p>Solo quiero agradecer de todo corazón a mi podólogo, el/la Dr./Dra. [Nombre completo del podólogo].
                 ¡Mis pies están más felices que nunca!
                 Su profesionalismo y atención me han ayudado muchísimo. Recomiendo a 
                 todos que visiten a un podólogo. ¡No se arrepentirán!</p>
            </div>
            <div>
              <p>Un millón de gracias a mi podólogo/a, el/la Dr./Dra. [Nombre completo del podólogo],
                 por cuidar mis pies como si fueran de oro. ¡Se lo recomiendo a tod@s!</p>
            </div>

            <div>
              <p>Un millón de gracias a mi podólogo/a, el/la Dr./Dra. [Nombre completo del podólogo],
                 por cuidar mis pies como si fueran de oro. ¡Se lo recomiendo a tod@s!</p>
            </div>
                        
          </Slider>
        </div>
      );
}