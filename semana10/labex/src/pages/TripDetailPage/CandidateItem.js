import React from 'react'
import { ListItem, IconButton, ListItemText, ListItemSecondaryAction, } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import axios from 'axios';

const CandidateItem = (props) => {
    
    const approveCandidate = () => {
      props.decideCandidate(true, props.candidate.id)  
    }

    const rejectCandidate = () => { 
        props.decideCandidate(false, props.candidate.id) 
      }

    return <ListItem>
        <ListItemText
            primary={props.candidate.name}               
        />
        <ListItemSecondaryAction>
            <IconButton onClick={approveCandidate}>
            <ThumbUpIcon />
            </IconButton>
        <IconButton onClick={rejectCandidate}>
            <ThumbDownIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

export default CandidateItem


