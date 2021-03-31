import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Categories = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

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
    <form onSubmit={handleSubmit}>
      <div className="style">
        <div className="card-ainer">
        <div>
          
            <div className="card-content">
              <div className="card-title">
                <h5>Category Name:</h5>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="image-container">
              <h5>Category Picture:</h5>
              <input
                required
                type="file"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                name="picture"
              ></input>
            </div>

            <div className="btn">
              <button variant="primary">
                <a>Add Category</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Categories;
