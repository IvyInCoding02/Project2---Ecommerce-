import React from "react";
import { useState } from "react";
import { authService } from "../../services/auth";

// Create managable components
// In this component create a function which will direct post request 
// As an answer to post request, you should get registered users.
// Render users in console.log

const RegisterForm = ({ styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const { registration } = authService();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = {
      username: login,
      email,
      password
    }
    try{
      const { data } = await registration(newUser);
      console.log(data);
    }
    catch(err){
      console.log(err.response.data)
    }
    
  }
 
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className={styles.input}
          value={email}
          onChange={ e => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="pass"
          name="password"
          className={styles.input}
          value={password}
          onChange={ e => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="login" className={styles.label}>
          Login
        </label>
        <input
          type="text"
          placeholder="login"
          name="login"
          className={styles.input}
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </div>
      <input type="submit" value="Register" className={styles.submit}/>
    </form>
  );
};

export default RegisterForm;
