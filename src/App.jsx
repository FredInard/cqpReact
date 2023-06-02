import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Title from './components/Title'


function App() {
 

  return (
    <>
   
      < Title />
      <div className='box'>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2022/07/netflix-the-witcher-3.jpg.webp"
                  name="Géralt de Rive"
                  descrip="Geralt de Riv en polonais : Geralt z Rivii, aussi connu sous le nom de Loup blanc est un sorceleur."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/05/the-witcher-3-ciri.jpg"
                  name="Ciri"
                  descrip="Ciri est uns sorceleuse."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg"
                  name="Jaskier"
                  descrip="Ciri est un Barde."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg"
                  name="Jaskier"
                  descrip="Ciri est un Barde."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg"
                  name="Jaskier"
                  descrip="Ciri est un Barde."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg"
                  name="Jaskier"
                  descrip="Ciri est un Barde."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg"
                  name="Jaskier"
                  descrip="Ciri est un Barde."
          />
        </div>
        <div className='box2'> 
          < Cards img="https://www.tomsguide.fr/content/uploads/sites/2/2020/05/the-witcher-3-ciri.jpg"
                  name="Ciri"
                  descrip="Ciri est uns sorceleuse."
          />
        </div>
      </div>
   
    </>
  )
}

export default App
