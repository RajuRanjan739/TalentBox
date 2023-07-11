import React from "react";
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

const dummySearch = ["javascript", "c", "c++", "java"];

const Header = () => {
  return (
    <div>
      <AppBar>
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
            <Tabs>
              <Tab label="Menu" />
              <Tab label="SignUp" />
              <Tab label="Login" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
