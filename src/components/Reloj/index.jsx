import React,{useState,useEffect} from 'react'

export default function index() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout( () => {
            setHora(new Date().toLocaleTimeString())
        },1000)
        return () => {
           clearTimeout( () => {
               setHora()
           });
        }
    }, [hora])

    return (
        <div>
            <h3 style={style}>{hora}</h3>
        </div>
    )
}

const style = {
    'color':'#FFC108'
}