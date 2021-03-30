
import {useEffect, useState } from "react";
import { Card } from "react-bootstrap";
const CustomizedCategories = () => {
    const [catname, setcatName] = useState("");
    const [catimg, setcatImg] = useState("");
    const [data, setData] = useState([]);
  
  const handleSubmit = (e) => {
        e.preventDefault();
        const category = { catname, catimg };
        fetch("http://localhost:3001/customizedCategories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }).then((response) => {
          console.log(response.status);
        });
      };
      
  
  useEffect (()=>{
                
    fetch("http://localhost:3001/CustomizedCategories/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data);
     
    } 
   )},[])
   const handleClick=(id_c) =>{
    
     fetch('http://localhost:3001/CustomizedCategories/'+id_c,{
        method : "DELETE"
    }).then((data)=>{
      //data=data.find(cat =>cat.id!==id_c)
      
    })  
}
    return (
      <div>
        <div className="Category">
      <form onSubmit={handleSubmit}>
        <Card >
          <Card.Body>
            <Card.Title>
              <label>Category Name:</label>
              <input
                type="text"
                required
                value={catname}
                onChange={(e) => setcatName(e.target.value)}
              ></input>
            </Card.Title>
            <Card.Text>
              <label>Category Picture:</label>
              <input
                required
                type="file"
                value={catimg}
                onChange={(e) => setcatImg(e.target.value)}
                name="picture"
              ></input>
            </Card.Text>
            <button variant="primary">Add Category</button>
          </Card.Body>
        </Card>
        
      </form>
    </div>
    <div>
      <div className="Category">
        {data.map((category) => (
          <div key={category.id}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <label>Category Name:</label>
                  <p>{category.catname}</p>
                </Card.Title>
                <Card.Text>
                  <label>Category Picture:</label>
                  <div>{category.catimg}</div>
                </Card.Text>
              </Card.Body>
            </Card>
            <button onClick={()=>handleClick(category.id)}> Delete</button>
          </div>
          
        ))}
      </div>
      
    </div>
    </div>

      );
}
 
export default CustomizedCategories;