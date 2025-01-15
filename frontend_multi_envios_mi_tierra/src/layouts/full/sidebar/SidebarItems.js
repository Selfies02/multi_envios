import React from 'react';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { getMenuItems } from './MenuItems';
import { useAuth } from '../../../actions/authContext'; // Ajusta la ruta según tu estructura

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const { user } = useAuth();
  
  // Obtener los items del menú basados en los permisos del usuario
  const menuItems = getMenuItems(user?.permisos);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {menuItems.map((item) => {
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;