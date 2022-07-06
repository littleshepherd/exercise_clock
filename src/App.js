import logo from './logo.svg';
import './App.css';

import ContactList from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/forms/GreetingStyled';
import ClockHook from './hooks/ClockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        {/* <ContactList></ContactList> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Julian"> */}
        {/* todo lo que hay aquí, es tratado como props.children */}
          {/* <h3>
            Contenido del props.children
          </h3> */}
        {/* </Ejemplo4> */}
        {/* <GreetingStyled></GreetingStyled> */}
        {/* <Clock></Clock> */}
        <ClockHook></ClockHook>
      </header>
    </div>
  );
}

export default App;
