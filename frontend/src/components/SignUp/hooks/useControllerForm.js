import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PORT } from "../../../consts";

export const useControllerForm = () => {
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickRec = () => {
    navigate("/registration");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      fetch(`${PORT}/api/login`, {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.message) {
            alert(data.message);
          } else {
            localStorage.setItem("users", JSON.stringify(data));
            navigate("/");
          }
        });
    } else {
      alert("Введите корректный email");
    }
  };
  const handleIconClick = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };

  return {
    handleFormSubmit,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    passwordType,
    handleIconClick,
    handleClickRec,
  };
};
