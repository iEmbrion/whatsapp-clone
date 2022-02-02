import { Box, Avatar, IconButton } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const GroupBar = () => {
  const iconButtonStyle = {
    bgcolor: 'primary.dark',
    color: '#BDBDBD',
    '&:hover': { bgcolor: 'primary.main' },
    transition: 'all .3s',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        pt: 2,
        height: '100%',
      }}
    >
      <Avatar>SX</Avatar>
      <IconButton size="large" sx={iconButtonStyle}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default GroupBar;
