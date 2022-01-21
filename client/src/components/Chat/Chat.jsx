import React from 'react';

import {
  Stack,
  Box,
  Toolbar,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const Chat = () => {
  return (
    <Stack
      sx={{
        flexGrow: 1,
        bgcolor: 'red',
      }}
    >
      <Box
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        <Toolbar sx={{ columnGap: '1.2rem' }}>
          <Avatar
            alt="random"
            src="../../assets/avatars/boy-african-africa-child-47080.jpeg"
          />
          <Typography flexGrow={1}> Name </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </Stack>
  );
};

export default Chat;
