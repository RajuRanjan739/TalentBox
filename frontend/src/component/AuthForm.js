import {
  Box,
  Button,
  Dialog,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const labelStyle = { marginTop: 1, marginBottom: 1 };
const AuthForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (data, signup) => {
    const res = await axios
      .post(`https://talent-backend-box.onrender.com/${signup ? "signup" : "login"}`, {
        name: isSignup ? inputs.name : "",
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const resData = await res.data;
    return resData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs, isSignup });
    sendRequest().then(() => navigate("/user"));
    console.log(inputs);
  };
  return (
    <div>
      <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
        <Typography variant="h4" textAlign={"center"}>
          {isSignup ? "Signup" : "Login"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            padding={6}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            width={400}
            margin={"auto"}
            alignContent={"center"}
          >
            {isSignup && (
              <>
                {" "}
                <FormLabel sx={labelStyle}>Name</FormLabel>
                <TextField
                  value={inputs.name}
                  onChange={handleChange}
                  margin="normal"
                  variant="standard"
                  type={"text"}
                  name="name"
                />{" "}
              </>
            )}
            <FormLabel sx={labelStyle}>Email</FormLabel>
            <TextField
              value={inputs.email}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              type={"email"}
              name="email"
            />
            <FormLabel sx={labelStyle}>Passord</FormLabel>
            <TextField
              value={inputs.password}
              onChange={handleChange}
              margin="normal"
              variant="standard"
              type={"password"}
              name="password"
            />
            <Button
              sx={{ mt: 2, borderRadius: 10, bgcolor: "gray" }}
              type="submit"
              fullWidth
              variant="contained"
            >
              {isSignup ? "Signup" : "Login"}
            </Button>
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
            >
              SWITCH To {isSignup ? "Login" : "Signup"}
            </Button>
          </Box>
        </form>
      </Dialog>
    </div>
  );
};

export default AuthForm;
