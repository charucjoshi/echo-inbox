import {Drawer } from '@mui/material';
import SideBarContent from './SideBarContent';

const SideBar = ({openDrawer}) => {
    return (
        <Drawer
            anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '64px',
                    width: 250,
                    background: '#303234',
                    border: 'none',
                    height: '100vh - 64px'
                }
            }}
        >
        <SideBarContent />
        </Drawer>
    );
};

export default SideBar;
