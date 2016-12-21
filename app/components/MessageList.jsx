import React, { Component } from 'react';
import { render } from 'react-dom';
import MessageCard from './MessageCard';

/*
    A react component can also be just a plain pure function that just returns JSX.
    This is a lower order component or a "dumb" component since it has no affect on application state or has any specifi logic.
    It justs renders with the properties it gets.
    It takes a list of messages and returns the result of mapping each of the message to a JSX-template.
*/
const MessageList = ({messages}) => { 

    // Map the messages in the array to:
    const messagesTemplates = messages.map( (message, index) => {
        
        // For each message in the array:
        return (
            <MessageCard key={index} title={`Name: ${message.firstname} ${message.lastname}`} text={message.body}/>
        );
    });

    return <div>{messagesTemplates}</div> 
}
   
export default MessageList;