import { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
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
