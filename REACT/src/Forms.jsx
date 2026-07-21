import { useState } from "react";

function Forms() {
  const [User, SetUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    gender: "",
    skills: ""
  });

  const [submittedUser, setSubmittedUser] = useState(null);

  const change = (e) => {
    SetUser({
      ...User,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save submitted data
    setSubmittedUser(User);

    alert("Form Submitted");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Forms</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={User.name}
          onChange={change}
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={User.email}
          onChange={change}
        />
        <br /><br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={User.password}
          onChange={change}
        />
        <br /><br />

        <label>Phone:</label>
        <input
          type="number"
          name="phoneno"
          value={User.phoneno}
          onChange={change}
        />
        <br /><br />

        <label>Gender:</label>

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={User.gender === "Male"}
          onChange={change}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={User.gender === "Female"}
          onChange={change}
        /> Female

        <br /><br />

        <label>Skills:</label>
        <select
          name="skills"
          value={User.skills}
          onChange={change}
        >
          <option value="">Select Skill</option>
          <option value="React">React</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JavaScript</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted details */}
      {submittedUser && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>Submitted Details</h2>

          <p><b>Name:</b> {submittedUser.name}</p>
          <p><b>Email:</b> {submittedUser.email}</p>
          <p><b>Password:</b> {submittedUser.password}</p>
          <p><b>Phone:</b> {submittedUser.phoneno}</p>
          <p><b>Gender:</b> {submittedUser.gender}</p>
          <p><b>Skill:</b> {submittedUser.skills}</p>
        </div>
      )}
    </div>
  );
}

export default Forms;