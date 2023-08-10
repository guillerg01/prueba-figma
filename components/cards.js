import './css/cards.css'

export const Card = ({icono , heading , para})=>{
return(
<div class="card">
  <div class="content">
    <p class="heading">{heading}
    </p><p class="para">{para}
    </p>
    <button class="btn">Leer Mas</button>
  </div>
</div>

)}