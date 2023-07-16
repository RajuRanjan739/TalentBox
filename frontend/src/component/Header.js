import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Link, useNavigate } from "react-router-dom";

const dummySearch = ["javascript", "c", "c++", "java"];

const Header = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState();

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Box>
            <Autocomplete
              disablePortal
              options={dummySearch}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  {...params}
                  label="Search courses"
                />
              )}
            />
          </Box>
          <Box
            // marginRight={"50%"}
            marginLeft={"15%"}
          >
            <Typography variant="h4"> freeCode Camp</Typography>
          </Box>
          <Box marginLeft={"auto"}>
            <Tabs
              onChange={(e, val) => setValue(val)}
              value={value}
              textColor="inherit"
            >
              <Tab to="/" LinkComponent={Link} label="Menu" />
              <Tab to="/signup" LinkComponent={Link} label="SignUp" />

              {/* <Tab to="/logout" LinkComponent={Link} label="Logout" /> */}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Box padding={4} margin={"auto"}>
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
          <Button variant="outlined" sx={{ margin: "auto", color: "black" }}>
            Get started (it's free)
          </Button>
        </Box>
      </Box> */}
    </div>
  );
};

export default Header;
