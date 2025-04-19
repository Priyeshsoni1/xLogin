import React, { useState } from "react";

export const FormPage = () => {
  const [showInvalid, setShowInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const formData = Array.from(form.entries()).reduce((acc, [key, value]) => {
      return { ...acc, [key]: value };
    }, {});
    if (formData.username == "user" && formData.password == "password") {
      setSuccess(true);
    } else {
      setShowInvalid(true);
    }
    console.log("Final Form Data:", formData);
  };
  return (
    <div>
      <h1>Login Page</h1>
      {showInvalid && !success && <p>Invalid username or password</p>}
      {!success && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                placeholder="username"
                name="username"
                id="username"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="password"
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            <div>
              <button type="Submit">Submit</button>
            </div>
          </div>{" "}
        </form>
      )}
      {success && <p>Welcome, user!</p>}
    </div>
  );
};
