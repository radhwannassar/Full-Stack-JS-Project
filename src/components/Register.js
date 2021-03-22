import { useState } from "react";
import { useHistory} from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("");
  const [wheight, setWheight] = useState("");
  const [skincolor, setSkinColor] = useState("");
  const [pic, setPic] = useState("");
  const history=useHistory();
//   const onSubmit=(data)=>{
//         console.log(data)
//     }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const user={firstName,lastName,email,password,gender,size,wheight,skincolor,pic};
    fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => {
        console.log(response.status);
       // setIsPending();
        //history.go(-1);
      });
      history.push("/");
    };
  return (
    <div className="Register">
      <form onSubmit ={handleSubmit}>
        <label>firstName:</label>
        <input type="text" required value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}></input>

        <label>lastName:</label>
        <input type="text" required value={lastName}
        onChange ={(e)=> setLastName(e.target.value)}></input>

        <label>email</label>
        <input type="email" required value={email}
        onChange ={(e)=>setEmail(e.target.value)}></input>

        <label>password</label>
        <input type="password" required value={password}
        onChange={(e)=>setPassword(e.target.value)}></input>

        <label>Gender:</label>
        <select value={gender} onChange={(e)=> setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label> Size:</label>
        <input type="text" required value={size} 
        onChange={(e)=>setSize(e.target.value)}></input>

        <label>Wheight:</label>
        <input type ="text" required value={wheight}
        onChange={(e)=>setWheight(e.target.value)}></input>
        
        <label>Skin-Color</label>
        <input type ="text" required value={skincolor}
        onChange={(e)=>setSkinColor(e.target.value)}></input>
        
         <label>Please add a picture </label>
         <input type="file" value={pic} 
        onChange={(e)=>setPic(e.target.value)} name="picture"></input>
        
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
