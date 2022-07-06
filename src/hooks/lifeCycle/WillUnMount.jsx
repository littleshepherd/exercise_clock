/**
 * Ejemplo de uso de método componentWillUnmount en componente clase 
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log("Comportamiento antes de que el componente desaparezca ");
    }
  render() {
    return (
      <div>            
        <h1>DidMount</h1>
      </div>
    )
  }
}



export const WillUnMountHook = () => {
    useEffect(() => {
        
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca ");

        };
    }, []);
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



