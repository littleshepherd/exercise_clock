/**
 * Ejemplo de uso de método del
 * ciclo de vida en componente clase y el hook de ciclo de vida
 * en el componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }, []);
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}




