import { useParams } from "react-router";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";

const Home = () => {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);
  const {id} =useParams();
  const [name, setName] = useState("aaaa");
  const [type, setType] = useState("bbb");


  
  useEffect(() => {
  const categories = { name, type };
  fetch("http://localhost:3001/users/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categories),
  }).then((response) => {
    console.log(response.status);
  });
}, [])

  return (
    <div>
       {users &&
        users.map((user) => (
          <div key={user.id}> 
            <p>{user.firstName}</p>
          </div>
        ))} 
    </div>
  );
};

export default Home;
