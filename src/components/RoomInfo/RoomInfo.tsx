import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./style.css";

export default function AlignItemsList() {
    return (
        <List className='roominfo-container'>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp"
                        children={<MeetingRoomIcon sx={{ color: "primary.dark" }} />}
                        sx={{ bgcolor: "primary.light" }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            component="p"
                            variant="subtitle1"
                            color="text.primary"
                        >
                            Hotel Nickname
                        </Typography>
                    }
                    secondary={
                        <>
                            <React.Fragment>
                                <Typography
                                    component="div"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Ali Connors - Hotel
                                </Typography>
                            </React.Fragment>
                            <React.Fragment>
                                <Typography
                                    component="div"
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Arrival Date - Depature Date
                                </Typography>
                            </React.Fragment>
                        </>
                    }
                />
                <IconButton aria-label="Example">
                    <MoreVertIcon />
                </IconButton>
            </ListItem>
        </List>
    );
}