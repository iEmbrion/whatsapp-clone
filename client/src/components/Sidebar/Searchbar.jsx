import React from 'react';

import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <Paper
      component="form"
      sx={{
        bgcolor: 'white',
        p: '0 0.8rem',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        borderBottom: 1,
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          borderRadius: 0,
          position: 'relative',
        }}
        placeholder="Search or start new chat"
        inputProps={{ 'aria-label': 'Search or start new chat' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
