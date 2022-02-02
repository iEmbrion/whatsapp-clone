import React from 'react';

import { Paper, Typography, Box, Avatar } from '@mui/material';

const ChatBody = ({ messages }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        overflowY: 'auto',
      }}
    >
      {/* 1 line of content */}
      <Box mt={1} mb={1}>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Avatar>FF</Avatar>
          </Box>
          <Paper
            elavation={5}
            sx={{
              display: 'flex',
              placeItems: 'center',
              maxWidth: '70%',
              p: 1,
              ml: 1,
            }}
          >
            <Box p={1}>
              <Typography color="white">
                TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting
                TestingTestingTestingTestingTestingTestingTestingTesting
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mt={1} mb={1}>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Avatar>FF</Avatar>
          </Box>
          <Paper
            elavation={5}
            sx={{
              display: 'flex',
              placeItems: 'center',
              maxWidth: '70%',
              p: 1,
              ml: 1,
            }}
          >
            <Box p={1}>
              <Typography color="white">
                TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting
                TestingTestingTestingTestingTestingTestingTestingTesting
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatBody;
