import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Input, Button } from "antd";
import { FaUser, FaKey } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Index() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      const pattern = /^[A-Za-z0-9]{0,6}$/;
      const isValid = pattern.test(value);
      if (!isValid) return;
      setUsername(value);
    } else {
      const pattern = /^[A-Za-z0-9]{0,10}$/;
      const isValid = pattern.test(value);
      if (!isValid) return;
      setPassword(value);
    }
  };

  const onLogin = () => {
    if (!username) return popUpMessage("กรุณากรอกชื่อผู้ใช้");
    if (!password) return popUpMessage("กรุณากรอกรหัสผ่าน");
    navigate("/Home");
  };

  const popUpMessage = (message) => {
    Swal.fire({
      text: message,
      icon: "warning",
      showConfirmButton: true,
      confirmButtonColor: "#70ad47",
      confirmButtonText: "ยืนยัน",
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#25396f",
              fontSize: "1rem",
              fontWeight: "bold",
              lineHeight: "150%",
              textAlign: "center",
            }}
          >
            My Project
          </span>
          <span
            style={{
              color: "#25396f",
              fontSize: "0.75rem",
              fontWeight: "bold",
              lineHeight: "150%",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Version 1.0.0
          </span>
          <Input
            name="username"
            prefix={<FaUser />}
            placeholder="User Name"
            style={{ marginBottom: "5px" }}
            onChange={(e) => onChangeInput(e)}
            value={username}
          ></Input>
          <Input.Password
            name="password"
            prefix={<FaKey />}
            placeholder="Password"
            style={{ marginBottom: "15px" }}
            onChange={(e) => onChangeInput(e)}
            value={password}
          ></Input.Password>
          <Button onClick={() => onLogin()}>Login</Button>
        </div>
      </Card>
    </div>
  );
}
