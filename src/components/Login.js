import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Button } from "react-bootstrap";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const loginWithFacebook = async (data) => {
    if (data && data.accessToken) {
      console.log(data.accessToken);
      const res = await fetch(
        `http://localhost:5000/auth/login/facebook?token=${data.accessToken}`
      );
      if (res.ok) {
        const data2 = await res.json();
        console.log(data2);
        const user = data2.data;
        const token = data2.token;
        props.setUser(user);
        localStorage.setItem("token", data2.token);
      } else {
        console.log(res);
      }
    }
  };

  const loginWithEmail = async (email, password) => {
    if (!email || !password) {
      console.log("Need email and password");
      return;
    }
    const res = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data2 = await res.json();
      console.log(data2);
      const user = data2.data.user;
      const token = data2.data.token;
      props.setUser(user);
      localStorage.setItem("token", data2.token);
    } else {
      console.log(res);
    }
  };

  return (
    <div>
      <Button variant="danger" onClick={() => setOpen(false)}>
        Close
      </Button>
      <h1>Login</h1>
      <br />
      <div>
        Email:{" "}
        <input
          value={credentials.email}
          type="text"
          placeholder="Please enter your e-mail address"
          onChange={(event) =>
            setCredentials({
              email: event.target.value,
              password: credentials.password,
            })
          }
        />
      </div>
      <div>
        Password:{" "}
        <input
          value={credentials.password}
          type="password"
          placeholder="enter your password"
          onChange={(event) =>
            setCredentials({
              email: credentials.email,
              password: event.target.value,
            })
          }
        />
      </div>
      <Button variant="primary">Log in!</Button>

      <br />
      <FacebookLogin
        appId="279947303122440"
        autoLoad={false}
        fields="name,email,picture"
        callback={loginWithFacebook}
      />
    </div>
  );
};

export default Login;
