import { Box, Stack, Paper, Divider } from '@mui/material';

import GroupBar from './components/Group/GroupBar';
import SidebarHeader from './components/Sidebar/SidebarHeader';
import ChatHeader from './components/Chat/ChatHeader';
import Searchbar from './components/Sidebar/Searchbar';
import ContactList from './components/Sidebar/ContactList';
import ChatBody from './components/Chat/ChatBody';
import ChatFooter from './components/Chat/ChatFooter';

function App() {
  const sideBarWidth = 30;

  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'primary.dark',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elavation={12}
        sx={{ width: '85%', height: '80%', overflow: 'hidden', boxShadow: 5 }}
      >
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
          <Box sx={{ width: '70%' }}>
            <ChatHeader />
          </Box>
        </Box>

        {/* Body */}
        <Box
          sx={{ display: 'flex', height: '90%', bgcolor: '#424242' }}
          display="flex"
          flexGrow="1"
        >
          {/* Group */}
          <Box sx={{ width: '5%', bgcolor: '#3F3F3F' }}>
            <GroupBar />
          </Box>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            light={true}
          />

          <Stack width={`${sideBarWidth - 5}%`} overflow="hidden">
            <Searchbar />
            <Divider variant="middle" light={true} />
            <ContactList />
          </Stack>
          <Stack bgcolor="#4A4A4A">
            <Box height="90%">
              <ChatBody />
            </Box>
            <Box height="10%">
              <ChatFooter />
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
