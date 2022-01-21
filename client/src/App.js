import { Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

// import { useTheme, withTheme } from "@mui/styles";

function App() {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: '#AAAAAA',
        padding: '2rem',
      }}
    >
      <Box
        sx={{
          width: '75%',
          height: '100%',
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Sidebar />
        <Chat />
      </Box>
    </Box>
  );
}

export default App;
