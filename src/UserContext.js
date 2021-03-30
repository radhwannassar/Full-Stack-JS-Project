import { useEffect, useState, createContext } from "react";
import { useParams} from "react-router"
export const UserContext = createContext();

export const UserProvider = (props) => {
  //const {id}=useParams();
  const [users, setUsers] = useState(
    useEffect(() => {
      fetch("http://localhost:3001/users",)
        .then(res => {
          return res.json();
        })
        .then(users => {
            setUsers(users);
            
         
        });
    }, [])
  );
  return (
    <div>
      <UserContext.Provider value={[users, setUsers]} >
        {props.children}
      </UserContext.Provider>
    </div>
  );
};
