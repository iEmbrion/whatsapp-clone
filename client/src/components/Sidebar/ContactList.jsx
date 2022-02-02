import React, { useReducer } from 'react';
import { Box } from '@mui/material';
import SimpleBar from 'simplebar-react';

import contactListData from '../../dev-data/contactList';
import Contact from './Contact';

import '../../simplebar/simplebar.css';

const contactsReducer = (state, action) => {
  if (action.type === 'SELECT') {
    const selectedContactEmail = action.payload.email;
    const contacts = { ...state };

    //Set current selected contact
    contacts[selectedContactEmail].isSelected = true;

    //Update prev selected contact isSelected status
    for (const [key, value] of Object.entries(contacts)) {
      if (key !== selectedContactEmail && value.isSelected) {
        delete contacts[key].isSelected;
        break;
      }
    }
    return contacts;
  }
};

const ContactList = () => {
  const contactList = { ...contactListData };
  const [contactsState, dispatchContacts] = useReducer(
    contactsReducer,
    contactList
  );

  //To be deleted
  const selectContactHandler = email => {
    dispatchContacts({ type: 'SELECT', payload: { email } });
  };

  return (
    <Box
      sx={{
        border: 'none',
        // overflow: 'auto',
      }}
    >
      <SimpleBar forceVisible="y" autoHide={false}>
        {Object.entries(contactsState).map(([key, value]) => (
          <Contact
            selected={value.isSelected ? true : false}
            key={key}
            email={key}
            name={value.name}
            lastMessage={value.lastMessage}
            lastTextDate={value.lastTextTime}
            onClick={selectContactHandler.bind(null, key)}
          />
        ))}
      </SimpleBar>
    </Box>
  );
};

export default ContactList;
