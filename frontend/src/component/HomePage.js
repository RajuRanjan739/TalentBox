import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        fontFamily={"verdana"}
        textAlign="center"
        padding={2}
      >
        Welcome to freeCodeCamp.org
      </Typography>
      <Typography variant="h6" textAlign="center" padding={2}>
        "I have not failed. I've just found 10,000 ways
      </Typography>
      <Typography variant="h6" textAlign="center">
        that won't work" - Thomas
      </Typography>
      <Box margin={"auto"} display="flex" flexDirection={"column"} width="40%">
        <List>
          <ListItem
            sx={{
              bgcolor: "gray",
              color: "white",
              // textAlign: "center",
              margin: 1,
            }}
          >
            <ListItemText>
              (New) Responsive web design certification in "300 hours"
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              bgcolor: "gray",
              color: "white",
              // textAlign: "center",
              margin: 1,
            }}
          >
            <ListItemText>
              Javascript and Typescript certification in "300 hours"
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              bgcolor: "gray",
              color: "white",
              // textAlign: "center",
              margin: 1,
            }}
          >
            <ListItemText>
              Frontend library and framework certification in "300 hours"
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              bgcolor: "gray",
              color: "white",
              // textAlign: "center",
              margin: 1,
            }}
          >
            <ListItemText>
              Back End Development and APIs Certification in "300 hours"
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default HomePage;
