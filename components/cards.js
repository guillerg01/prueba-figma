import './css/cards.css'

export const Card = ({icono , heading , para})=>{
return(
<div className="card">
  <div className="content">
    <p className="heading">{heading}
    </p>
    <p className="para">{para}
    </p>
    <button className="btn">Leer Mas</button>
  </div>
</div>

)}