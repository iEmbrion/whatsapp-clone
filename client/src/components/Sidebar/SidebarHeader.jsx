import React from 'react';

import { Avatar, IconButton, Toolbar, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
const SidebarHeader = () => {
  return (
    <Box bgcolor="primary.main" height="12%" overflow="hidden">
      <Toolbar sx={{ columnGap: '0.8rem' }}>
        <Box flexGrow={1}>
          <Avatar
            alt="random"
            src="../../assets/avatars/boy-african-africa-child-47080.jpeg"
          />
        </Box>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </Box>
  );
};

export default SidebarHeader;
