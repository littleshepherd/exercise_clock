import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class'


const ContactComponent = ({Contact}) => {
    const [connected, setconnected] = useState(false);
    const connectedState = () => {
       setconnected(!connected);
    }
    return (
        <div>
            <h1>Name: {Contact.name} {Contact.lastName}</h1>
            <p>Email: {Contact.email}</p>
            <p>This contact is: {connected ? 'Connected' : 'Disconnected'}</p>
            <button type="button" onClick={connectedState}>{Contact.connected ? 'Desconectar' : 'Conectar'}</button>
        </div>
    );
};


ContactComponent.propTypes = {
    Contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
