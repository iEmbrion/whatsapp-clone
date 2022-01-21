import React from 'react';

import Contact from './Contact';

import { Box } from '@mui/material';

const ContactList = () => {
  const contactList = {
    'testing@hotmail.com': {
      name: 'Kallen',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing2@hotmail.com': {
      name: 'Kallen2',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing3@hotmail.com': {
      name: 'Kallen3',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing4@hotmail.com': {
      name: 'Kallen4',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing5@hotmail.com': {
      name: 'Kallen5',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing6@hotmail.com': {
      name: 'Kallen6',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing7@hotmail.com': {
      name: 'Kallen6',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing8@hotmail.com': {
      name: 'Kallen6',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing9@hotmail.com': {
      name: 'Kallen6',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
    'testing10@hotmail.com': {
      name: 'Kallen6',
      lastMessage: 'Otta T_T',
      lastTextTime: '3.16am',
    },
  };

  const contactClickHandler = isSelected => {};

  return (
    <Box sx={{ border: 'none', overflow: 'scroll' }}>
      {Object.entries(contactList).map(([key, value]) => (
        <Contact
          selected={false}
          key={key}
          email={key}
          name={value.name}
          lastMessage={value.lastMessage}
          lastTextTime={value.lastTextTime}
        />
      ))}
    </Box>
  );
};

export default ContactList;
