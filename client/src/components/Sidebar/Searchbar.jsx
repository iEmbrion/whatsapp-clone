import React from 'react';

import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        bgcolor: '#3F3F3F',
        p: '0 0.8rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
      }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{ color: '#bdbdbd' }} />
      </IconButton>
      <InputBase
        placeholder="Search"
        sx={{
          input: { color: '#CCCCCC' },
          flexGrow: 1,
          px: 2,
          borderRadius: 5,
          fontSize: 16,
          '&:active': {
            bgcolor: '#5A5A5A',
            borderRadius: 5,
          },
        }}
      />
    </Paper>
  );
};

export default Searchbar;
