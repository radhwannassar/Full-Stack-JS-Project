

const UserList = () => {
    
    useEffect(() => {
        fetch("http://localhost:3001/users")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data)
            
            
          });
      }, []);
    return ( 
        <div>
          {users.map((user)=> (
            
            <div key={user.id}></div>
        
                    ))};</div>
}
 
export default UserList;
