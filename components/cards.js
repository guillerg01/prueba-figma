import './css/cards.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Card = ({icono , heading , para})=>{
  AOS.init();
return(
<div data-aos="fade-right" className="card">
  <div data-aos="fade-right" className="content">
    <p data-aos="fade-right" className="heading">{heading}
    </p>
    <p data-aos="fade-right" className="para">{para}
    </p>
    <button data-aos="fade-right" className="btn">Leer Mas</button>
  </div>
</div>

)}