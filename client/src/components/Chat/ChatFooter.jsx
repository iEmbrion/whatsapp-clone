import { useState } from 'react';
import { Box, InputBase, IconButton, Paper, Divider } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';

// import InputEmoji from 'react-input-emoji';

const ChatFooter = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ccc',
        width: '100%',
        height: '100%',
      }}
    >
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#5A5A5A',
          width: '95%',
          height: 40,
          borderRadius: '5px',
          px: 1,
          '& :hover': {
            bgcolor: '#666666',
          },
        }}
      >
        <IconButton>
          <AddCircleOutlineRoundedIcon sx={{ color: '#bdbdbd' }} />
        </IconButton>
        <InputBase
          value={message}
          onChange={handleChange}
          placeholder="Message"
          sx={{
            input: { color: '#CCCCCC' },
            flexGrow: 1,
            px: 2,
            borderRadius: 5,
            fontSize: 16,
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton>
          <InsertEmoticonIcon sx={{ color: '#bdbdbd' }} />
        </IconButton>
        <IconButton>
          <GifBoxOutlinedIcon sx={{ color: '#bdbdbd' }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatFooter;
