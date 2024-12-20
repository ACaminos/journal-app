import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components/';

const drawerWidth = 248;

export const JournalLayout = ( { children } ) => {
  return (
    <Box className='animate__animated animate__fadeIn animate__faster' sx={ { display: 'flex' } }>
        {/* Navbar drawerWidth */}
        <NavBar drawerWidth={ drawerWidth } />

        {/* Sidebar drawerWidth*/}
        <SideBar drawerWidth={ drawerWidth } />

        <Box component={'main'} sx={ { flexGrow : 1, p : 3 } }>
            <Toolbar/>

            { children }
        </Box>

    </Box>
  )
}