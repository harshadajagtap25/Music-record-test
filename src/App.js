import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const state = useSelector((state) => state)
  const navigate = useNavigate();
console.log(state)
  return (
    <div className="App">
      {!isAuth?  <Button onClick={() => navigate("/login")}>Login</Button> : <div>Logged in</div> }
      <MainRoutes />
    </div>
  );
}

export default App;
