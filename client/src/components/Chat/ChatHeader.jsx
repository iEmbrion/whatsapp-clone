import { Toolbar, Avatar, Typography, IconButton, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

const ChatHeader = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        height: '4rem',
        maxHeight: '4rem',
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
  );
};

export default ChatHeader;
