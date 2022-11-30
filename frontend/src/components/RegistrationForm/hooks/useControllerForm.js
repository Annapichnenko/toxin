import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PORT } from "../../../consts";

export const useControllerForm = ({ setCreate, users }) => {
  const navigate = useNavigate();
  const validCount = 3;

  const [passwordType, setPasswordType] = useState("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [sex, setSex] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSexChange = (event) => {
    if (event.target.id === "radio-4") {
      setSex("male");
    } else if (event.target.id === "radio-3") {
      setSex("female");
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.length < validCount) {
      alert(`Длина имени должна быть не менее ${validCount} символов`);
    } else if (surname.length < 3) {
      alert("Длина фамилии должна быть не менее 3 символов");
    } else if (email.length < 8) {
      alert("Длина email должна быть не менее 8 символов");
    } else if (password.length < 8) {
      alert("Длина пароля должна быть больше 8 символов");
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Введите корректный email");
    } else if (users.find((user) => user.email === email)) {
      alert("user с таким email уже существует");
    } else {
      fetch(`${PORT}/api/registration`, {
        method: "post",
        body: JSON.stringify({ email, password, name, surname }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          localStorage.setItem("users", JSON.stringify(data));
        });
      setCreate(true);
      navigate("/");
    }
  };
  const handleIconClick = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else if (passwordType === "password") {
      setPasswordType("text");
    }
  };
  const handleClick = () => {
    navigate("/signin");
  };

  return {
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    handleSurnameChange,
    handleDateChange,
    handleSexChange,
    handleFormSubmit,
    handleIconClick,
    handleClick,
    date,
    email,
    password,
    surname,
    passwordType,
    name,
  };
};
