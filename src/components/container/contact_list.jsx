import React from 'react';
import {Contact} from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {
    const defaultContact = new Contact('Julian', 'Berrio','berri@gmail.com');
    return (
        <div>
            <ContactComponent Contact={defaultContact}></ContactComponent>
        </div>
    );
};





export default ContactList;
