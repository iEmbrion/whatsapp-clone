import SidebarHeader from './SidebarHeader';

import { Stack } from '@mui/material';
import Searchbar from './Searchbar';
import ContactList from './ContactList';

const Sidebar = () => {
  return (
    <Stack
      sx={{
        width: 1 / 4,
        bgcolor: 'white',
      }}
    >
      <SidebarHeader />
      <Searchbar />
      <ContactList />
    </Stack>
  );
};

export default Sidebar;
