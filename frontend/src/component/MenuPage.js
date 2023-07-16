import React from "react";
import { Box, Button, Typography } from "@mui/material";

const MenuPage = () => {
  return (
    <div>
      <Box padding={4} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"} fontWeight={"bold"}>
          Learn to code - for free.
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          padding={3}
          fontWeight={"bold"}
        >
          Build Projects.
        </Typography>
        <Typography
          variant="h4"
          textAlign={"center"}
          padding={2}
          fontWeight={"bold"}
        >
          Earn Certification.
        </Typography>
        <Typography variant="h6" textAlign={"center"} padding={2}>
          Since 2014 more than 40000 codecamp organised. Graduates got job after
          completing courses.
        </Typography>
        <Box display="flex" padding={5} margin="auto" justifyContent={"center"}>
          <Button
            variant="outlined"
            sx={{ margin: "auto", backgroundColor: "yellow", color: "black" }}
          >
            Get started (it's free)
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MenuPage;
