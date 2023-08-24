import axios from "axios";
import { useState } from "react";

const LoginPage = () => {
  const [log, setLog] = useState();
  const [token, setToken] = useState()
  const loginData = {
    phone: "085846132417",
    password: "654321",
  };

  const triggerLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .post("http://103.175.216.13:9090/api/v1/login", loginData)
      .then((response) => {
        // Handle successful response
        console.log("Login successful");
        setLog(response.data.Data);
        setToken(response.data.Data.token)
      })
      .catch((error) => {
        // Handle error
        console.error("Login failed");
        console.error("Error:", error);
        setLog(error);
      });
  };
  const triggerSchedule = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .get("http://103.175.216.13:9090/api/v1/donor/schedule/list/1", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((response) => {
        // Handle successful response
        console.log("Get Schedule successful\n", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Get Schedule failed");
        console.error("Error:", error);
        setLog(error);
      });
  };

  return (
    <>
      <h1>Login Axios</h1>
      <button
        onClick={(e) => {
          triggerLogin(e);
        }}
      >
        Trigger Login
      </button>
      <button
        onClick={(e) => {
          triggerSchedule(e);
        }}
      >
        Trigger Schedule
      </button>
      <div>Log Info:</div>
      <div>{log ? JSON.stringify(log) : "Nothing"}</div>
      <br />
      <div>TOKEN: {token ? token : "No Token"}</div>
    </>
  );
};

export default LoginPage;
