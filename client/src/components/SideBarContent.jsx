import {Box, Button, styled, List, ListItem} from '@mui/material';
import {CreateOutlined} from '@mui/icons-material';
import {SIDEBAR_DATA} from '../config/sidebar.config';
const ComposeButton = styled(Button)({
    background: '#033003',
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
    textTransform: 'none',
    minWidth: 140,
});

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer'
    },
    '& > ul > li > svg':{
        marginRight: '20px'
    }
});

const SideBarContent = () => {
    return (
        <Container>
            <ComposeButton>
                <CreateOutlined />Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <ListItem style={{color: '#FFFFFF'}}>
                            <data.icon style={{color: '#FFFFFF'}}/>
                            {data.title} 
                        </ListItem>
                    ))
                }
            </List>
        </Container>
    )
};

export default SideBarContent;
