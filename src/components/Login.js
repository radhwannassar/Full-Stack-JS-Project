import { useState } from "react";
import { useHistory } from "react-router-dom";
//import Navbar from "./Navbar"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  var [isConnected,setIsconnected]  =useState("") ;

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
             history.push("/ConnectedHome");
            found = true;
          }
          !found && (found = false);
        });

        return ((isConnected = found),
        setIsconnected(isConnected))
      }, []);
  };

  return (
    <div>
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
    {/* <Navbar isConnected={isConnected}/> */}
    
    </div>
  );
};

export default Login;
