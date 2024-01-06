import {AppBar, Toolbar, styled, InputBase, Box} from '@mui/material';
import {Menu as MenuIcon, Search, Tune,AccountCircleOutlined, HelpOutlined, SettingsOutlined} from '@mui/icons-material';
import echoInboxLogo from './logo.png'; 
const StyledAppBar = styled(AppBar)({
    background: '#303234',
    boxShadow: 'none',
    position: 'fixed',
});

const SearchWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 430,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    borderRadius: 8,
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div':{
        width: '100%',
        padding: '100px 10px',
        display: 'flex',
        alignItems: 'center'
    }
});

const StyledInputBase = styled(InputBase)({ 
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center'    
});

const IconsWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'end',
    '& > svg':{
        margin: 20
    }
});
const Header = ({toggleDrawer}) => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
        
                <img src={echoInboxLogo} alt="logo" style={{height: 40, widht: 40, marginRight: 10}}/>
                <MenuIcon cursor='pointer' onClick={toggleDrawer}/> 
                <SearchWrapper>
                    <Search />
                    <StyledInputBase 
                        placeholder="What's on your mind?"
                    />
                    <Tune />
                </SearchWrapper>
                <IconsWrapper>
                    <SettingsOutlined /> 
                    <HelpOutlined />
                    <AccountCircleOutlined />
                </IconsWrapper>
            </Toolbar>
        </StyledAppBar>
    );

};

export default Header;
