import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import hand from '../../icons/hand.svg';


export default function Header() {
  
  const [animacion, setAnimacion] = useState(false);


const handleClick = () => { setAnimacion(!animacion)};

    return (
      <>
        <header>
        
          <h1 className="animate__animated animate__backInLeft animate__delay-1s">
            Desarrollador Web<span> freelancer </span><img src={hand} alt="hand" className={ animacion ? "animate__animated animate__wobble animate__repeat-5	" : null} onClick={handleClick} />
          </h1>
        </header>
        <Nav/>
      </>
    );
}
