import React from 'react';
import ChatHeader from './ChatHeader';

import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const Chat = () => {
  return (
    <Box
      bgcolor="white"
      sx={{
        borderLeft: '1px solid rgba(1,1,1, 0.2)',
        width: 'inherit',
        maxHeight: '100%',
        height: '100%',
      }}
    >
      <Stack>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </Stack>
    </Box>
  );
};

export default Chat;
