import React, {useState}from 'react';



const Ejemplo1 = () => {
//    valorInicial para un contador
    const valorInicial = 0;
    // valor inicial para persona
    const personaInicial = {
        nombre: 'Julian',
        email: 'julian@gmail.com',
    }
 /* queremos que el valorInicial y personaInicial sean 
 parte del estado del componente para así poder gestionar su cambio
 y que éste se vea reflejado en la vista del componente
cosnt = [nombreVariable, funcionParaCambiar = useSate(valorInicial)]

 */
const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

const incrementarContador = () => {
    setContador(contador + 1);
}
const actualizarPersona = () => {
    setPersona ({
        nombre: 'Pepe',
        email: 'pepe@gmail.com',
    });
}

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={incrementarContador}>incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
};




export default Ejemplo1;