import { Paper, Box, Typography, Avatar } from '@mui/material';

const Contact = ({
  email,
  name,
  lastMessage,
  lastTextTime,
  selected,
  onClick,
}) => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        display: 'flex',
        gap: '1.2rem',
        padding: '1.2rem 1.8rem',
        bgcolor: selected ? '#DDDDDD' : 'white',
        cursor: 'pointer',
        '&:hover, &:active': {
          backgroundColor: '#DDDDDD',
        },
      }}
      onClick={onClick}
    >
      <Avatar sx={{ width: 48, height: 48 }} />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: '0.3rem',
        }}
      >
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2"> {lastMessage} </Typography>
      </Box>
      <Typography>{lastTextTime}</Typography>
    </Paper>
  );
};

export default Contact;
