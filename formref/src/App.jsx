import React, { useRef, useState } from "react";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFocus = (inputRef) => {
    inputRef.current.focus();
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (value.length < 3) {
          error = "Name must be at least 3 characters long";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "password":
        if (value.length < 6) {
          error = "Password must be at least 6 characters long";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Custom form submission logic
    if (!errors.name && !errors.email && !errors.password) {
      console.log("Form submitted", formData);
      // Perform further processing or send data to the server
    } else {
      console.log("Form has errors", errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus(nameRef)}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus(emailRef)}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          ref={passwordRef}
          value={formData.password}
          onChange={handleChange}
          onFocus={() => handleFocus(passwordRef)}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
