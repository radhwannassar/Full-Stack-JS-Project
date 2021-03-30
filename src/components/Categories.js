
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router";

const Categories = () => {
  
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const {id} =useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { name, img };
    fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    }).then((response) => {
      console.log(response.status);
    });
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <label>Category Name:</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </Card.Title>
            <Card.Text>
              <label>Category Picture:</label>
              <input
                required
                type="file"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                name="picture"
              ></input>
            </Card.Text>
            <button variant="primary">Add Category</button>
          </Card.Body>
        </Card>
        
      </form>
    </div>
  );
};

export default Categories;
