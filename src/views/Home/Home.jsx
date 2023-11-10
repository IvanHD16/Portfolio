import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div>
      <div>
        <p>Hola, soy Ivan Hernández y este es mi portfolio</p>
      </div>
      <div>
        <p>Estudie en <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand&gad=1&gclid=CjwKCAiAxreqBhAxEiwAfGfndKn1yc5rp71UT4lLlELj1w5qbxtd87Ex10bqfHHhQPj6De02BVD52RoCeZYQAvD_BwE">Henry</a></p>
        <p>Aqui algunos proyectos realizados durante la cursada</p>
        <a href="https://foodier.onrender.com/" ><img src="foodier.png" alt="foodier" className='img-proyect' /></a>
      </div>
    </div>
  )
}
