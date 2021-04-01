import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cards.css";

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

  useEffect(() => {
    fetch("http://localhost:3001/CustomizedCategories/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleClick = (id_c) => {
    fetch("http://localhost:3001/CustomizedCategories/" + id_c, {
      method: "DELETE",
    }).then((data) => {
      //data=data.find(cat =>cat.id!==id_c)
    });
  };
  return (
    <div>
      <div  className="style">
        <div className="card-ainer">
          <form onSubmit={handleSubmit}>
            <div className="card-content">
              <div className="card-title">
                <h5>Category Name:</h5>
                <input
                  type="text"
                  required
                  value={catname}
                  onChange={(e) => setcatName(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="image-container">
              <h5>Category Picture:</h5>
              <input
                required
                type="file"
                value={catimg}
                onChange={(e) => setcatImg(e.target.value)}
                name="picture"
              ></input>
            </div>

            <div className="bn">
              <button>
                <a>Add Category</a>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="categories">
        {data.map((category) => (
          <div key={category.id}>
            <Link to={`/items/${category.id}`}>
              <div className="card-container ">
                <div className="image-container">
                  <img src="./photo/jacket.jpg" alt="" />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    <h5>{category.catname}</h5>
                  </div>
                </div>

                <div className="btn">
                  <button onClick={() => handleClick(category.id)}>
                    <a>Delete</a>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomizedCategories;
// {category.catimg}
