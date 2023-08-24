import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { BSHandler } from "../../../utils/ApiBankSampah";

const LoginBankSampah = () => {
  const [log, setLog] = useState();
  const [token, setToken] = useState();
  // const baseUrl = "http://103-175-216-13.cprapid.com:8822/server";
  const baseUrl = "http://localhost:8822/server";
  const loginData = {
    username: "Mahrusnihwoi",
    password: "LoveYou3000",
  };
  const tokenFromCookie = Cookies.get("token");
  const tokenHeader = document.cookie;

  const triggerLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    axios
      .post(baseUrl + "/signin", loginData)
      .then((response) => {
        // Handle successful response
        console.log("Login successful", response.data);
        setLog(response.data);
        setToken(response.data.data.token);
        Cookies.set("token", response.data.data.token);
      })
      .catch((error) => {
        // Handle error
        console.error("Login failed");
        console.error("Error:", error);
        setLog(error);
      });
  };

  const getLayanan = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    BSHandler.get("/layanan", {
      withCredentials: true,
    })
      .then((res) => {
        console.log("Layanan Successfully get", res);
        console.log("Header", res);
      })
      .catch((err) => {
        console.log("Error cuy", err);
      });
  };

  useEffect(() => {
    console.log(tokenHeader);
  });

  return (
    <>
      <h1>Login Bank Sampah</h1>
      <button
        onClick={(e) => {
          triggerLogin(e);
        }}
      >
        Trigger Login
      </button>
      <button
        onClick={(e) => {
          getLayanan(e);
        }}
      >
        Trigger Layanan
      </button>
      <br />
      <div>Log Info:</div>
      <div>{log ? JSON.stringify(log) : "Nothing"}</div>
      <h2>Token</h2>
      <p>{token ? token : "No Token"}</p>
      <h2>Protected Content</h2>
      <p>
        Token from cookie: <br />
        {tokenFromCookie ? tokenFromCookie : "NO Token"}
      </p>
      <p></p>
    </>
  );
};

export default LoginBankSampah;
