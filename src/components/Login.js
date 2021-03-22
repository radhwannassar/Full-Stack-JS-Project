import { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
const Login = () => {
  const [users, SetUsers] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let found = false;
      data.forEach((d) => {
        if (d.email === email && d.password === password) {
          history.push("/");
          found = true;
        }
      });
      !found && console.log("false");
    }, []);
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
