import {Button,styled, Dialog, Box, Typography, InputBase, TextField} from '@mui/material';
import {useState} from 'react';
import {Close, DeleteOutlined} from '@mui/icons-material';

//Dialog box that opens on clicking compose button
const dialogStyle = {
    height: '88.5%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px 10px 0 0',
    background: '#303234',
    color: '#FFFFFF'
};

//The header for the dialog box
const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#063010',
    '& > p': {
        font: 14,
        fontWeight: 600
    }
});

//The styled box for Reciever and Subject in the dialog box
const RecipientWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div':{
        color: '#FFFFFF',
        fontSize: 14,
        borderBottom: '1px solid #000000',
        marginTop: 10
    }
});

//Footer of the dialog box i.e. send and delete
const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 0,
    paddingRight: 15,
    paddingLeft: 10,
    alignItems: 'center',
    '& .MuiButtonBase-root':{
        color: '#fff'
    }
});

//Send button in the footer
const SendButton = styled(Button)({
    background: '#063010',
    borderRadius: 500,
    radius: 5,
    fontWeight: 500,
    textTransform: 'none',
    width: 100
});

//Render function
const ComposeMail = ({openDialog, setOpenDialog}) => {
    const config = {
        Host : "smtp.elasticemail.com",
            Username : process.env.REACT_APP_USERNAME, 
            Password : process.env.REACT_APP_PASSWORD,
            Port: 2525
    }
    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
    };
    const sendMail = (e) => {
        e.preventDefault();

        if(window.Email) {
            window.Email.send({
            ...config,
            To : data.to, 
            From : "ccjoshi07@gmail.com", 
            Subject : data.subject, 
            Body : data.body 
        }).then(
        message => alert(message)
        );
        }
        setOpenDialog(false);
    };
    const [data, setData] = useState({});
    const onValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    };
    return (
        <Dialog
            open={openDialog}
            PaperProps={{sx: dialogStyle}}
        >
        <Header>
            <Typography>New Message</Typography>
            <Close font='small' onClick={(e)=>closeComposeMail(e)} /> 
        </Header>
        <RecipientWrapper>
            <InputBase placeholder="Recipient" name="to" onChange={(e) => onValueChange(e)} />
            <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)}/>
        </RecipientWrapper>
        <TextField 
            name="body"
            multiline
            rows={23}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {border: 'none'},
                '& .MuiInputBase-input':{color: '#FFFFFF'}
            }}
            onChange={(e) => onValueChange(e)}
        />
        <Footer>
            <SendButton onClick={(e) => sendMail(e)}> Send </SendButton>           
            <DeleteOutlined onClick={() => setOpenDialog(false)}/>
        </Footer>
        </Dialog>
    )
};

export default ComposeMail;
