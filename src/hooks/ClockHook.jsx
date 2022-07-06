import React, { useState, useEffect} from 'react';

const ClockHook = (props) => {
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'julian',
        apellidos: 'Berrio'
    };
 
    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'julian',
        apellidos: 'Berrio'
    });
    const [timerID, setTimerID] = useState();

    // const previous = usePrevious(state)

    useEffect(() => {
        setTimerID(setInterval(() => tick(), 1000));
        return () => {
            setTimerID(clearInterval);

        };
            
        
    },[]);
    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {state.nombre} {state.apellidos}
            </h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );

    function tick () {

        setState((previous)=>{
            

            const edad = previous.edad + 1;
            
            console.log(previous)
            return{
                ...previous,
                fecha: new Date(),
                edad
            }
            
         });
         
    };
   

}

export default ClockHook;
