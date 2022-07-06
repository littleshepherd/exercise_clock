/**
 * Ejemplo hooks del useState y useContext
 */
import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente1
 * dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
 const miContexto = React.createContext(null);

const Componente1 = () => {
    //Inicializamos un estado vacio que va a rellenarse con los
    //datos del contexto del padre

    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
};

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>            
        </div>
    );
};


const MiComponenteConContexto = () => {
    const estadoInicial = {
        token: 1234567,
        sesion: 1
    }
    //creamos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setsessionData(
            {
                token: 123456789,
                sesion: sessionData.sesion +1 
            }
        );
    }
    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiza, los componentes de aquí tambien lo actualizan */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    );
}









export default MiComponenteConContexto;
