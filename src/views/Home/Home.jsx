import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div>
      <div className='cont-presentacion'>
        <div>
          <p>Hola, soy Ivan Hernández y este es mi portfolio</p>
          <img src="20231023_181507.jpg" alt="yo" className='img-yo' />
        </div>
        <div>
          <a href="https://github.com/IvanHD16"><img className='img-contact' src="https://foundations.projectpythia.org/_images/GitHub-logo.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/ivan-hernandez-desivo/"><img className='img-contact' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1024px-LinkedIn_Logo.svg.png" alt="linkedin" /></a>
        </div>
      </div>
      <div>
        <p>Estudie en <a href="https://www.soyhenry.com/?utm_source=google&utm_medium=cpc&utm_campaign=GADS_SEARCH_ARG_BRAND&utm_content=brand&gad=1&gclid=CjwKCAiAxreqBhAxEiwAfGfndKn1yc5rp71UT4lLlELj1w5qbxtd87Ex10bqfHHhQPj6De02BVD52RoCeZYQAvD_BwE"><img className='img-henry' src="https://assets.soyhenry.com/henry-landing/assets/Henry/logo.png" alt="henry" /></a></p>
        <p>Aqui algunos proyectos realizados durante la cursada</p>
        <a href="https://foodier.onrender.com/" ><img src="foodier.png" alt="foodier" className='img-proyect' /></a>
      </div>
    </div>
  )
}
