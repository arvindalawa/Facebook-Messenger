import React,{forwardRef} from 'react'
import{Card,CardContent,Typography} from '@mui/material';
import './Message.css';
const Message=forwardRef(({message,userName},ref) =>{
    const isUser=userName===message.userName;
  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? "message_userCard":"message_guestCard"}>
            <CardContent>
            <Typography color="black" variant="h5" component="h2">{!isUser && `${message.userName ||"Unknown User"} : `} {message.message}</Typography>
            </CardContent>
        </Card>
        <h2></h2>
        
    </div>
  )
})

export default Message