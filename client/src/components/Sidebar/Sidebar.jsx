import SidebarHeader from './SidebarHeader';

import { Box } from '@mui/material';
import Searchbar from './Searchbar';
import ContactList from './ContactList';

const Sidebar = () => {
  return (
    <Box
      height="100%"
      width="25%"
      display="flex"
      flexDirection="column"
      bgcolor="white"
    >
      <SidebarHeader />
      <Searchbar />
      <ContactList />
    </Box>
  );
};

export default Sidebar;
