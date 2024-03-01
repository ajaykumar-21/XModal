import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [dob, setDob] = useState("");
  // const [phone, setPhone] = useState("");

  const [obj, setObj] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!obj.email.match(emailRegex)) {
      alert("Invalid email. Please check your email address.");
    }

    if (obj.phone.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }

    if (new Date(obj.dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    }

    setObj({ username: "", email: "", phone: "", dob: "" });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
  }

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal-content" onClick={handleCloseModal}>
          <div className="modal-form" onClick={(e) => e.stopPropagation()}>
            <h1>Fill details</h1>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              // placeholder="Username"
              id="username"
              value={obj.username}
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              // placeholder="Email"
              id="email"
              value={obj.email}
              onChange={handleChange}
            />
           <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              // placeholder="Date of Birth"
              id="dob"
              value={obj.dob}
              onChange={handleChange}
            />
             <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              // placeholder="Phone"
              id="phone"
              value={obj.phone}
              onChange={handleChange}
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
