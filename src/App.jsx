import React,{useState, useEffect} from 'react'
import ElementosComunes from './components/ElementosComunes'
import Hero from './components/Hero';
import ContenedorSombra from './components/ContenedorSombra'
import Servicios from './components/Servicios';
import Formulario from './components/Formulario';
import Skeleton, { SkeletonTheme }from 'react-loading-skeleton';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Curriculum from './components/Curriculum';
import Portafolio from './components/Portafolio';


export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // setTimeout( () =>{
      setCargando(false)
    // },2000)  
  }, [cargando])

  if(cargando){
   return <div> 
         <SkeletonTheme color="#00a97f" highlightColor="#ffc107">
           <Skeleton height={100} />
          <Skeleton height={600} />
          
          </SkeletonTheme>;
          </div>
          }

  return (
    <>
   <Router>
   <ElementosComunes>
   <Route path="/" exact>
     <div className="animate__animated animate__fadeIn">
     <Hero/>
      <ContenedorSombra >
        <Servicios/>
        <Formulario/>
      </ContenedorSombra>
        
      </div>
      </Route>
      <Route  path="/curriculum" component={Curriculum} exact/>
      <Route  path="/portafolio" component={Portafolio} exact/>
      </ElementosComunes> 
      </Router>
    </>
  )
}
