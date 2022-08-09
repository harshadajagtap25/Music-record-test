import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const commingFrom = location.state?.from?.pathname || "/";
  const state = useSelector(state=>state)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginUser({ email, password })).then((r) => {
        if (r.type === LOGIN_SUCCESS) {
          navigate(commingFrom, { replace: true });
        }
      });
    }
    console.log(state)
  };
  
  return (
    <div style={{ width: "30%", justifyContent: "center", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        
        <HStack>
          <InputGroup>
            <InputLeftAddon children="Email" />
            <Input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </HStack>

        <HStack>
          <InputGroup>
            <InputLeftAddon children="Password" />
            <Input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </HStack>
        <Spacer/>
        
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
