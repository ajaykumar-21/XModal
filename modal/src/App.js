import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (!username || !email || !dob || !phone) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const today = new Date();
    const enteredDate = new Date(dob);

    if (enteredDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // Here you can perform further actions like submitting the form data
    // Reset the form
    setUsername("");
    setEmail("");
    setDob("");
    setPhone("");
    setIsOpen(false);
  };

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal}>Open Form</button>
      {isOpen && (
        <div className="modal-content" onClick={handleCloseModal}>
          <div className="modal-form" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Date of Birth"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
