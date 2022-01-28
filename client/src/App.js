import { Box, Stack } from '@mui/material';

import SidebarHeader from './components/Sidebar/SidebarHeader';
import ChatHeader from './components/Chat/ChatHeader';
import Searchbar from './components/Sidebar/Searchbar';
import ContactList from './components/Sidebar/ContactList';
import ChatBody from './components/Chat/ChatBody';
import ChatFooter from './components/Chat/ChatFooter';

// import { useTheme, withTheme } from "@mui/styles";

function App() {
  const sideBarWidth = 25;

  return (
    <Box
      height="100vh"
      bgcolor="#AAAAAA"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bgcolor="red" width="80%" height="80%" overflow="hidden">
        {/* Headers */}
        <Box
          bgcolor="primary.main"
          display="flex"
          height="10%"
          alignItems="center"
        >
          <Box width={`${sideBarWidth}%`}>
            <SidebarHeader />
          </Box>
          <Box flexGrow="1">
            <ChatHeader />
          </Box>
        </Box>

        {/* Body */}
        <Box display="flex">
          <Stack height="90%" width={`${sideBarWidth}%`}>
            <Searchbar />
            <ContactList />
          </Stack>
          <Stack bgcolor="black" height="90%" flexGrow="1">
            <ChatBody />
            <ChatFooter />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
