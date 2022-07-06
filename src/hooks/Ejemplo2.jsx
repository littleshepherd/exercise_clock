/**    
 * Ejemplo de use de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useEffect, useRef} from 'react';



const Ejemplo2 = () => {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable con un elemento 
    // del DOM del componente (vista HTML)

    const miRef = useRef();
    const incrementar1 = () => {
        setContador(contador + 1)
    }
    const incrementar2 = () => {
        setContador2(contador2 + 2)
    }
    /** 
     * Trabajamos con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar siempre un snippet de código
     * cada vez que hata un cambio en el estado de componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(()=>{
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando Refetencia a elemeto del DOM: ");
    //     console.log(miRef)
    // })

    /** 
     * ? caso 2: Ejecutar solo cuando cambie el contador1 
     */
    // useEffect(()=>{
    //     console.log("Cambio en el estado del contador 1");
    //     console.log("Mostrando Refetencia a elemeto del DOM: ");
    //     console.log(miRef)
    // }, [contador]);

     /** 
     * ? caso 2: Ejecutar solo cuando cambie el contador1 o el contador2
     */
      useEffect(()=>{
        console.log("Cambio en el estado del contador 1 o contador 2");
        console.log("Mostrando Refetencia a elemeto del DOM: ");
        console.log(miRef)
    }, [contador, contador2 ]);
    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>Contador 1: {contador}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemeto referenciado
            </h4>
            <div>
             <button onClick={incrementar1}>Incrementar contador 1</button>
             <button onClick={incrementar2}>Incrementar contador 2</button>

            </div>
            
        </div>
    );
};




export default Ejemplo2;
