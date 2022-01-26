import { Box, Paper } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

// import { useTheme, withTheme } from "@mui/styles";

function App() {
  return (
    <Box
      height="100vh"
      bgcolor="#AAAAAA"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box height="80%" bgcolor="red" display="flex" overflow="hidden">
        <Sidebar />
        <Chat />
      </Box>
    </Box>
  );
}

export default App;
