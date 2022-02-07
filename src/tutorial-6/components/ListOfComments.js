import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function ListOfComments(props) {
    return (
        <List sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            border: "#cfcece solid 1px",
            margin: "10px",
            padding: "0 10px"
        }}>
            <p>Отзывы:</p>
            {props.comments.map(item => {
                return <ListItem alignItems="flex-start" key={item.createdAt}>
                    <ListItemAvatar>
                        <Avatar>H</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.fullName} secondary={
                        <>
                            {item.text}
                        </>
                    }
                    />
                </ListItem>
            })}
        </List>
    );
}

export default ListOfComments;