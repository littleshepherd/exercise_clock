/**
 * Ejemplo de componente de tipo clase
 * con metodos del ciclo de vida de componentes
 */
import React, { Component } from 'react'

 class lifeCycleExample extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    

      render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
export default lifeCycleExample