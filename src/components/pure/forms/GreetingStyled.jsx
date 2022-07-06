import React, {useState} from 'react';

const loggedStyle = {
    color: 'blue',
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold',
};


const GreetingStyled = (props) => {
    const [logged, setLogged] = useState(false);
    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
        <p>Hola, {props.name}</p>
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
